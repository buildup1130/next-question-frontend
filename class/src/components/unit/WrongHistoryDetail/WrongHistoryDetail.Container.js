import { useEffect, useState } from "react";
import WrongHistoryDetailUI from "./WrongHistoryDetail.Presenter";

export default function WrongHistoryDetailContainer() {
  const [questions, setQuestions] = useState([]);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

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

  return (
    <WrongHistoryDetailUI
      questions={questions}
      showAnswer={showAnswer}
      setShowAnswer={setShowAnswer}
      showScrollTop={showScrollTop}
      scrollToTop={scrollToTop}
    />
  );
}
