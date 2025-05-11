import { useState } from "react";
import { useRouter } from "next/router";
import SignUpUI from "./SignUp.Presenter";
import axios from "axios";
import { toast } from "react-toastify";

export default function SignUpLogic() {
  const router = useRouter();

  const [form, setForm] = useState({
    userId: "",
    email: "",
    password: "",
    confirmPassword: "",
    nickname: "",
  });

  const [errors, setErrors] = useState({
    userId: "",
    password: "",
    confirmPassword: "",
    email: "",
    nickname: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const allowedDomains = ["gmail.com", "google.com", "naver.com", "daum.net"];
    const emailParts = form.email.split("@");
    const domain = emailParts[1];

    if (!form.userId.trim()) newErrors.userId = "아이디를 입력해 주세요.";
    if (!form.password.trim()) newErrors.password = "비밀번호를 입력해 주세요.";
    if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "비밀번호가 일치하지 않습니다.";
    }
    if (!emailRegex.test(form.email)) {
      newErrors.email = "올바른 이메일 형식이 아닙니다.";
    } else if (!domain || !allowedDomains.includes(domain)) {
      newErrors.email =
        "gmail.com, naver.com, daum.net 이메일만 사용 가능합니다.";
    }
    if (!form.nickname.trim()) newErrors.nickname = "닉네임을 입력해 주세요.";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
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
        toast.success("회원가입 성공! 로그인해 주세요.");
        router.push("/Login");
      } else {
        throw new Error("회원가입 실패");
      }
    } catch (error) {
      const message =
        error?.response?.data?.message ||
        error?.response?.data?.error ||
        error.message;

      const newErrors = {};

      if (message?.includes("아이디")) {
        newErrors.userId = "입력하신 아이디는 이미 사용 중입니다.";
      }
      if (message?.includes("이메일")) {
        newErrors.email = "입력하신 이메일은 이미 사용 중입니다.";
      }
      if (message?.includes("닉네임") || message?.includes("별명")) {
        newErrors.nickname = "입력하신 닉네임은 이미 사용 중입니다.";
      }

      if (Object.keys(newErrors).length === 0) {
        toast.error("회원가입 중 오류가 발생했습니다.");
      }

      setErrors((prev) => ({ ...prev, ...newErrors }));
    }
  };

  return (
    <SignUpUI
      form={form}
      onChange={handleChange}
      onSubmit={handleSubmit}
      errors={errors}
    />
  );
}
