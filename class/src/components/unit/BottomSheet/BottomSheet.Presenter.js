import {
  Overlay,
  SheetContainer,
  Handle,
  SheetContent,
  OptionItem,
} from "./BottomSheet.Styles";

export default function BottomSheetPresenter({
  book,
  onClose,
  onClickLearn,
  onClickRename,
  onClickDelete,
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
        </SheetContent>
      </SheetContainer>
    </Overlay>
  );
}
