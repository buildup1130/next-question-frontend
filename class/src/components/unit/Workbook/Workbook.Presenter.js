import {
  Wrapper,
  Header,
  BackButton,
  Title,
  Divider,
  QuestionCard,
  QuestionTitle,
  Answer,
  Type,
  OptionList,
  DeleteButton,
  TopRightButtonGroup,
  TopRightButton,
  Checkbox,
} from "./Workbook.Styles";

export default function WorkbookPresenter({
  title,
  questions,
  onBack,
  deleteMode,
  moveMode,
  onToggleDeleteMode,
  onToggleMoveMode,
  onSelect,
  selectedIds,
  onDelete,
  onOpenMoveModal,
}) {
  return (
    <Wrapper>
      <Header>
        <BackButton onClick={onBack}>←</BackButton>
        <Title>{title}</Title>
        <TopRightButtonGroup>
          <TopRightButton onClick={onToggleMoveMode}>📤</TopRightButton>
          <TopRightButton onClick={onToggleDeleteMode}>🗑</TopRightButton>
        </TopRightButtonGroup>
      </Header>
      <Divider />

      {questions && questions.length > 0 ? (
        questions.map((q) => (
          <QuestionCard key={q.encryptedQuestionId}>
            {(deleteMode || moveMode) && (
              <Checkbox
                type="checkbox"
                checked={selectedIds.includes(q.encryptedQuestionId)}
                onChange={() => onSelect(q.encryptedQuestionId)}
              />
            )}
            <div style={{ flex: 1 }}>
              <QuestionTitle>Q. {q.name}</QuestionTitle>
              <Answer>정답: {q.answer}</Answer>
              <Type>유형: {q.type}</Type>
              {q.opt && <OptionList>선택지: {q.opt}</OptionList>}
            </div>
          </QuestionCard>
        ))
      ) : (
        <div>문제가 없습니다.</div>
      )}

      {deleteMode && selectedIds.length > 0 && (
        <DeleteButton onClick={onDelete}>선택 삭제</DeleteButton>
      )}
      {moveMode && selectedIds.length > 0 && (
        <DeleteButton onClick={onOpenMoveModal}>
          📦 다른 문제집으로 이동
        </DeleteButton>
      )}
    </Wrapper>
  );
}
