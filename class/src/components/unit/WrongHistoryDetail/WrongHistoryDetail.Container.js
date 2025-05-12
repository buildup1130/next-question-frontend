import { useEffect, useState } from "react";
import WrongHistoryDetailUI from "./WrongHistoryDetail.Presenter";

export default function WrongHistoryDetailContainer() {
  const [questions, setQuestions] = useState([]);
  const [showAnswer, setShowAnswer] = useState(false); // ✅ 정답 보기 상태 추가

  useEffect(() => {
    const stored = localStorage.getItem("tempWrongHistoryQuestions");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setQuestions(parsed);
      } catch (e) {
        console.error("❌ JSON 파싱 실패:", e);
      }
    }
  }, []);

  return (
    <WrongHistoryDetailUI
      questions={questions}
      showAnswer={showAnswer}
      setShowAnswer={setShowAnswer} // ✅ 정답 토글 함수 전달
    />
  );
}
