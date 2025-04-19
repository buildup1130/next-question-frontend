import { useEffect } from "react";
import BottomSheetPresenter from "./BottomSheet.Presenter";
import axios from "axios";
import { useAuth } from "@/utils/AuthContext";

export default function BottomSheet({
  isOpen,
  onClose,
  onDelete,
  book,
  setCurBook,
  setSequence,
  setSheetOpen,
  fetchWorkBooks,
  setRenameModalOpen,
  setRenameTargetBook,
}) {
  const { token } = useAuth();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  if (!isOpen || !book) return null;

  const handleLearn = () => {
    setCurBook(book);
    setSheetOpen(false);
    setTimeout(() => setSequence(1), 100);
  };

  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `${process.env.NEXT_PUBLIC_API_URL}/member/workBooks/delete`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          data: [book.id],
        }
      );

      if (response.data.includes("성공적으로")) {
        alert("문제집 삭제 완료!");
        fetchWorkBooks();
        onClose();
      } else {
        alert("문제집 삭제 실패");
      }
    } catch (err) {
      alert("문제집 삭제 중 오류 발생");
      console.error(err);
    }
  };

  const handleRename = () => {
    onClose();
    setRenameModalOpen(true);
    setRenameTargetBook(book);
  };

  return (
    <BottomSheetPresenter
      book={book}
      onClose={onClose}
      onClickLearn={handleLearn}
      onClickRename={handleRename}
      onClickDelete={onDelete || handleDelete}
    />
  );
}
