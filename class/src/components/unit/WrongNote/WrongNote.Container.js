import { useState, useEffect } from "react";
import WrongNotePresenter from "./WrongNote.Presenter";
import { getWrongNote } from "@/utils/WrongNoteManager";
import { useAuth } from "@/utils/AuthContext";

export default function WrongNoteContainer() {
  // 오늘 날짜 기준으로 초기 날짜 설정
  const today = new Date();
  today.setHours(today.getHours() + 9);
  const todayStr = today.toISOString().split("T")[0];

  const [selectedDateRange, setSelectedDateRange] = useState({
    start: todayStr,
    end: todayStr,
  });

  const { token } = useAuth();
  const [wrongNoteData, setWrongNoteData] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [openSections, setOpenSections] = useState({});
  const [isDateModalOpen, setDateModalOpen] = useState(false);
  const [tempStart, setTempStart] = useState(selectedDateRange.start);
  const [tempEnd, setTempEnd] = useState(selectedDateRange.end);

  useEffect(() => {
    if (!token) return;
    fetchWrongNotes();
  }, [token, selectedDateRange]);

  const fetchWrongNotes = async () => {
    if (!token) return;

    try {
      const result = await getWrongNote(
        token,
        selectedDateRange.start,
        selectedDateRange.end
      );

      if (!result || !result.questions) return;

      const grouped = {};

      result.questions.forEach((q, index) => {
        const solvedDateKST = new Date(q.solvedDate);
        solvedDateKST.setHours(solvedDateKST.getHours() + 9);
        const dateOnly = solvedDateKST.toISOString().split("T")[0];

        if (!grouped[dateOnly]) {
          grouped[dateOnly] = [];
        }

        grouped[dateOnly].push({
          id: index,
          type:
            q.type === "MULTIPLE_CHOICE"
              ? "객관식"
              : ["TRUE_FALSE", "OX", "TRUEFALSE"].includes(q.type)
              ? "O/X"
              : "빈칸",

          title: q.name,
          fullText: q.name,
          options: q.opt ? q.opt.split("/") : [],
          answer: q.answer,
        });
      });

      const formatted = Object.entries(grouped).map(([date, questions]) => ({
        date: date.split("T")[0],
        questions,
      }));

      setWrongNoteData(formatted);
    } catch (error) {
      console.error(" fetchWrongNotes 에러:", error);
    }
  };

  const toggleSection = (date) => {
    setOpenSections((prev) => ({
      ...prev,
      [date]: !prev[date],
    }));
  };

  const handleQuestionClick = (question) => {
    setSelectedQuestion(question);
    setModalOpen(true);
    setShowAnswer(false);
  };

  const handleOpenDateModal = () => {
    setTempStart(selectedDateRange.start);
    setTempEnd(selectedDateRange.end);
    setDateModalOpen(true);
  };

  const handleApplyDateFilter = () => {
    setSelectedDateRange({ start: tempStart, end: tempEnd });
    setDateModalOpen(false);
  };

  const handleQuickRange = (type) => {
    const now = new Date();
    now.setHours(now.getHours() + 9);
    let start = new Date(now);
    let end = new Date(now);

    if (type === "yesterday") {
      start.setDate(start.getDate() - 1);
      end.setDate(end.getDate() - 1);
    } else if (type === "3days") {
      start.setDate(start.getDate() - 2);
    } else if (type === "7days") {
      start.setDate(start.getDate() - 6);
    }

    const format = (d) => d.toISOString().split("T")[0];
    setTempStart(format(start));
    setTempEnd(format(end));
  };

  return (
    <WrongNotePresenter
      selectedDateRange={selectedDateRange}
      setSelectedDateRange={setSelectedDateRange}
      data={wrongNoteData}
      onQuestionClick={handleQuestionClick}
      isModalOpen={isModalOpen}
      selectedQuestion={selectedQuestion}
      setModalOpen={setModalOpen}
      showAnswer={showAnswer}
      setShowAnswer={setShowAnswer}
      openSections={openSections}
      toggleSection={toggleSection}
      isDateModalOpen={isDateModalOpen}
      setIsDateModalOpen={setDateModalOpen}
      handleOpenDateModal={handleOpenDateModal}
      tempStart={tempStart}
      tempEnd={tempEnd}
      setTempStart={setTempStart}
      setTempEnd={setTempEnd}
      handleApplyDateFilter={handleApplyDateFilter}
      handleQuickRange={handleQuickRange}
    />
  );
}
