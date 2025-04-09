// ✅ SocialSignUp.Container.js
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import SocialSignUpUI from "./SocialSignUp.Presenter";

export default function SocialSignUpContainer() {
  const router = useRouter();
  const [email, setEmail] = useState(null);

  useEffect(() => {
    if (router.isReady && router.query.email) {
      setEmail(router.query.email);
    }
  }, [router.isReady, router.query]);

  const [nickname, setNickname] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setNickname(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await axios.post(
        "http://localhost:8080/public/member/regist/social/google",
        {
          userId: email,
          nickname: nickname,
        }
      );

      alert("소셜 회원가입 성공! 다시 로그인해 주세요.");
      router.push("/Login");
    } catch (err) {
      console.error("회원가입 실패:", err);
      setError("회원가입 중 문제가 발생했습니다.");
    }
  };

  if (!email) return <div>이메일 정보를 불러오는 중...</div>;

  return (
    <SocialSignUpUI
      email={email}
      nickname={nickname}
      onChange={handleChange}
      onSubmit={handleSubmit}
      error={error}
    />
  );
}
