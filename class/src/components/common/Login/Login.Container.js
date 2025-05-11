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
  const [keepLogin, setKeepLogin] = useState(false);
  const [error, setError] = useState("");

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleKeepLoginChange = () => setKeepLogin((prev) => !prev);

  const handleLogin = async () => {
    setError("");

    // console.log("로그인 요청 데이터:", {
    //   userId,
    //   password,
    //   keepLogin,
    // });

    try {
      const response = await axios.post(
        "http://localhost:8080/public/member/login/local",
        {
          userId,
          password,
          keepLogin,
        }
      );

      login(
        {
          userId,
          nickname: response.data.nickname,
          role: response.data.role,
        },
        response.data.accessToken,
        response.data.refreshToken
      );

      router.push("/");
    } catch (error) {
      setError("로그인 실패! 아이디와 비밀번호를 확인하세요.");
    }
  };

  const handleSocialLogin = async () => {
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:8080/public/oauth2/google"
      );
      window.location.href = response.data;
    } catch (error) {
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
      keepLogin={keepLogin}
      onChangeKeepLogin={handleKeepLoginChange}
    />
  );
}
