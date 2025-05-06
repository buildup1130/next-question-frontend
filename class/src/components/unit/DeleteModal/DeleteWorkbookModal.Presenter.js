import {
  ModalBackdrop,
  ModalContent,
  ModalTitle,
  ModalDescription,
  ModalButtons,
  ConfirmButton,
  CancelButton,
} from "./DeleteWorkbookModal.Styles";

export default function DeleteWorkbookModalUI({ onClose, onConfirm }) {
  return (
    <ModalBackdrop onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalTitle>문제집을 삭제하시겠어요?</ModalTitle>
        <ModalDescription>
          문제집을 삭제할 경우 복구할 수 없습니다.
        </ModalDescription>
        <ModalButtons>
          <CancelButton onClick={onClose}>취소</CancelButton>
          <ConfirmButton onClick={onConfirm}>삭제하기</ConfirmButton>
        </ModalButtons>
      </ModalContent>
    </ModalBackdrop>
  );
}
