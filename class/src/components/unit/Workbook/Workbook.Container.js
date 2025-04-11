import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "@/utils/AuthContext";
import {
  searchAllWorkBooks,
  moveQuestions,
  getWorkbookQuestions,
} from "@/utils/WorkbookManager";
import WorkbookPresenter from "./Workbook.Presenter";
import BottomNavigationLogic from "../../common/BottomNavigation/BottomNavigation.Container";
import MoveModal from "@/components/unit/MoveModal/MoveModal.Container";

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
        console.log("📦 내려온 문제 데이터:", data); // ✅ 여기에 찍기
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
    console.log("🟢 선택된 문제 ID:", id);
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

    console.log("✅ 선택된 문제 ID들 (selectedIds):", selectedIds);
    console.log("✅ 전체 문제 객체:", questions);
    const encryptedQuestionInfoIds = questions
      .filter((q) => selectedIds.includes(q.encryptedQuestionId))
      .map((q) => q.encryptedQuestionInfoId);

    if (encryptedQuestionInfoIds.length === 0) {
      alert("유효한 문제 ID가 없습니다.");
      return;
    }

    try {
      console.log("🚀 최종 전송 데이터:", {
        token,
        workBookId,
        targetBookId,
        encryptedQuestionInfoIds,
      });

      const response = await moveQuestions(
        token,
        workBookId,
        targetBookId,
        encryptedQuestionInfoIds
      );

      if (response.success) {
        alert("문제 이동 성공!");
        setMoveModalOpen(false);
        setMoveMode(false);
        setSelectedIds([]);
        const updated = await getWorkbookQuestions(token, workBookId, userId);
        setQuestions(updated);
      } else {
        alert("문제 이동 실패");
      }
    } catch (error) {
      console.error("문제 이동 중 오류:", error);
      alert("문제 이동 중 오류 발생");
    }
  };

  const handleDelete = async () => {
    if (selectedIds.length === 0) return;

    console.log("🟡 현재 토큰:", token);
    console.log("🟡 삭제 요청할 문제 ID 목록:", selectedIds);

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

      const text = await res.text(); // JSON 아닌 응답도 처리
      console.log("🟢 서버 응답 메시지:", text);

      // 삭제 후 화면 갱신
      setQuestions((prev) =>
        prev.filter((q) => !selectedIds.includes(q.encryptedQuestionId))
      );
      setSelectedIds([]);
      setDeleteMode(false);
    } catch (err) {
      console.error("❌ 삭제 중 에러 발생:", err);
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
      <BottomNavigationLogic />

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
