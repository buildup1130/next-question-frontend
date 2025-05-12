// ✅ Workbook.Presenter.js (리팩토링 완료)
import { BackIcon } from "@/utils/SvgProvider";
import {
  Wrapper,
  Header,
  BackButton,
  Title,
  ControlBar,
  FilterWrapper,
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
  Checkbox,
  Divider,
  ActionButtonGroup,
  ActionButton,
} from "./Workbook.Styles";

export default function WorkbookUI({
  title,
  questions,
  onBack,
  deleteMode,
  moveMode,
  onToggleDeleteMode,
  onToggleMoveMode,
  onSelect,
  selectedIds,
  onOpenDeleteModal,
  onOpenMoveModal,
  isSelectMode,
  setIsSelectMode,
  showAnswer,
  setShowAnswer,
}) {
  const handleCancel = () => {
    setIsSelectMode(false);
    onToggleDeleteMode(false);
    onToggleMoveMode(false);
  };

  const renderOptions = (q) => {
    const opts = q.opt ? q.opt.split("|||") : [];

    if (q.type === "MULTIPLE_CHOICE") {
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
        {!isSelectMode ? (
          <FilterWrapper>
            <ToggleAnswerButton onClick={() => setShowAnswer((prev) => !prev)}>
              {showAnswer ? "정답 숨기기" : "정답 보기"}
            </ToggleAnswerButton>
            <ActionButton
              onClick={() => {
                setIsSelectMode(true);
                onToggleDeleteMode(true);
                onToggleMoveMode(true);
              }}
            >
              선택
            </ActionButton>
          </FilterWrapper>
        ) : (
          <ActionButtonGroup>
            <ActionButton
              onClick={onOpenMoveModal}
              disabled={selectedIds.length === 0}
            >
              문제 이동
            </ActionButton>
            <ActionButton
              onClick={onOpenDeleteModal}
              disabled={selectedIds.length === 0}
            >
              문제 삭제
            </ActionButton>
            <ActionButton onClick={handleCancel}>선택취소</ActionButton>
          </ActionButtonGroup>
        )}
      </ControlBar>

      <Divider />

      {questions && questions.length > 0 ? (
        questions.map((q, idx) => (
          <QuestionCard
            key={q.encryptedQuestionId}
            onClick={() => {
              if (deleteMode || moveMode || isSelectMode) {
                onSelect(q.encryptedQuestionId);
              }
            }}
            style={{ cursor: isSelectMode ? "pointer" : "default" }}
          >
            <QuestionRow>
              <QuestionTextWrapper>
                <QuestionTitle>
                  <div>Q{idx + 1}</div>
                  <div>{q.name.replace(/\{BLANK\}/g, "OOO")}</div>
                </QuestionTitle>
                {renderOptions(q)}
              </QuestionTextWrapper>

              {deleteMode || moveMode || isSelectMode ? (
                <Checkbox
                  type="checkbox"
                  checked={selectedIds.includes(q.encryptedQuestionId)}
                  onClick={(e) => e.stopPropagation()}
                  onChange={() => onSelect(q.encryptedQuestionId)}
                />
              ) : (
                <div style={{ width: "16px" }} />
              )}
            </QuestionRow>
          </QuestionCard>
        ))
      ) : (
        <div>문제가 없습니다.</div>
      )}
    </Wrapper>
  );
}
