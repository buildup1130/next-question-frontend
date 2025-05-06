import {
  MoveModal__Wrapper as Wrapper,
  MoveModal__Container as Container,
  MoveModal__Inner as Inner,
  MoveModal__Title as Title,
  MoveModal__Select as Select,
  MoveModal__Input as Input,
  MoveModal__CreateButton as CreateButton,
  MoveModal__ButtonContainer as ButtonContainer,
  MoveModal__CancelButton as CancelButton,
  MoveModal__SubmitButton as SubmitButton,
  MoveModal__SelectContainer,
  MoveModal__InputContainer,
} from "./MoveModal.Styles";

export default function MoveModalUI({
  workBooks,
  onClose,
  onSubmit,
  targetBookId,
  setTargetBookId,
  creatingName,
  setCreatingName,
  onCreateWorkbook,
}) {
  return (
    <Wrapper>
      <Container>
        <Inner>
          <Title>문제 이동</Title>

          <MoveModal__SelectContainer>
            <Select
              value={targetBookId}
              onChange={(e) => setTargetBookId(e.target.value)}
            >
              <option value="">문제집을 선택해주세요.</option>
              {workBooks.map((book) => (
                <option
                  key={book.encryptedWorkBookId}
                  value={book.encryptedWorkBookId}
                >
                  {book.name}
                </option>
              ))}
            </Select>
          </MoveModal__SelectContainer>

          <MoveModal__InputContainer>
            <Input
              value={creatingName}
              onChange={(e) => setCreatingName(e.target.value)}
              placeholder="문제집 명을 입력해주세요."
            />
            <CreateButton
              onClick={onCreateWorkbook}
              disabled={!creatingName.trim()}
            >
              생성
            </CreateButton>
          </MoveModal__InputContainer>

          <ButtonContainer>
            <CancelButton onClick={onClose}>취소</CancelButton>
            <SubmitButton onClick={onSubmit} disabled={!targetBookId}>
              이동하기
            </SubmitButton>
          </ButtonContainer>
        </Inner>
      </Container>
    </Wrapper>
  );
}
