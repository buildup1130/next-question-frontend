import React, { useState, useEffect } from "react";
import BottomSheetPresenter from "./BottomSheet.Presenter";
import axios from "axios";
import { useAuth } from "@/utils/AuthContext";
import { toast } from "react-toastify";

export default function BottomSheet({
  isOpen,
  onClose,
  book,
  setCurBook,
  setSequence,
  setSheetOpen,
  fetchWorkBooks,
}) {
  const { token } = useAuth();
  const [isRenaming, setIsRenaming] = useState(false);
  const [newName, setNewName] = useState(book?.title || "");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  if (!isOpen || !book) return null;

  const handleLearn = () => {
    setCurBook(book);
    setSheetOpen(false);
    setTimeout(() => {
      setSequence(1);
    }, 100);
  };

  const handleDelete = async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/member/workBooks/delete`,
        [book.id],
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data?.success) {
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

  const handleMerge = () => {
    alert("문제집 합치기 기능은 준비 중입니다!");
    onClose();
  };
  const handleRename = async () => {
    const newName = prompt("새 이름을 입력하세요", book.title);
    if (!newName || newName.trim() === "") return;

    try {
      const response = await axios.patch(
        `${process.env.NEXT_PUBLIC_API_URL}/member/workBook/update`,
        {
          encryptedWorkBookId: book.id,
          name: newName.trim(),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200 && response.data?.success) {
        toast.success("📘 이름이 성공적으로 변경되었습니다!");
        fetchWorkBooks(); // 목록 새로고침
        onClose(); // 바텀시트 닫기
      } else {
        toast.error("이름 변경에 실패했습니다.");
      }
    } catch (err) {
      toast.error("오류가 발생했습니다.");
      console.error(err);
    }
  };

  return (
    <BottomSheetPresenter
      book={book}
      onClose={onClose}
      onClickLearn={handleLearn}
      onClickRename={() => setIsRenaming(true)}
      onClickDelete={handleDelete}
      isRenaming={isRenaming}
      newName={newName}
      onChangeNewName={(e) => setNewName(e.target.value)}
      onConfirmRename={handleRename}
      onCancelRename={() => setIsRenaming(false)}
    />
  );
}
