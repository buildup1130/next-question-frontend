import MoveModalUI from "./MoveModal.Presenter";
import { useEffect, useState } from "react";
import { searchAllWorkBooks, createWorkbook } from "@/utils/WorkbookManager";
import { useAuth } from "@/utils/AuthContext";

export default function MoveModalContainer({
  onClose,
  onSubmit,
  selectedIds,
  targetBookId,
  setTargetBookId,
}) {
  const { token } = useAuth();
  const [workBooks, setWorkBooks] = useState([]);
  const [isCreating, setIsCreating] = useState(false);
  const [creatingName, setCreatingName] = useState("");

  // 문제집 리스트 불러오기
  const fetchWorkBooks = async () => {
    if (!token) return;
    const result = await searchAllWorkBooks(token);
    setWorkBooks(result);
  };

  // 문제집 생성
  const handleCreateWorkbook = async () => {
    if (!creatingName.trim()) {
      alert("문제집 이름을 입력해주세요.");
      return;
    }

    try {
      await createWorkbook(token, creatingName);
      await fetchWorkBooks();
      setIsCreating(false);
      setCreatingName("");
    } catch (error) {
      console.error("문제집 생성 오류:", error);
      if (error.response?.status === 500) {
        alert("이미 존재하는 문제집 이름입니다.");
      } else {
        alert("문제집 생성 중 오류가 발생했습니다.");
      }
    }
  };

  useEffect(() => {
    fetchWorkBooks();
  }, [token]);

  return (
    <MoveModalUI
      workBooks={workBooks}
      onClose={onClose}
      onSubmit={onSubmit}
      selectedIds={selectedIds}
      targetBookId={targetBookId}
      setTargetBookId={setTargetBookId}
      isCreating={isCreating}
      setIsCreating={setIsCreating}
      creatingName={creatingName}
      setCreatingName={setCreatingName}
      onCreateWorkbook={handleCreateWorkbook}
    />
  );
}
