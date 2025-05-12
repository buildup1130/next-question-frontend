import { BackIcon } from "@/utils/SvgProvider";
import { useRouter } from "next/router";
import {
  Wrapper,
  Header,
  BackButton,
  Title,
  Divider,
  QuestionCard,
  QuestionRow,
  QuestionTextWrapper,
  QuestionTitle,
  OptionWrapper,
  Option,
  OptionNumber,
  Answer,
  AnswerLabel,
  ControlBar,
  ToggleAnswerButton,
  FilterWrapper,
} from "./WrongHistoryDetail.Styles";

export default function WrongHistoryDetailUI({
  questions,
  showAnswer,
  setShowAnswer,
}) {
  const router = useRouter();

  const renderOptions = (q, idx) => {
    console.log(`🔍 Q${idx + 1} type:`, q.type); // ✅ 타입 확인
    console.log(`🔍 Q${idx + 1} options:`, q.opt); // ✅ 보기 확인

    const opts = q.opt ? q.opt.split("|||") : [];

    if (q.type === "객관식" || q.type === "MULTIPLE_CHOICE") {
      return (
        <OptionWrapper>
          {opts.map((optStr, i) => {
            const isAnswer = showAnswer && Number(q.answer) === i + 1;
            return (
              <Option key={i}>
                <OptionNumber isAnswer={isAnswer}>{i + 1}</OptionNumber>
                <div>{optStr}</div>
              </Option>
            );
          })}
        </OptionWrapper>
      );
    }

    if (q.type === "O/X" || q.type === "OX") {
      return (
        <OptionWrapper>
          <Option>
            <OptionNumber isAnswer={showAnswer && q.answer === "O"}>
              1
            </OptionNumber>{" "}
            O
          </Option>
          <Option>
            <OptionNumber isAnswer={showAnswer && q.answer === "X"}>
              2
            </OptionNumber>{" "}
            X
          </Option>
        </OptionWrapper>
      );
    }

    if (q.type === "빈칸" || q.type === "FILL_IN_BLANK") {
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
        <BackButton onClick={() => router.back()}>
          <BackIcon />
        </BackButton>
        <Title>문제 상세 보기</Title>
      </Header>

      <ControlBar>
        <FilterWrapper>
          <ToggleAnswerButton onClick={() => setShowAnswer((prev) => !prev)}>
            {showAnswer ? "정답 숨기기" : "정답 보기"}
          </ToggleAnswerButton>
        </FilterWrapper>
      </ControlBar>

      <Divider />

      {questions.length === 0 ? (
        <p style={{ padding: "20px", textAlign: "center" }}>문제가 없습니다.</p>
      ) : (
        questions.map((q, idx) => (
          <QuestionCard key={idx}>
            <QuestionRow>
              <QuestionTextWrapper>
                <QuestionTitle>
                  <div>Q{idx + 1}</div>
                  <div>{q.name.replace(/\{BLANK\}/g, "OOO")}</div>
                </QuestionTitle>
                {renderOptions(q, idx)}
              </QuestionTextWrapper>
            </QuestionRow>
          </QuestionCard>
        ))
      )}
    </Wrapper>
  );
}
