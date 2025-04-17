import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "@/utils/AuthContext";
import { toast } from "react-toastify";
import {
  searchAllWorkBooks,
  moveQuestions,
  getWorkbookQuestions,
} from "@/utils/WorkbookManager";
import WorkbookPresenter from "./Workbook.Presenter";
import MoveModal from "@/components/unit/MoveModal/MoveModal.Container";
import MainContainerLogic from "@/components/common/MainContainer/MainContainer.Container";

export default function WorkbookContainer() {
  const router = useRouter();
  const { user, token } = useAuth();
  const userId = user?.userId;
  const { workBookId, title } = router.query;

  const [questions, setQuestions] = useState([]);
  const [deleteMode, setDeleteMode] = useState(false);
  const [selectedIds, setSelectedIds] = useState([]);

  const [moveMode, setMoveMode] = useState(false);
  const [isMoveModalOpen, setMoveModalOpen] = useState(false);
  const [targetBookId, setTargetBookId] = useState("");
  const [workBooks, setWorkBooks] = useState([]);

  useEffect(() => {
    if (token && workBookId && userId) {
      getWorkbookQuestions(token, workBookId, userId).then((data) => {
        console.log("📦 내려온 문제 데이터:", data);
        setQuestions(data || []);
      });
    }
  }, [token, workBookId, userId]);

  useEffect(() => {
    if (token) {
      searchAllWorkBooks(token).then((data) => {
        const books = data.map((item) => ({
          encryptedWorkBookId: item.encryptedWorkBookId,
          name: item.name,
        }));
        setWorkBooks(books);
      });
    }
  }, [token]);

  const handleBack = () => {
    router.back();
  };

  const toggleDeleteMode = () => {
    setDeleteMode((prev) => !prev);
    setSelectedIds([]);
  };

  const handleSelect = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((v) => v !== id) : [...prev, id]
    );
  };

  const toggleMoveMode = () => {
    setMoveMode((prev) => !prev);
    setSelectedIds([]);
  };

  const openMoveModal = () => {
    setMoveModalOpen(true);
  };

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
      .filter((q) => selectedIds.includes(q.encryptedQuestionId))
      .map((q) => q.encryptedQuestionInfoId)
      .filter((id) => typeof id === "string" && !!id.trim());

    if (encryptedQuestionInfoIds.length === 0) {
      alert("유효한 문제 ID가 없습니다.");
      return;
    }

    try {
      const response = await moveQuestions(
        token,
        workBookId,
        targetBookId,
        encryptedQuestionInfoIds
      );

      if (response.success) {
        toast.success(response.message);
        setMoveModalOpen(false);
        setMoveMode(false);
        setSelectedIds([]);

        const updated = await getWorkbookQuestions(token, workBookId, userId);
        setQuestions(updated);
      } else {
        alert("문제 이동 실패");
      }
    } catch (error) {
      console.error(" 문제 이동 중 오류:", error);
      alert("문제 이동 중 오류 발생");
    }
  };

  const handleDelete = async () => {
    if (selectedIds.length === 0) return;

    try {
      const res = await fetch("http://localhost:8080/member/questions/delete", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(selectedIds),
      });

      if (!res.ok) throw new Error("요청 실패");

      const text = await res.text();
      console.log(" 서버 응답 메시지:", text);

      setQuestions((prev) =>
        prev.filter((q) => !selectedIds.includes(q.encryptedQuestionId))
      );
      setSelectedIds([]);
      setDeleteMode(false);
    } catch (err) {
      console.error(" 삭제 중 에러 발생:", err);
      alert("삭제 요청 중 오류 발생");
    }
  };

  return (
    <>
      <WorkbookPresenter
        title={title}
        questions={questions}
        onBack={handleBack}
        deleteMode={deleteMode}
        onToggleDeleteMode={toggleDeleteMode}
        onSelect={handleSelect}
        selectedIds={selectedIds}
        onDelete={handleDelete}
        moveMode={moveMode}
        onToggleMoveMode={toggleMoveMode}
        onOpenMoveModal={openMoveModal}
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
    </>
  );
}
