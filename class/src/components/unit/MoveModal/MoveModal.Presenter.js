import {
  MoveModal__Wrapper as Wrapper,
  MoveModal__Container as Container,
  MoveModal__Inner as Inner,
  MoveModal__Title as Title,
  MoveModal__SelectContainer as SelectContainer,
  MoveModal__Select as Select,
  MoveModal__SelectButton as SelectButton,
  MoveModal__CreateRow as CreateRow,
  MoveModal__Input as Input,
  MoveModal__CreateButton as CreateButton,
  MoveModal__ButtonContainer as ButtonContainer,
  MoveModal__CancelButton as CancelButton,
  MoveModal__SubmitButton as SubmitButton,
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
  const toggleCreating = () => setIsCreating((prev) => !prev);

  return (
    <Wrapper>
      <Container>
        <Inner>
          <Title>문제 이동</Title>

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

          {isCreating && (
            <CreateRow>
              <Input
                value={creatingName}
                placeholder="문제집명을 입력해주세요."
                onChange={(e) => setCreatingName(e.target.value)}
              />
              <CreateButton onClick={onCreateWorkbook}>생성</CreateButton>
            </CreateRow>
          )}

          <ButtonContainer>
            <CancelButton onClick={onClose}>이전</CancelButton>
            <SubmitButton onClick={onSubmit}>이동하기</SubmitButton>
          </ButtonContainer>
        </Inner>
      </Container>
    </Wrapper>
  );
}
