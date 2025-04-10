import { ModalOverlay, ModalContainer, ButtonRow } from "./RenameModal.Styles";

export default function RenameModalPresenter({
  newName,
  setNewName,
  onClose,
  onConfirm,
}) {
  return (
    <ModalOverlay>
      <ModalContainer>
        <h3>이름 바꾸기</h3>
        <input
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="새 이름 입력"
        />
        <ButtonRow>
          <button onClick={onConfirm}>확인</button>
          <button onClick={onClose}>취소</button>
        </ButtonRow>
      </ModalContainer>
    </ModalOverlay>
  );
}
