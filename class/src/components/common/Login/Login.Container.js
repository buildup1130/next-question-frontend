import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import LoginUI from "./Login.Presenter";
import { useAuth } from "@/utils/AuthContext";

export default function LoginLogic() {
  const router = useRouter();
  const { login } = useAuth();

  const [userId, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleUsernameChange = (event) => setUsername(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);

  const handleLogin = async () => {
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:8080/public/member/login/local",
        { userId, password }
      );

      login(
        {
          nickname: response.data.nickname,
          role: response.data.role,
        },
        response.data.accessToken
      );

      router.push("/");
    } catch (error) {
      console.error("로그인 실패:", error.response?.data || error.message);
      setError("로그인 실패! 아이디와 비밀번호를 확인하세요.");
    }
  };

  const handleSocialLogin = async () => {
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:8080/public/oauth2/google"
      );
      window.location.href = response.data; // 리턴된 구글 로그인 URL로 이동
    } catch (error) {
      console.error("소셜 로그인 실패:", error);
      setError("소셜 로그인 중 문제가 발생했습니다.");
    }
  };

  const goToSignUp = () => router.push("/SignUp");

  return (
    <LoginUI
      userId={userId}
      password={password}
      onUsernameChange={handleUsernameChange}
      onPasswordChange={handlePasswordChange}
      onLogin={handleLogin}
      onSignUp={goToSignUp}
      handleSocialLogin={handleSocialLogin}
      error={error}
    />
  );
}
