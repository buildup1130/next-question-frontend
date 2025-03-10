import { useEffect } from "react";
import {
  Overlay,
  SheetContainer,
  Handle,
  SheetContent,
  OptionItem,
} from "./BottomSheet.Styles";

export default function BottomSheet({ isOpen, onClose, book }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // 스크롤 안되게
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <Overlay onClick={onClose}>
      <SheetContainer onClick={(e) => e.stopPropagation()}>
        <Handle />
        <SheetContent>
          <h3>{book?.title}</h3>
          <hr />
          <OptionItem>✏ 이름 바꾸기</OptionItem>
          <OptionItem>📄 복제하기</OptionItem>
          <OptionItem>🚀 이동하기</OptionItem>
          <OptionItem style={{ color: "red" }}>🗑 삭제하기</OptionItem>
        </SheetContent>
      </SheetContainer>
    </Overlay>
  );
}
