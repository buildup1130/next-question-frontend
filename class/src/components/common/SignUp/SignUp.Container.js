import { useState } from "react";
import { useRouter } from "next/router";
import SignUpUI from "./SignUp.Presenter";
import axios from "axios"; // axios 임포트

export default function SignUp() {
  const router = useRouter();

  const [form, setForm] = useState({
    userId: "", // 변경된 키
    email: "",
    password: "",
    confirmPassword: "",
    nickname: "",
  });

  // 입력값 변경 핸들러
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // 회원가입 처리
  const handleSubmit = async (e) => {
    console.log(form);
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
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
        router.push("/Login"); // 회원가입 후 로그인 페이지로 이동
      } else {
        throw new Error("회원가입 실패");
      }
    } catch (error) {
      console.error("회원가입 중 오류 발생:", error);
      alert("회원가입 중 오류가 발생했습니다.");
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
      onSignUpClick={handleGoToLogin} // 로그인 페이지 이동 함수 전달
    />
  );
}
