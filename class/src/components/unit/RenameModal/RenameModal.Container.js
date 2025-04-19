import { useState } from "react";
import RenameModalUI from "./RenameModal.Presenter";
import axios from "axios";
import { useAuth } from "@/utils/AuthContext";
import { toast } from "react-toastify";

export default function RenameModalLogic({ book, onClose, fetchWorkBooks }) {
  const [newName, setNewName] = useState(book?.title || "");
  const { token } = useAuth();

  const handleConfirm = async () => {
    if (!newName.trim()) {
      toast.error("이름을 입력해주세요.");
      return;
    }

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

      if (response.status === 200) {
        toast.success(response.data || "📘 이름이 변경되었습니다!");
        fetchWorkBooks();
        onClose();
      } else {
        toast.error("이름 변경에 실패했습니다.");
      }
    } catch (err) {
      toast.error("오류 발생");
      console.error(err);
    }
  };

  return (
    <RenameModalUI
      newName={newName}
      setNewName={setNewName}
      onClose={onClose}
      onConfirm={handleConfirm}
    />
  );
}
