import React, { useEffect } from "react";
import BottomSheetPresenter from "./BottomSheet.Presenter";
import axios from "axios";
import { useAuth } from "@/utils/AuthContext";
import { toast } from "react-toastify";

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
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  if (!isOpen || !book) return null;

  const handleLearn = () => {
    console.log("👉 학습하기 눌림"); // ← 이거 꼭 추가
    setCurBook(book);
    setSheetOpen(false);
    setTimeout(() => {
      setSequence(1);
    }, 100);
    console.log("🎯 setCurBook with:", book);
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
          data: [book.id], // ✅ 삭제할 암호화된 문제집 ID 배열
        }
      );

      alert("📦 응답:", JSON.stringify(response.data));

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
    console.log("📝 이름 바꾸기 눌림"); // ← 이것도 추가
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
      onClickDelete={onDelete}
    />
  );
}
