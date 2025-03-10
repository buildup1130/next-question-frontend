import { useState } from "react";
import { useRouter } from "next/router";
import SignUpUI from "./SignUp.Presenter";
import axios from "axios";

export default function SignUp() {
  const router = useRouter();

  const [form, setForm] = useState({
    userId: "",
    email: "",
    password: "",
    confirmPassword: "",
    nickname: "",
  });

  const [error, setError] = useState(""); // 에러 메시지 상태 추가

  // 입력값 변경 핸들러
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // 회원가입 처리
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // 기존 에러 초기화

    if (form.password !== form.confirmPassword) {
      setError("비밀번호가 일치하지 않습니다.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/public/member/regist",
        {
          userId: form.userId,
          password: form.password,
          email: form.email,
          nickname: form.nickname,
        }
      );

      if (response.status === 201) {
        alert("회원가입 성공!");
        router.push("/Login");
      } else {
        throw new Error("회원가입 실패");
      }
    } catch (error) {
      console.error("회원가입 중 오류 발생:", error);
      setError("회원가입 중 오류가 발생했습니다. 다시 시도해 주세요.");
    }
  };

  // 로그인 페이지로 이동
  const handleGoToLogin = () => {
    router.push("/Login");
  };

  return (
    <SignUpUI
      form={form}
      onChange={handleChange}
      onSubmit={handleSubmit}
      onSignUpClick={handleGoToLogin}
      error={error} // 에러 메시지를 UI에 전달
    />
  );
}
