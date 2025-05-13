import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/router";
import { useAuth } from "@/utils/AuthContext";
import { getWrongNote } from "@/utils/WrongNoteManager";
import WrongWorkbookUI from "./WrongWorkbook.Presenter";

export default function WrongWorkbookContainer() {
  const router = useRouter();
  const { workbookId, title } = router.query;
  const { token } = useAuth();

  const [questions, setQuestions] = useState([]);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const handleBack = () => router.back();

  const fetchWrongQuestions = useCallback(async () => {
    if (!token || !workbookId) return;

    try {
      const today = new Date();
      today.setHours(today.getHours() + 9);
      const todayStr = today.toISOString().split("T")[0];

      const result = await getWrongNote(token, "2020-01-01", todayStr);
      if (!result?.questions) return;

      const workbookQuestions = result.questions
        .filter((q) => q.encryptedWorkBookId === workbookId)
        .map(({ encryptedQuestionId, name, type, opt, answer }) => ({
          encryptedQuestionId,
          name,
          type,
          opt,
          answer,
        }));

      setQuestions(workbookQuestions);
    } catch (error) {
      console.error("오답 문제 불러오기 오류:", error);
    }
  }, [token, workbookId]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setShowScrollTop(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    fetchWrongQuestions();
  }, [fetchWrongQuestions]);

  return (
    <WrongWorkbookUI
      title={title}
      questions={questions}
      onBack={handleBack}
      showAnswer={showAnswer}
      setShowAnswer={setShowAnswer}
      showScrollTop={showScrollTop}
      scrollToTop={scrollToTop}
    />
  );
}
