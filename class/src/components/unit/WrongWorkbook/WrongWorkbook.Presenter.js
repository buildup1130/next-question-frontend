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

export default function WrongWorkbookUI({
  title,
  questions,
  onBack,
  showAnswer,
  setShowAnswer,
}) {
  return (
    <Wrapper>
      <Header>
        <BackButton onClick={onBack}>←</BackButton>
        <Title>{title}</Title>
      </Header>
      <Divider />

      <ControlBar>
        <ToggleAnswerButton onClick={() => setShowAnswer((prev) => !prev)}>
          {showAnswer ? "정답 숨기기" : "정답 보기"}
        </ToggleAnswerButton>
      </ControlBar>
      <Divider />

      {questions.length > 0 ? (
        questions.map((q, idx) => {
          const opts = q.opt ? q.opt.split("|||") : [];
          return (
            <QuestionCard key={q.encryptedQuestionId}>
              <QuestionRow>
                <QuestionTextWrapper>
                  <QuestionTitle>
                    <div>Q{idx + 1}</div>
                    <div>{q.name.replace(/\{BLANK\}/g, "OOO")}</div>
                  </QuestionTitle>

                  {q.type === "MULTIPLE_CHOICE" && (
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
                  )}

                  {q.type === "OX" && (
                    <OptionWrapper>
                      <Option>
                        <OptionNumber isAnswer={showAnswer && q.answer === "O"}>
                          O
                        </OptionNumber>{" "}
                        O
                      </Option>
                      <Option>
                        <OptionNumber isAnswer={showAnswer && q.answer === "X"}>
                          X
                        </OptionNumber>{" "}
                        X
                      </Option>
                    </OptionWrapper>
                  )}

                  {q.type === "FILL_IN_THE_BLANK" && (
                    <Answer>
                      <AnswerLabel>A</AnswerLabel>
                      {showAnswer ? q.answer : null}
                    </Answer>
                  )}
                </QuestionTextWrapper>
              </QuestionRow>
            </QuestionCard>
          );
        })
      ) : (
        <div>문제가 없습니다.</div>
      )}
    </Wrapper>
  );
}
