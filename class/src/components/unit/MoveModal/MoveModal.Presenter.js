import {
  MoveModal__Wrapper as MoveModalWrapper,
  MoveModal__Container as MoveModalContainer,
  MoveModal__Inner as MoveModalInner,
  MoveModal__Title as MoveModalTitle,
  MoveModal__SelectContainer as SelectRow,
  MoveModal__Select as Select,
  MoveModal__SelectButton as IconButton,
  MoveModal__CancelButton as CancelButton,
  MoveModal__SubmitButton as SubmitButton,
  MoveModal__ButtonContainer as ButtonRow,
  MoveModal__CreateRow as CreateRow,
  MoveModal__Input as Input,
  MoveModal__CreateButton as CreateButton,
} from "./MoveModal.Styles";

import { RefreshIcon } from "@/utils/SvgProvider";
import { useState } from "react";

export default function MoveModalUI({
  workBooks,
  onClose,
  onSubmit,
  selectedIds,
  targetBookId,
  setTargetBookId,
}) {
  const [isCreating, setIsCreating] = useState(false);
  const [newTitle, setNewTitle] = useState("");

  const handleChange = (e) => {
    setNewTitle(e.target.value);
  };

  const toggleCreating = () => {
    setIsCreating((prev) => !prev);
  };

  const onCreate = () => {
    alert(`새 문제집 생성: ${newTitle}`);
    setIsCreating(false);
  };

  const fetchWorkBooks = () => {
    alert("워크북 새로고침 필요 시 여기에 로직 추가");
  };

  return (
    <MoveModalWrapper>
      <MoveModalContainer>
        <MoveModalInner>
          {/* 제목은 없앰 */}

          <SelectRow>
            <IconButton onClick={fetchWorkBooks}>
              <RefreshIcon />
            </IconButton>
            <Select
              value={targetBookId}
              onChange={(e) => setTargetBookId(e.target.value)}
            >
              <option value="">-- 문제집을 선택하세요 --</option>
              {workBooks.map((book, i) => (
                <option key={i} value={book.encryptedWorkBookId}>
                  {book.name}
                </option>
              ))}
            </Select>
            <IconButton onClick={toggleCreating}>+</IconButton>
          </SelectRow>

          {isCreating && (
            <CreateRow>
              <Input placeholder="새 문제집 이름" onChange={handleChange} />
              <CreateButton onClick={onCreate}>생성</CreateButton>
            </CreateRow>
          )}

          <ButtonRow>
            <CancelButton onClick={onClose}>이전</CancelButton>
            <SubmitButton onClick={onSubmit}>이동하기</SubmitButton>
          </ButtonRow>
        </MoveModalInner>
      </MoveModalContainer>
    </MoveModalWrapper>
  );
}
