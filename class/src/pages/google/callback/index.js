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
        "/api/public/oauth2/google/callback",
        { code },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      //userid api 요청 및 수정 필요
      console.log(response.data);
      const { snsId, accessToken, nickname, role } = response.data;
      login({ userId: snsId, nickname, role }, accessToken);
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

  if (loading && !error) return <div></div>;
  if (error) return <div>{error}</div>;
  return null;
}
