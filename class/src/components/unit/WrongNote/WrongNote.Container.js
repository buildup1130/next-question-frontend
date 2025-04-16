import { useState } from "react";
import WrongNotePresenter from "./WrongNote.Presenter";

export default function WrongNoteContainer() {
  const [selectedDateRange, setSelectedDateRange] = useState({
    start: "2025-04-22",
    end: "2025-04-25",
  });

  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  const [openSections, setOpenSections] = useState({});

  const toggleSection = (date) => {
    setOpenSections((prev) => ({
      ...prev,
      [date]: !prev[date],
    }));
  };

  const dummyData = [
    {
      date: "2025-04-25",
      questions: [
        {
          id: 1,
          type: "객관식",
          title: "컴퓨터 성능 향상과 관련 없는 기술은?",
          fullText:
            "다음 중 컴퓨터 성능을 향상시키기 위해 설계된 기술이 아닌 것은 무엇인가요?",
          options: [
            "1 캐시 메모리",
            "2 멀티코어 CPU",
            "3 저해상도 디스플레이",
            "4 SSD 저장장치",
            "5 파이프라이닝",
          ],
          answer: "3 저해상도 디스플레이",
        },
        {
          id: 2,
          type: "O/X",
          title: "RAM은 휘발성 메모리이다.",
          fullText:
            "RAM은 전원이 꺼지면 저장된 내용이 사라지는 휘발성 메모리이다.",
          options: ["O", "X"],
          answer: "O",
        },
        {
          id: 3,
          type: "빈칸",
          title: "운영체제는 컴퓨터의 ___를 관리한다.",
          fullText:
            "운영체제는 컴퓨터의 하드웨어와 소프트웨어 자원을 관리하고, 사용자와 컴퓨터 간의 인터페이스 역할을 한다. 빈칸에 들어갈 말은?",
          options: [],
          answer: "자원",
        },
      ],
    },
  ];

  const handleQuestionClick = (question) => {
    setSelectedQuestion(question);
    setModalOpen(true);
    setShowAnswer(false);
  };

  return (
    <WrongNotePresenter
      selectedDateRange={selectedDateRange}
      setSelectedDateRange={setSelectedDateRange}
      data={dummyData}
      onQuestionClick={handleQuestionClick}
      isModalOpen={isModalOpen}
      selectedQuestion={selectedQuestion}
      setModalOpen={setModalOpen}
      showAnswer={showAnswer}
      setShowAnswer={setShowAnswer}
      openSections={openSections}
      toggleSection={toggleSection}
    />
  );
}
