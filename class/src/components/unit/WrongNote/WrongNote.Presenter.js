import {
  Wrapper,
  DateHeader,
  Section,
  QuestionItem,
  DateTitle,
  AgainButton,
  ModalBackdrop,
  ModalContent,
  ModalButtons,
  ModalButton,
  OptionList,
  OptionItem,
  AnswerBox,
} from "./WrongNote.Styles";

export default function WrongNotePresenter({
  selectedDateRange,
  data,
  onQuestionClick,
  isModalOpen,
  selectedQuestion,
  setModalOpen,
  showAnswer,
  setShowAnswer,
  openSections,
  toggleSection,
}) {
  return (
    <Wrapper>
      <DateHeader>
        {selectedDateRange.start} ~ {selectedDateRange.end}
      </DateHeader>

      {data.map((day) => (
        <Section key={day.date}>
          <DateTitle onClick={() => toggleSection(day.date)}>
            {day.date} {openSections[day.date] ? "▲" : "▼"} 전체{" "}
            {day.questions.length}개
          </DateTitle>

          {openSections[day.date] &&
            day.questions.map((q) => (
              <QuestionItem key={q.id} onClick={() => onQuestionClick(q)}>
                <span className="title">{q.title}</span>
                <span className="type">{q.type}</span>
              </QuestionItem>
            ))}
        </Section>
      ))}

      <AgainButton>다시 학습하기</AgainButton>

      {isModalOpen && selectedQuestion && (
        <ModalBackdrop
          onClick={() => {
            setModalOpen(false);
            setShowAnswer(false);
          }}
        >
          <ModalContent onClick={(e) => e.stopPropagation()}>
            {/* 문제 유형 + 문제 내용 */}
            <div>
              <strong>
                {selectedQuestion.type === "객관식"
                  ? "객관식 문제"
                  : selectedQuestion.type === "O/X"
                  ? "O/X 문제"
                  : "빈칸 문제"}
              </strong>
              <p>
                {selectedQuestion.type === "빈칸"
                  ? selectedQuestion.title
                  : selectedQuestion.fullText}
              </p>
            </div>

            {/* 보기 (조건 분기) */}
            {selectedQuestion.type === "객관식" &&
              selectedQuestion.options.length > 0 && (
                <div>
                  <strong>보기</strong>
                  <OptionList>
                    {selectedQuestion.options.map((option, idx) => (
                      <OptionItem key={idx}>{option}</OptionItem>
                    ))}
                  </OptionList>
                </div>
              )}

            {/* 버튼 */}
            <ModalButtons>
              <ModalButton
                onClick={() => {
                  setModalOpen(false);
                  setShowAnswer(false);
                }}
              >
                취소
              </ModalButton>
              <ModalButton onClick={() => setShowAnswer(true)}>
                정답 보기
              </ModalButton>
            </ModalButtons>

            {/* 정답 표시 */}
            {showAnswer && (
              <AnswerBox>정답: {selectedQuestion.answer}</AnswerBox>
            )}
          </ModalContent>
        </ModalBackdrop>
      )}
    </Wrapper>
  );
}
