import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "@/utils/AuthContext";
import { toast } from "react-toastify";
import {
  searchAllWorkBooks,
  moveQuestions,
  getWorkbookQuestions,
  fetchQuestionType,
} from "@/utils/WorkbookManager";
import WorkbookUI from "./Workbook.Presenter";
import MoveModal from "@/components/unit/MoveModal/MoveModal.Container";
import DeleteQuestionModal from "@/components/unit/DeleteQuestionModal/DeleteQuestionModal.Container";

export default function WorkbookLogic() {
  const router = useRouter();
  const { user, token } = useAuth();
  const userId = user?.userId;
  const { workBookId, title } = router.query;

  const [questions, setQuestions] = useState([]);
  const [deleteMode, setDeleteMode] = useState(false);
  const [moveMode, setMoveMode] = useState(false);
  const [selectedIds, setSelectedIds] = useState([]);
  const [isSelectMode, setIsSelectMode] = useState(false);
  const [isMoveModalOpen, setMoveModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [targetBookId, setTargetBookId] = useState("");
  const [workBooks, setWorkBooks] = useState([]);
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    if (token && workBookId && userId) {
      getWorkbookQuestions(token, workBookId, userId).then(setQuestions);
    }
  }, [token, workBookId, userId]);

  useEffect(() => {
    if (token) {
      searchAllWorkBooks(token).then((data) => {
        const books = data.map(
          ({ encryptedWorkBookId, name, totalQuestion }) => ({
            encryptedWorkBookId,
            name,
            totalQuestion,
          })
        );
        setWorkBooks(books);
      });
    }
  }, [token]);

  const handleBack = () => router.back();

  const toggleDeleteMode = (value) =>
    setDeleteMode(typeof value === "boolean" ? value : (prev) => !prev);
  const toggleMoveMode = (value) =>
    setMoveMode(typeof value === "boolean" ? value : (prev) => !prev);

  const handleSelect = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((v) => v !== id) : [...prev, id]
    );
  };

  const openMoveModal = () => setMoveModalOpen(true);
  const openDeleteModal = () =>
    selectedIds.length > 0 && setDeleteModalOpen(true);

  const handleMoveSubmit = async () => {
    if (!token || !workBookId || !targetBookId || selectedIds.length === 0) {
      alert("이동에 필요한 정보가 부족합니다.");
      return;
    }

    if (workBookId === targetBookId) {
      alert("같은 문제집으로는 이동할 수 없습니다.");
      return;
    }

    const encryptedQuestionInfoIds = questions
      .filter((q) => selectedIds.includes(String(q.encryptedQuestionId)))
      .map((q) => q.encryptedQuestionInfoId)
      .filter((id) => typeof id === "string" && !!id.trim());

    if (encryptedQuestionInfoIds.length === 0) {
      alert("유효한 문제 ID가 없습니다.");
      return;
    }

    try {
      await moveQuestions(
        token,
        workBookId,
        targetBookId,
        encryptedQuestionInfoIds
      );
      toast.success("문제 이동 성공", { position: "top-center" });
      setMoveModalOpen(false);
      setMoveMode(false);
      setSelectedIds([]);
      const updated = await getWorkbookQuestions(token, workBookId, userId);
      setQuestions(updated);
    } catch (error) {
      console.error("문제 이동 중 오류:", error);
      alert(error.message);
    }
  };

  const updateSingleBookCount = async (bookId) => {
    try {
      const res = await fetchQuestionType(token, [bookId]);
      const total =
        res?.[bookId]?.multipleChoice +
        res?.[bookId]?.ox +
        res?.[bookId]?.fillInTheBlank;

      setWorkBooks((prev) =>
        prev.map((book) =>
          book.encryptedWorkBookId === bookId
            ? { ...book, totalQuestion: total }
            : book
        )
      );
    } catch (err) {
      console.error("문제 수 업데이트 실패:", err);
    }
  };

  const handleDeleteConfirm = async () => {
    if (selectedIds.length === 0) return;

    try {
      const res = await fetch("/api/member/questions/delete", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          encryptedWorkBookId: workBookId,
          encryptedQuestionIds: selectedIds,
        }),
      });

      if (!res.ok) throw new Error("요청 실패");

      const updated = await getWorkbookQuestions(token, workBookId, userId);
      setQuestions(updated);
      await updateSingleBookCount(workBookId);
      setSelectedIds([]);
      setDeleteMode(false);
      setDeleteModalOpen(false);
      toast.success("문제 삭제 완료!", { position: "top-center" });
    } catch (err) {
      console.error("삭제 중 에러 발생:", err);
      alert("삭제 요청 중 오류 발생");
    }
  };

  return (
    <>
      <WorkbookUI
        title={title}
        questions={questions}
        onBack={handleBack}
        deleteMode={deleteMode}
        moveMode={moveMode}
        onToggleDeleteMode={toggleDeleteMode}
        onToggleMoveMode={toggleMoveMode}
        onSelect={handleSelect}
        selectedIds={selectedIds}
        onOpenDeleteModal={openDeleteModal}
        onOpenMoveModal={openMoveModal}
        isSelectMode={isSelectMode}
        setIsSelectMode={setIsSelectMode}
        showAnswer={showAnswer}
        setShowAnswer={setShowAnswer}
      />

      {isMoveModalOpen && (
        <MoveModal
          workBooks={workBooks}
          onClose={() => setMoveModalOpen(false)}
          onSubmit={handleMoveSubmit}
          selectedIds={selectedIds}
          targetBookId={targetBookId}
          setTargetBookId={setTargetBookId}
        />
      )}

      {isDeleteModalOpen && (
        <DeleteQuestionModal
          onClose={() => setDeleteModalOpen(false)}
          onConfirm={handleDeleteConfirm}
        />
      )}
    </>
  );
}
