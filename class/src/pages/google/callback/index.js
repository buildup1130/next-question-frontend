import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { useAuth } from "@/utils/AuthContext";

export default function GoogleCallback() {
  const router = useRouter();
  const { login } = useAuth();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const code = router.query.code;
    if (code && router.isReady) {
      handleGoogleLogin(code);
    }
  }, [router.query, router.isReady]);

  const handleGoogleLogin = async (code) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/public/oauth2/google/callback",
        { code },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const { accessToken, nickname, role } = response.data;
      login({ nickname, role }, accessToken);
      router.push("/");
    } catch (err) {
      const status = err.response?.status;
      const snsId = err.response?.data?.snsId;

      if (status === 409 && snsId) {
        router.push({
          pathname: "/SocialSignUp",
          query: { email: snsId },
        });
      } else {
        setError("로그인 중 오류가 발생했습니다.");
        setLoading(false);
      }
    }
  };

  if (loading && !error) return <div>로그인 처리 중...</div>;
  if (error) return <div>{error}</div>;
  return null;
}
