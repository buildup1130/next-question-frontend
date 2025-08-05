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
    steak: 0,
    maxStreak: 0,
    heatmapData: [],
  });

  useEffect(() => {
    if (!token) return;

    const fetchProfileData = async () => {
      try {
        const res = await axios.get("/api/member/statistics/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        console.log(res.data);
        const {
          nickName,
          userId,
          averageCorrectRate,
          todaySolvedCount,
          thisMonthSolvedCount,
          monthlyAverageSolvedCount,
          steak,
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
          steak: steak ?? 0,
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
