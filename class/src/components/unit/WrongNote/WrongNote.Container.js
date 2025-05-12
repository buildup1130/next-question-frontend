// ✅ WrongNoteContainer.js (setOpenStartCalendar / setOpenEndCalendar 추가 반영)
import { useState, useEffect } from "react";
import { getWrongNote } from "@/utils/WrongNoteManager";
import { useAuth } from "@/utils/AuthContext";
import { useRouter } from "next/router";
import WrongNoteUI from "./WrongNote.Presenter";
import { toast } from "react-toastify";
import { fetchWrongNoteHistoryQuestions } from "@/utils/WorkbookManager";

export default function WrongNoteLogic() {
  const today = new Date();
  today.setHours(today.getHours() + 9);
  const todayStr = today.toISOString().split("T")[0];

  const { token } = useAuth();
  const router = useRouter();

  const [selectedDateRange, setSelectedDateRange] = useState({
    start: todayStr,
    end: todayStr,
  });
  const [wrongNoteData, setWrongNoteData] = useState([]);
  const [workbookMap, setWorkbookMap] = useState({});
  const [groupedHistory, setGroupedHistory] = useState([]);
  const [selectedBooks, setSelectedBooks] = useState([]);
  const [isSelectMode, setIsSelectMode] = useState(false);
  const [openSections, setOpenSections] = useState({});
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [isDateModalOpen, setDateModalOpen] = useState(false);
  const [tempStart, setTempStart] = useState(todayStr);
  const [tempEnd, setTempEnd] = useState(todayStr);
  const [curBook, setCurBook] = useState(null);
  const [sequence, setSequence] = useState(0);
  const [count, setCount] = useState(1);
  const [isTest, setIsTest] = useState(false);
  const [filterOptions, setFilterOptions] = useState(["모든 문제집", "학습별"]);
  const [selectedFilterBook, setSelectedFilterBook] = useState("모든 문제집");
  const [openStartCalendar, setOpenStartCalendar] = useState(false); // ✅ 추가
  const [openEndCalendar, setOpenEndCalendar] = useState(false); // ✅ 추가

  useEffect(() => {
    if (token) fetchWrongNotes();
  }, [token, selectedDateRange]);

  // ✅ fetchWrongNotes 함수 위나 아래 아무 곳이나 가능
  const handleClickHistory = async (historyId) => {
    try {
      const response = await fetchWrongNoteHistoryQuestions(token, historyId);

      if (!response || !response.questions || response.questions.length === 0) {
        return alert("문제를 불러올 수 없습니다.");
      }

      const formatted = response.questions.map((q) => ({
        name: q.name.replace("{BLANK}", "OOO"),
        answer: q.answer,
        type:
          q.type === "MULTIPLE_CHOICE"
            ? "MULTIPLE_CHOICE"
            : q.type === "OX"
            ? "OX"
            : "FILL_IN_THE_BLANK",
        ...(q.opt && { opt: q.opt }),
      }));

      localStorage.setItem("tempQuestionData", JSON.stringify(formatted));
      router.push({ pathname: "/Question", query: { type: 3 } });
    } catch (err) {
      console.error("학습별 문제 불러오기 실패:", err);
      alert("문제를 가져오는 데 실패했습니다.");
    }
  };

  const fetchWrongNotes = async () => {
    try {
      const result = await getWrongNote(
        token,
        selectedDateRange.start,
        selectedDateRange.end,
        "custom" // periodType은 4번째 인자로 명시
      );

      console.log("🟡 전체 응답 결과:", result);
      console.log("🟡 groupedWorkBooks 응답:", result.groupedWorkBooks);
      console.log("❓ questions:", result?.questions);

      console.log("✅ getWrongNote 응답:", result);
      if (!result || !result.questions) return;

      console.log("✅ groupedWorkBooks:", result.groupedWorkBooks);

      const grouped = {};
      result.questions.forEach((q, idx) => {
        const date = new Date(q.solvedDate);
        date.setHours(date.getHours() + 9);
        const dateStr = date.toISOString().split("T")[0];

        const title = q.workBookName?.trim() || "미지정 문제집";
        const id = q.encryptedWorkBookId;

        if (!grouped[title]) grouped[title] = { id, dates: {} };
        if (!grouped[title].dates[dateStr]) grouped[title].dates[dateStr] = [];

        grouped[title].dates[dateStr].push({
          id: idx,
          type:
            q.type === "MULTIPLE_CHOICE"
              ? "객관식"
              : ["OX", "TRUE_FALSE"].includes(q.type)
              ? "O/X"
              : "빈칸",
          title: q.name,
          fullText: q.name,
          options: q.opt ? q.opt.split("/") : [],
          answer: ["OX", "TRUE_FALSE"].includes(q.type)
            ? q.answer === "O"
              ? "O"
              : "X"
            : q.answer,
          solvedAt: q.solvedAt || q.solvedDate,
        });
      });

      const map = {};
      const formatted = Object.entries(grouped).map(
        ([workbook, { id, dates }]) => {
          map[workbook] = id;

          const datesArr = Object.entries(dates).map(([date, questions]) => ({
            date,
            questions,
          }));

          const total = datesArr.reduce(
            (sum, dateObj) => sum + dateObj.questions.length,
            0
          );

          return {
            workbook,
            workbookId: id,
            dates: datesArr,
            total,
          };
        }
      );

      setWorkbookMap(map);
      setWrongNoteData(formatted);
      setGroupedHistory(result.groupedWorkBooks || []);

      const workbookNames = [...new Set(formatted.map((w) => w.workbook))];
      setFilterOptions(["모든 문제집", "학습별", ...workbookNames]);
    } catch (err) {
      console.error("오답노트 에러:", err);
    }
  };

  const toggleSection = (workbook, date) => {
    const key = `${workbook}_${date}`;
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleToggleBookSelect = (id) => {
    setSelectedBooks((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const handleApplyDateFilter = () => {
    const start = new Date(tempStart);
    const end = new Date(tempEnd);

    if (start > end) {
      toast.error("날짜 순서를 확인해주세요.", {
        position: "top-center",
      });
      return; // ✅ 날짜 범위가 유효하지 않으므로 함수 중단
    }

    setSelectedDateRange({ start: tempStart, end: tempEnd });
    setDateModalOpen(false); // ✅ 정상일 때만 모달 닫힘
  };

  const handleQuickRange = (type) => {
    const now = new Date();
    now.setHours(now.getHours() + 9);
    const start = new Date(now);
    const end = new Date(now);

    if (type === "yesterday") {
      start.setDate(start.getDate() - 1);
      end.setDate(end.getDate() - 1);
    } else if (type === "3days") start.setDate(start.getDate() - 2);
    else if (type === "7days") start.setDate(start.getDate() - 6);

    const format = (d) => d.toISOString().split("T")[0];
    setTempStart(format(start));
    setTempEnd(format(end));
  };

  const handleClickStartLearning = () => {
    if (selectedBooks.length === 0) return alert("문제집을 선택해주세요");

    let totalItems = 0;
    selectedBooks.forEach((bookName) => {
      const matchedBook = wrongNoteData.find((b) => b.workbook === bookName);
      if (matchedBook) {
        matchedBook.dates.forEach((d) => {
          totalItems += d.questions.length;
        });
      }
    });

    const firstBook = wrongNoteData.find(
      (b) => b.workbook === selectedBooks[0]
    );
    if (!firstBook) return alert("문제집 정보를 찾을 수 없습니다");

    setCurBook({ id: firstBook.workbookId, items: totalItems });
    setSequence(1);
  };

  const handleConfirmLearning = async () => {
    if (!selectedBooks.length || !wrongNoteData.length) {
      return alert("문제집 선택 또는 데이터가 없습니다");
    }

    let collectedQuestions = [];

    selectedBooks.forEach((bookName) => {
      const book = wrongNoteData.find((b) => b.workbook === bookName);
      if (book) {
        book.dates.forEach((d) => {
          d.questions.forEach((q) => {
            collectedQuestions.push({
              name: q.title.replace("{BLANK}", "OOO"),
              answer: q.answer,
              type:
                q.type === "객관식"
                  ? "MULTIPLE_CHOICE"
                  : q.type === "O/X"
                  ? "OX"
                  : "FILL_IN_THE_BLANK",
              ...(q.options?.length > 0 && {
                opt: q.options.join("/"),
              }),
            });
          });
        });
      }
    });

    if (!collectedQuestions.length) {
      return alert("학습할 문제가 없습니다");
    }

    localStorage.setItem(
      "tempQuestionData",
      JSON.stringify(collectedQuestions)
    );

    router.push({
      pathname: "/Question",
      query: { type: 3 },
    });
  };

  const handleQuestionClick = (q) => {
    setSelectedQuestion(q);
    setModalOpen(true);
    setShowAnswer(false);
  };

  return (
    <WrongNoteUI
      selectedDateRange={selectedDateRange}
      setSelectedDateRange={setSelectedDateRange}
      data={wrongNoteData}
      selectedBooks={selectedBooks}
      setSelectedBooks={setSelectedBooks}
      isSelectMode={isSelectMode}
      setIsSelectMode={setIsSelectMode}
      toggleSection={toggleSection}
      openSections={openSections}
      onToggleBookSelect={handleToggleBookSelect}
      isModalOpen={isModalOpen}
      setModalOpen={setModalOpen}
      selectedQuestion={selectedQuestion}
      setSelectedQuestion={setSelectedQuestion}
      showAnswer={showAnswer}
      setShowAnswer={setShowAnswer}
      isDateModalOpen={isDateModalOpen}
      setIsDateModalOpen={setDateModalOpen}
      tempStart={tempStart}
      tempEnd={tempEnd}
      setTempStart={setTempStart}
      setTempEnd={setTempEnd}
      handleApplyDateFilter={handleApplyDateFilter}
      handleQuickRange={handleQuickRange}
      onClickStartLearning={handleClickStartLearning}
      onQuestionClick={handleQuestionClick}
      curBook={curBook}
      sequence={sequence}
      setSequence={setSequence}
      setCurBook={setCurBook}
      count={count}
      setCount={setCount}
      isTest={isTest}
      setIsTest={setIsTest}
      onConfirmLearning={handleConfirmLearning}
      filterOptions={filterOptions}
      selectedFilterBook={selectedFilterBook}
      setSelectedFilterBook={setSelectedFilterBook}
      groupedHistory={groupedHistory}
      onClickHistory={handleClickHistory}
      openStartCalendar={openStartCalendar} // ✅ 추가
      setOpenStartCalendar={setOpenStartCalendar} // ✅ 추가
      openEndCalendar={openEndCalendar} // ✅ 추가
      setOpenEndCalendar={setOpenEndCalendar} // ✅ 추가
    />
  );
}
