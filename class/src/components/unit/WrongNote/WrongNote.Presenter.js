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
  CalendarButton,
  DateModalBackdrop,
  DateModalContent,
  DateInput,
  DateModalButtons,
  QuickRangeButtons,
  QuickRangeButton,
  QuickRangeButtonContainer,
  BackButton,
  Divider,
} from "./WrongNote.Styles";

export default function WrongNotePresenter({
  selectedDateRange,
  setSelectedDateRange,
  isDateModalOpen,
  setIsDateModalOpen,
  data,
  onQuestionClick,
  isModalOpen,
  selectedQuestion,
  setModalOpen,
  showAnswer,
  setShowAnswer,
  openSections,
  toggleSection,
  tempStart,
  tempEnd,
  setTempStart,
  setTempEnd,
  handleApplyDateFilter,
  handleQuickRange,
}) {
  const handleDateChange = (e) => {
    const { name, value } = e.target;
    if (name === "start") setTempStart(value);
    else if (name === "end") setTempEnd(value);
  };

  return (
    <Wrapper>
      <DateHeader>
        <BackButton onClick={() => router.push("/")}>←</BackButton>
        {selectedDateRange.start} ~ {selectedDateRange.end}
        <CalendarButton onClick={() => setIsDateModalOpen(true)}>
          📅
        </CalendarButton>
      </DateHeader>

      <hr />

      {data.length === 0 || data.every((day) => day.questions.length === 0) ? (
        <p style={{ textAlign: "center", marginTop: "24px" }}>
          해당 기간에 오답 문제가 없습니다.
        </p>
      ) : (
        data.map((day) => (
          <Section key={day.date}>
            <DateTitle onClick={() => toggleSection(day.date)}>
              {day.date} {openSections[day.date] ? "▲" : "▼"} 전체{" "}
              {day.questions.length}개
            </DateTitle>

            {openSections[day.date] &&
              day.questions.map((q) => (
                <QuestionItem key={q.id} onClick={() => onQuestionClick(q)}>
                  <span className="title">
                    {q.type === "빈칸"
                      ? q.title.replace("{BLANK}", "OOO")
                      : q.title}
                  </span>
                  <span className="type">{q.type}</span>
                </QuestionItem>
              ))}
          </Section>
        ))
      )}

      <AgainButton>다시 학습하기</AgainButton>

      {isModalOpen && selectedQuestion && (
        <ModalBackdrop
          onClick={() => {
            setModalOpen(false);
            setShowAnswer(false);
          }}
        >
          <ModalContent onClick={(e) => e.stopPropagation()}>
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
                  ? selectedQuestion.title.replace("{BLANK}", "OOO")
                  : selectedQuestion.fullText}
              </p>
            </div>

            {selectedQuestion.type === "객관식" &&
              selectedQuestion.options.length > 0 && (
                <div>
                  <strong>보기</strong>
                  <OptionList>
                    {selectedQuestion.options.map((option, idx) => (
                      <OptionItem key={idx}>{`${idx + 1}. ${
                        option.split(". ")[1] || option
                      }`}</OptionItem>
                    ))}
                  </OptionList>
                </div>
              )}

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

            {showAnswer && (
              <AnswerBox>
                정답:{" "}
                {selectedQuestion.type === "객관식" &&
                  `${selectedQuestion.answer}. ${
                    selectedQuestion.options[
                      selectedQuestion.answer - 1
                    ]?.split(". ")[1]
                  }`}
                {selectedQuestion.type === "O/X" &&
                selectedQuestion.answer?.toString().trim() === "0"
                  ? "O"
                  : "X"}
                {selectedQuestion.type === "빈칸" &&
                  selectedQuestion.answer.replace(/\.$/, "")}
              </AnswerBox>
            )}
          </ModalContent>
        </ModalBackdrop>
      )}

      {isDateModalOpen && (
        <DateModalBackdrop onClick={() => setIsDateModalOpen(false)}>
          <DateModalContent onClick={(e) => e.stopPropagation()}>
            <label>
              시작일:
              <DateInput
                type="date"
                name="start"
                value={tempStart}
                onChange={handleDateChange}
              />
            </label>
            <label>
              종료일:
              <DateInput
                type="date"
                name="end"
                value={tempEnd}
                onChange={handleDateChange}
              />
            </label>

            <QuickRangeButtonContainer>
              <QuickRangeButton onClick={() => handleQuickRange("today")}>
                오늘
              </QuickRangeButton>
              <QuickRangeButton onClick={() => handleQuickRange("yesterday")}>
                어제
              </QuickRangeButton>
              <QuickRangeButton onClick={() => handleQuickRange("3days")}>
                최근 3일
              </QuickRangeButton>
              <QuickRangeButton onClick={() => handleQuickRange("7days")}>
                최근 7일
              </QuickRangeButton>
            </QuickRangeButtonContainer>

            <DateModalButtons>
              <ModalButton onClick={() => setIsDateModalOpen(false)}>
                취소
              </ModalButton>
              <ModalButton onClick={handleApplyDateFilter}>
                적용하기
              </ModalButton>
            </DateModalButtons>
          </DateModalContent>
        </DateModalBackdrop>
      )}
    </Wrapper>
  );
}
