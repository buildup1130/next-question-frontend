import React from "react";
import {
  Overlay,
  SheetContainer,
  Handle,
  SheetContent,
  OptionItem,
  RenameModalWrapper,
} from "./BottomSheet.Styles";

export default function BottomSheetPresenter({
  book,
  onClose,
  onClickLearn,
  onClickRename,
  onClickDelete,
  isRenaming, // ✅ 추가
  newName, // ✅ 추가
  onChangeNewName, // ✅ 추가
  onConfirmRename, // ✅ 추가
  onCancelRename, // ✅ 추가
}) {
  return (
    <Overlay onClick={onClose}>
      <SheetContainer onClick={(e) => e.stopPropagation()}>
        <Handle />
        <SheetContent>
          <h3>{book?.title}</h3>
          <hr />
          <OptionItem onClick={onClickLearn}>🚀 학습하기</OptionItem>
          <OptionItem onClick={onClickRename}>🔗 이름 바꾸기</OptionItem>
          <OptionItem onClick={onClickDelete} style={{ color: "red" }}>
            🗑 삭제하기
          </OptionItem>

          {isRenaming && (
            <RenameModalWrapper>
              <input value={newName} onChange={onChangeNewName} />
              <button onClick={onConfirmRename}>확인</button>
              <button onClick={onCancelRename}>취소</button>
            </RenameModalWrapper>
          )}
        </SheetContent>
      </SheetContainer>
    </Overlay>
  );
}
