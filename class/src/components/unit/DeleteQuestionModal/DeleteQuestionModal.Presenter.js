import {
  ModalBackdrop,
  ModalContent,
  ModalTitle,
  ModalDescription,
  ModalButtons,
  CancelButton,
  ConfirmButton,
} from "./DeleteQuestionModal.Styles";

export default function DeleteQuestionModalUI({ onClose, onConfirm }) {
  return (
    <ModalBackdrop onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalTitle>문제를 삭제하시겠어요?</ModalTitle>
        <ModalDescription>
          문제를 삭제할 경우 복구할 수 없습니다.
        </ModalDescription>
        <ModalButtons>
          <CancelButton onClick={onClose}>취소</CancelButton>
          <ConfirmButton onClick={onConfirm}>삭제하기</ConfirmButton>
        </ModalButtons>
      </ModalContent>
    </ModalBackdrop>
  );
}
