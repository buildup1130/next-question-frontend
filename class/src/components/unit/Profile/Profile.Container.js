// ✅ Profile.Container.js
import { useEffect, useState } from "react";
import ProfileUI from "./Profile.Presenter";
import { subDays, format } from "date-fns";
import axios from "axios";
import { useAuth } from "@/utils/AuthContext";

export default function ProfileLogic() {
  const { token } = useAuth();

  const [data, setData] = useState({
    nickname: "서표",
    userId: "Seopyo1248",
    averageAccuracy: 89, // 서버에서 제공되지 않는다면 고정
    todayStudyCount: 0,
    totalSolved: 0,
    avgPerDay: 0,
    streak: 0,
    maxStreak: 0,
    heatmapData: [],
  });

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8080/member/statistics/profile",
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        const {
          todaySolvedCount,
          thisMonthSolvedCount,
          monthlyAverageSolvedCount,
          streak,
          maxStreak,
        } = res.data;

        const today = new Date();
        const heatmapData = Array.from({ length: 100 }).map((_, i) => {
          const date = subDays(today, 100 - i);
          return {
            date: format(date, "yyyy-MM-dd"),
            count: Math.floor(Math.random() * 10), // TODO: API 제공 시 교체
          };
        });

        setData((prev) => ({
          ...prev,
          todayStudyCount: todaySolvedCount,
          totalSolved: thisMonthSolvedCount,
          avgPerDay: monthlyAverageSolvedCount,
          streak,
          maxStreak,
          heatmapData,
        }));
      } catch (err) {
        console.error("🔥 프로필 통계 조회 실패:", err);
      }
    };

    fetchProfileData();
  }, [token]);

  return <ProfileUI {...data} />;
}
