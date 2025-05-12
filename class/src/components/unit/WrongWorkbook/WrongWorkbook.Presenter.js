import {
  Wrapper,
  Header,
  BackButton,
  Title,
  Divider,
  ControlBar,
  ToggleAnswerButton,
  QuestionCard,
  QuestionRow,
  QuestionTextWrapper,
  QuestionTitle,
  OptionWrapper,
  Option,
  OptionNumber,
  Answer,
  AnswerLabel,
} from "./WrongWorkbook.Styles";
import { BackIcon } from "@/utils/SvgProvider";

export default function WrongWorkbookUI({
  title,
  questions,
  onBack,
  showAnswer,
  setShowAnswer,
}) {
  const renderOptions = (q) => {
    if (q.type === "MULTIPLE_CHOICE") {
      const opts = q.opt ? q.opt.split("|||") : [];
      return (
        <OptionWrapper>
          {opts.map((optStr, i) => {
            const label = optStr[0];
            const text = optStr.slice(2);
            const isAnswer = Number(q.answer) === i + 1;
            return (
              <Option key={i}>
                <OptionNumber isAnswer={showAnswer && isAnswer}>
                  {label}
                </OptionNumber>
                <div>{text}</div>
              </Option>
            );
          })}
        </OptionWrapper>
      );
    }

    if (q.type === "OX") {
      return (
        <OptionWrapper>
          {["O", "X"].map((val) => (
            <Option key={val}>
              <OptionNumber isAnswer={showAnswer && q.answer === val}>
                {val}
              </OptionNumber>{" "}
              {val}
            </Option>
          ))}
        </OptionWrapper>
      );
    }

    if (q.type === "FILL_IN_THE_BLANK") {
      return (
        <Answer>
          <AnswerLabel>A</AnswerLabel>
          {showAnswer ? q.answer : null}
        </Answer>
      );
    }

    return null;
  };

  return (
    <Wrapper>
      <Header>
        <BackButton onClick={onBack}>
          <BackIcon />
        </BackButton>
        <Title>{title}</Title>
      </Header>

      <ControlBar>
        <ToggleAnswerButton onClick={() => setShowAnswer((prev) => !prev)}>
          {showAnswer ? "정답 숨기기" : "정답 보기"}
        </ToggleAnswerButton>
      </ControlBar>
      <Divider />

      {questions.length > 0 ? (
        questions.map((q, idx) => (
          <QuestionCard key={q.encryptedQuestionId}>
            <QuestionRow>
              <QuestionTextWrapper>
                <QuestionTitle>
                  <div>Q{idx + 1}</div>
                  <div>{q.name.replace(/\{BLANK\}/g, "OOO")}</div>
                </QuestionTitle>
                {renderOptions(q)}
              </QuestionTextWrapper>
            </QuestionRow>
          </QuestionCard>
        ))
      ) : (
        <div>문제가 없습니다.</div>
      )}
    </Wrapper>
  );
}
