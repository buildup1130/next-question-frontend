import { useEffect, useState } from "react";
import ProfileUI from "./Profile.Presenter";
import axios from "axios";
import { useAuth } from "@/utils/AuthContext";

export default function ProfileLogic() {
  const { token } = useAuth();

  const [data, setData] = useState({
    nickname: "",
    userId: "",
    averageAccuracy: 0,
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
          nickName,
          userId,
          averageCorrectRate,
          todaySolvedCount,
          thisMonthSolvedCount,
          monthlyAverageSolvedCount,
          streak,
          maxStreak,
          dailySolveCountThisMonth,
        } = res.data;

        const heatmapData = dailySolveCountThisMonth.map((item) => {
          const utcDate = new Date(item.date);
          utcDate.setHours(utcDate.getHours() + 9);
          const kstDateStr = utcDate.toISOString().split("T")[0];
          return {
            date: kstDateStr,
            count: item.solveCount,
          };
        });

        setData({
          nickname: nickName,
          userId,
          averageAccuracy: averageCorrectRate,
          todayStudyCount: todaySolvedCount,
          totalSolved: thisMonthSolvedCount,
          avgPerDay: monthlyAverageSolvedCount,
          streak: streak ?? 0,
          maxStreak: maxStreak ?? 0,
          heatmapData,
        });
      } catch (err) {
        console.error(" 프로필 통계 조회 실패:", err);
      }
    };

    fetchProfileData();
  }, [token]);

  return <ProfileUI {...data} />;
}
