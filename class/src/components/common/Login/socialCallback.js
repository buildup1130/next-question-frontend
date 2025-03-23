// pages/auth/callback.js (또는 callback 처리를 위한 페이지)
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const AuthCallback = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // URL에서 인증 코드 추출
    const code = router.query.code;
    
    // code가 있으면서 router가 준비되었을 때
    if (code && router.isReady) {
      handleGoogleCallback(code);
    }
  }, [router.query, router.isReady]);

  const handleGoogleCallback = async (code) => {
    try {
      // 백엔드로 인증 코드 전송
      const response = await axios.post(
        "http://localhost:8080/public/oauth2/google/callback",
        { code }
      );
      
      // 응답에서 사용자 정보와 토큰 추출
      const { accessToken, user } = response.data;
      
      // 토큰 및 사용자 정보 저장 (로컬 스토리지 또는 상태 관리 도구 사용)
      localStorage.setItem('accessToken', accessToken);
      
      // 전역 상태에 사용자 정보 저장 (예: Context API, Redux 등)
      // 예: dispatch(setUser(user));
      
      // 저장 후 홈페이지로 이동
      router.push('/');
    } catch (error) {
      console.error("인증 오류:", error);
      setError("로그인 처리 중 오류가 발생했습니다.");
      setLoading(false);
    }
  };

  if (loading && !error) {
    return <div>로그인 처리 중...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return null; // 정상적으로 처리되면 홈페이지로 리다이렉트되므로 이 컴포넌트는 렌더링되지 않음
};

export default AuthCallback;