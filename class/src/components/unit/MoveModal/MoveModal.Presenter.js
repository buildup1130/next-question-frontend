import {
  MoveModal__Wrapper as Wrapper,
  MoveModal__Container as Container,
  MoveModal__Inner as Inner,
  MoveModal__Title,
  MoveModal__SelectContainer as SelectContainer,
  MoveModal__Select as Select,
  MoveModal__SelectButton as SelectButton,
  MoveModal__CreateRow as CreateRow,
  MoveModal__Input,
  MoveModal__CreateButton,
  MoveModal__ButtonContainer as ButtonContainer,
  MoveModal__CancelButton,
  MoveModal__SubmitButton,
} from "./MoveModal.Styles";

export default function MoveModalUI({
  workBooks,
  onClose,
  onSubmit,
  selectedIds,
  targetBookId,
  setTargetBookId,
  isCreating,
  setIsCreating,
  creatingName,
  setCreatingName,
  onCreateWorkbook,
}) {
  const toggleCreating = () => {
    setIsCreating((prev) => !prev);
  };

  return (
    <Wrapper>
      <Container>
        <Inner>
          {/* 제목 */}
          <MoveModal__Title>문제 이동</MoveModal__Title>

          {/* 문제집 선택 */}
          <SelectContainer>
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
            <SelectButton onClick={toggleCreating}>＋</SelectButton>
          </SelectContainer>

          {/* 문제집 생성 */}
          {isCreating && (
            <CreateRow>
              <MoveModal__Input
                value={creatingName}
                placeholder="문제집명을 입력해주세요."
                onChange={(e) => setCreatingName(e.target.value)}
              />
              <MoveModal__CreateButton onClick={onCreateWorkbook}>
                생성
              </MoveModal__CreateButton>
            </CreateRow>
          )}

          {/* 버튼 */}
          <ButtonContainer>
            <MoveModal__CancelButton onClick={onClose}>
              이전
            </MoveModal__CancelButton>
            <MoveModal__SubmitButton onClick={onSubmit}>
              이동하기
            </MoveModal__SubmitButton>
          </ButtonContainer>
        </Inner>
      </Container>
    </Wrapper>
  );
}
