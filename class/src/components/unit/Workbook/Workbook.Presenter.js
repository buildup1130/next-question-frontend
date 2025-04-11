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
} from "./Workbook.Styles";

export default function WorkbookPresenter({ title, questions, onBack }) {
  return (
    <Wrapper>
      <Header>
        <BackButton onClick={onBack}>←</BackButton>
        <Title>{title}</Title>
      </Header>
      <Divider />

      {questions && questions.length > 0 ? (
        questions.map((q, idx) => (
          <QuestionCard key={idx}>
            <QuestionTitle>Q. {q.name}</QuestionTitle>
            <Answer>정답: {q.answer}</Answer>
            <Type>유형: {q.type}</Type>
            {q.opt && <OptionList>선택지: {q.opt}</OptionList>}
          </QuestionCard>
        ))
      ) : (
        <div>문제가 없습니다.</div> // 질문이 없을 때 표시될 메시지
      )}
    </Wrapper>
  );
}
