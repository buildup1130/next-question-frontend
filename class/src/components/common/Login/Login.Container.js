import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import LoginUI from "./Login.Presenter";

export default function Login() {
  const router = useRouter();

  // 아이디 & 비밀번호 입력값 상태 관리
  const [userId, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // 입력값 변경 핸들러
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // 로그인 요청 함수
  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/public/member/login/local",
        {
          userId,
          password,
        }
      );

      console.log("로그인 성공:", response.data);
      alert("로그인 성공!");

      // 로그인 성공 후 원하는 페이지로 이동
      router.push("/");
    } catch (error) {
      console.error("로그인 실패:", error.response?.data || error.message);
      alert("로그인 실패! 아이디와 비밀번호를 확인하세요.");
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
      onSignUp={goToSignUp} // 회원가입 버튼 클릭 시 실행될 함수 전달
    />
  );
}
