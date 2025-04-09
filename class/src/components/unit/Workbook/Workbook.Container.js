import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "@/utils/AuthContext";
import { getWorkbookQuestions } from "@/utils/WorkbookManager";
import WorkbookPresenter from "./Workbook.Presenter";
import BottomNavigationLogic from "../../common/BottomNavigation/BottomNavigation.Container";

export default function WorkbookContainer() {
  const router = useRouter();
  const { user, token } = useAuth();
  const userId = user?.userId;
  const { workBookId, title } = router.query;

  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    if (token && workBookId && userId) {
      getWorkbookQuestions(token, workBookId, userId).then((data) => {
        if (data) setQuestions(data);
      });
    }
  }, [token, workBookId, userId]);

  const handleBack = () => {
    router.back();
  };

  return (
    <>
      <WorkbookPresenter
        title={title}
        questions={questions}
        onBack={handleBack}
      />

      {/* ✅ 바텀 네비게이션 추가 */}
      <BottomNavigationLogic />
    </>
  );
}
