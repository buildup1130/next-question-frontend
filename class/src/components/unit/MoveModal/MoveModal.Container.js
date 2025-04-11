import MoveModalUI from "./MoveModal.Presenter";
import { useEffect, useState } from "react";
import { searchAllWorkBooks } from "@/utils/WorkbookManager";
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

  const fetchWorkBooks = async () => {
    if (!token) return;
    const result = await searchAllWorkBooks(token);
    setWorkBooks(result);
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
    />
  );
}
