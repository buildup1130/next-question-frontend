import { useRouter } from "next/router";
import {
  Wrapper,
  DateHeader,
  Section,
  QuestionItem,
  DateTitle,
  AgainButton,
  LearnConfirmButton,
  CalendarButton,
  BackButton,
  Divider,
  WorkbookTitle,
  CheckBox,
  ModalBackdrop,
  ModalContent,
  ModalButtons,
  ModalButton,
  OptionList,
  OptionItem,
  AnswerBox,
  DateModalBackdrop,
  DateModalContent,
  DateInput,
  DateModalButtons,
  QuickRangeButtonContainer,
  QuickRangeButton,
} from "./WrongNote.Styles";
import BookShelfQuestionLogic from "@/components/unit/BookShelfQuestion/BookShelfQuestion.Container";

export default function WrongNotePresenter(props) {
  const router = useRouter();

  const {
    selectedDateRange,
    data,
    selectedBooks,
    isSelectMode,
    toggleSection,
    openSections,
    onToggleBookSelect,
    isModalOpen,
    setModalOpen,
    selectedQuestion,
    setSelectedQuestion,
    showAnswer,
    setShowAnswer,
    isDateModalOpen,
    setIsDateModalOpen,
    tempStart,
    tempEnd,
    setTempStart,
    setTempEnd,
    handleApplyDateFilter,
    handleQuickRange,
    onClickStartLearning,
    onQuestionClick,
    curBook,
    sequence,
    setSequence,
    setCurBook,
    count,
    setCount,
    isTest,
    setIsTest,
    onConfirmLearning,
    setIsSelectMode,
  } = props;

  return (
    <Wrapper>
      <DateHeader>
        <BackButton onClick={() => router.push("/")}>←</BackButton>
        {selectedDateRange.start} ~ {selectedDateRange.end}
        <CalendarButton onClick={() => setIsDateModalOpen(true)}>
          📅
        </CalendarButton>
      </DateHeader>

      <Divider />

      {data.length === 0 ? (
        <p style={{ textAlign: "center", marginTop: "24px" }}>
          해당 기간에 오답 문제가 없습니다.
        </p>
      ) : (
        data.map((book) => (
          <Section key={book.workbook}>
            <WorkbookTitle>
              {isSelectMode && (
                <CheckBox
                  type="checkbox"
                  checked={selectedBooks.includes(book.workbook)}
                  onChange={() => onToggleBookSelect(book.workbook)}
                />
              )}
              {book.workbook}
            </WorkbookTitle>
            {book.dates.map((d) => {
              const key = `${book.workbook}_${d.date}`;
              return (
                <div key={key}>
                  <DateTitle
                    onClick={() => toggleSection(book.workbook, d.date)}
                  >
                    {d.date} {openSections[key] ? "▲" : "▼"} 전체{" "}
                    {d.questions.length}개
                  </DateTitle>
                  {openSections[key] &&
                    d.questions.map((q) => (
                      <QuestionItem
                        key={q.id}
                        onClick={() => onQuestionClick(q)}
                      >
                        <span className="title">
                          {q.type === "빈칸"
                            ? q.title.replace("{BLANK}", "OOO")
                            : q.title}
                        </span>
                        <span className="type">{q.type}</span>
                      </QuestionItem>
                    ))}
                </div>
              );
            })}
          </Section>
        ))
      )}

      <AgainButton onClick={() => setIsSelectMode(!isSelectMode)}>
        다시 학습하기
      </AgainButton>

      {isSelectMode && selectedBooks.length > 0 && (
        <LearnConfirmButton onClick={onClickStartLearning}>
          학습하기
        </LearnConfirmButton>
      )}

      {sequence === 1 && curBook && (
        <BookShelfQuestionLogic
          curBook={curBook}
          count={count}
          setCount={setCount}
          onClickLearning={onConfirmLearning}
          onClose={() => {
            setSequence(0);
            setCurBook(null);
          }}
          isTest={isTest}
          setIsTest={setIsTest}
        />
      )}

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
                {selectedQuestion.type === "객관식"
                  ? `${selectedQuestion.answer}. ${
                      selectedQuestion.options[
                        selectedQuestion.answer - 1
                      ]?.split(". ")[1]
                    }`
                  : selectedQuestion.answer}
              </AnswerBox>
            )}
          </ModalContent>
        </ModalBackdrop>
      )}

      {isDateModalOpen && (
        <DateModalBackdrop onClick={() => setIsDateModalOpen(false)}>
          <DateModalContent onClick={(e) => e.stopPropagation()}>
            <div>
              <label>시작일:</label>
              <DateInput
                type="date"
                value={tempStart}
                onChange={(e) => setTempStart(e.target.value)}
              />
            </div>
            <div>
              <label>종료일:</label>
              <DateInput
                type="date"
                value={tempEnd}
                onChange={(e) => setTempEnd(e.target.value)}
              />
            </div>

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
