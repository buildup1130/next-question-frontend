import { useEffect, useState } from "react";
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

  useEffect(() => {
    if (token && workbookId) {
      fetchWrongQuestions();
    }
  }, [token, workbookId]);

  const fetchWrongQuestions = async () => {
    try {
      const today = new Date();
      today.setHours(today.getHours() + 9);
      const todayStr = today.toISOString().split("T")[0];

      const result = await getWrongNote(token, "2020-01-01", todayStr);

      if (!result || !result.questions) return;

      const workbookQuestions = result.questions
        .filter((q) => q.encryptedWorkBookId === workbookId)
        .map((q) => ({
          encryptedQuestionId: q.encryptedQuestionId,
          name: q.name,
          type: q.type,
          opt: q.opt,
          answer: q.answer,
        }));

      setQuestions(workbookQuestions);
    } catch (error) {
      console.error("오답 문제 불러오기 오류:", error);
    }
  };

  const handleBack = () => router.back();

  return (
    <WrongWorkbookUI
      title={title}
      questions={questions}
      onBack={handleBack}
      showAnswer={showAnswer}
      setShowAnswer={setShowAnswer}
    />
  );
}
