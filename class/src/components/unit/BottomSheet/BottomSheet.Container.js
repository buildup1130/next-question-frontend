import { useEffect } from "react";
import {
  Overlay,
  SheetContainer,
  Handle,
  SheetContent,
  OptionItem,
} from "./BottomSheet.Styles";
import axios from "axios";
import { useAuth } from "@/utils/AuthContext";

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

  return (
    <Overlay onClick={onClose}>
      <SheetContainer onClick={(e) => e.stopPropagation()}>
        <Handle />
        <SheetContent>
          <h3>{book?.title}</h3>
          <hr />
          <OptionItem onClick={handleLearn}>🚀 학습하기</OptionItem>
          <OptionItem onClick={handleMerge}>🔗 문제집 합치기</OptionItem>
          <OptionItem onClick={handleDelete} style={{ color: "red" }}>
            🗑 삭제하기
          </OptionItem>
        </SheetContent>
      </SheetContainer>
    </Overlay>
  );
}
