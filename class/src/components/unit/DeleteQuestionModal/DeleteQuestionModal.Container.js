import DeleteQuestionModalUI from "./DeleteQuestionModal.Presenter";

export default function DeleteQuestionModalLogic({ onClose, onConfirm }) {
  return <DeleteQuestionModalUI onClose={onClose} onConfirm={onConfirm} />;
}
