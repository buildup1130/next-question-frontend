import DeleteWorkbookModalUI from "./DeleteWorkbookModal.Presenter";

export default function DeleteWorkbookModalLogic({ onClose, onConfirm }) {
  return <DeleteWorkbookModalUI onClose={onClose} onConfirm={onConfirm} />;
}
