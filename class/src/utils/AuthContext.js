// @/utils/AuthContext.js
import { createContext, useState, useContext, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

   // 수정: 응답 인터셉터에 재시도 로직 추가
   useEffect(() => {
    // 응답 인터셉터 설정
    const responseInterceptor = axios.interceptors.response.use(
      (response) => response,
      async (error) => {
        // 401 Unauthorized 에러인 경우
        if (error.response && error.response.status === 401) {
          const refreshToken = localStorage.getItem('refreshToken');
          console.log(`refresh Token ${refreshToken}`)

          // refreshToken이 없으면 로그아웃
          if (!refreshToken) {
            logout();
            return Promise.reject(error);
          }
          
          // 원래 요청 저장
          const originalRequest = error.config;
          
          // 이미 재시도했는지 확인 (무한 루프 방지)
          if (originalRequest._retry) {
            logout();
            return Promise.reject(error);
          }
          
          originalRequest._retry = true;
          
          try {
            const response = await axios.get(
              "/api/public/member/refresh",
              {
                headers: {
                  'Authorization': `Bearer ${refreshToken}`,
                  'Content-Type': 'application/json'
                }
              }
            );
            
            const accessToken = response.data;
            // 토큰 상태 설정
            setToken(accessToken);
            
            // 로컬 스토리지에 저장
            localStorage.setItem('token', accessToken);
            
            // 원래 요청의 헤더 업데이트
            originalRequest.headers.Authorization = `Bearer ${accessToken}`;
            
            // 원래 요청 재시도
            return axios(originalRequest);
          } catch (refreshError) {
            console.error("토큰 갱신 실패:", refreshError);
  
            // 서버에서 명시적으로 인증 실패를 반환한 경우에만 로그아웃
            if (refreshError.response && (
                refreshError.response.status === 401 || 
                refreshError.response.status === 403 ||
                refreshError.response.status === 500)) {
              console.log("인증 실패로 로그아웃 실행");
              logout();
            } else {
              console.log("일시적 오류, 로그아웃하지 않음");
              // 네트워크 오류 등 일시적인 문제일 수 있으므로 로그아웃하지 않음
            }
            
            return Promise.reject(error);
          }
        }
        return Promise.reject(error);
      }
    );

    const requestInterceptor = axios.interceptors.request.use(
      (config) => {  
        // CORS 관련 헤더 추가
        config.headers['ngrok-skip-browser-warning'] = 'true';
        
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    
    // 컴포넌트 언마운트 시 인터셉터 제거
    return () => {
      axios.interceptors.response.eject(responseInterceptor);
      axios.interceptors.request.eject(requestInterceptor);
    };
  }, []);

  useEffect(() => {
    // 클라이언트 사이드에서만 실행
    if (typeof window !== 'undefined') {
      const storedToken = localStorage.getItem('token');
      const storedUser = localStorage.getItem('user');
      
      if (storedToken && storedUser) {
        setToken(storedToken);
        setUser(JSON.parse(storedUser));
      }
      
      setLoading(false);
    }
  }, []);

  // 로그인 함수
  const login = (userData, accessToken, refreshToken) => {
    setUser(userData);
    setToken(accessToken);
    
    // 로컬 스토리지에 저장
    localStorage.setItem('token', accessToken);
    localStorage.setItem('user', JSON.stringify(userData));
    localStorage.setItem('refreshToken', refreshToken);
  };

  // 로그아웃 함수
  const logout = useCallback(() => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('refreshToken');
    router.push('/');
  },[router]);

  // 인증 상태 확인
  const isAuthenticated = !!token;

  return (
    <AuthContext.Provider value={{ user, token, login, logout, isAuthenticated, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

// 커스텀 훅
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth는 AuthProvider 내부에서만 사용할 수 있습니다');
  }
  return context;
}