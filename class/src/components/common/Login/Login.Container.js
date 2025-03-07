import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import LoginUI from "./Login.Presenter";

export default function Login() {
  const router = useRouter();

  // 아이디 & 비밀번호 입력값 상태 관리
  const [userId, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // 에러 메시지 상태 추가

  // 입력값 변경 핸들러
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // 로그인 요청 함수
  const handleLogin = async () => {
    setError(""); // 기존 에러 초기화

    try {
      const response = await axios.post(
        "http://localhost:8080/public/member/login/local",
        { userId, password }
      );

      console.log("로그인 성공:", response.data);
      router.push("/"); // 로그인 성공 후 이동
    } catch (error) {
      console.error("로그인 실패:", error.response?.data || error.message);
      setError("로그인 실패! 아이디와 비밀번호를 확인하세요."); // UI에 표시할 에러 메시지 설정
    }
  };

  // 회원가입 페이지로 이동하는 함수
  const goToSignUp = () => {
    router.push("/SignUp");
  };

  return (
    <LoginUI
      userId={userId}
      password={password}
      onUsernameChange={handleUsernameChange}
      onPasswordChange={handlePasswordChange}
      onLogin={handleLogin}
      onSignUp={goToSignUp}
      error={error} // 에러 메시지를 UI에 전달
    />
  );
}
