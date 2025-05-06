import { useRouter } from "next/router";
import {
  Wrapper,
  Header,
  PageTitle,
  DateHeader,
  FilterBar,
  SelectBox,
  FilterButton,
  Divider,
  WorkbookRow,
  WorkbookName,
  WorkbookArrow,
  CheckBox,
  AgainButton,
  CalendarButton,
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
  QuestionListItem,
  QuestionNumber,
  QuestionTitle,
  WorkbookCount,
  WorkbookRight,
} from "./WrongNote.Styles";

export default function WrongNoteUI(props) {
  const router = useRouter();
  const {
    selectedDateRange,
    data,
    selectedBooks,
    isSelectMode,
    onToggleBookSelect,
    isModalOpen,
    setModalOpen,
    selectedQuestion,
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
    toggleSection,
    filterOptions,
    selectedFilterBook,
    setSelectedFilterBook,
  } = props;

  const filteredData =
    selectedFilterBook === "모든 문제집"
      ? data
      : data.filter((book) => book.workbook === selectedFilterBook);

  return (
    <Wrapper>
      <Header>
        <PageTitle>오답 노트</PageTitle>
      </Header>
      <Divider />

      <DateHeader>
        {selectedDateRange.start} ~ {selectedDateRange.end}
        <CalendarButton onClick={() => setIsDateModalOpen(true)}>
          📅
        </CalendarButton>
      </DateHeader>

      <FilterBar>
        <SelectBox
          value={selectedFilterBook}
          onChange={(e) => setSelectedFilterBook(e.target.value)}
        >
          {filterOptions.map((option, idx) => (
            <option key={idx} value={option}>
              {option}
            </option>
          ))}
        </SelectBox>
        <FilterButton onClick={() => props.setIsSelectMode(!isSelectMode)}>
          {isSelectMode ? "취소" : "선택"}
        </FilterButton>
      </FilterBar>

      <Divider />

      {filteredData.length === 0 ? (
        <p style={{ textAlign: "center", marginTop: "24px" }}>
          해당 기간에 오답 문제가 없습니다.
        </p>
      ) : (
        filteredData.map((book) => {
          const isOpen = props.openSections[`${book.workbook}_all`];

          return (
            <div key={book.workbook}>
              <WorkbookRow
                onClick={() => props.toggleSection(book.workbook, "all")}
              >
                <WorkbookName>{book.workbook}</WorkbookName>
                <WorkbookRight>
                  <WorkbookCount>{book.total}문제</WorkbookCount>
                  {isSelectMode ? (
                    <CheckBox
                      type="checkbox"
                      checked={selectedBooks.includes(book.workbook)}
                      onClick={(e) => e.stopPropagation()}
                      onChange={() => onToggleBookSelect(book.workbook)}
                    />
                  ) : (
                    <WorkbookArrow>{isOpen ? "▲" : "▼"}</WorkbookArrow>
                  )}
                </WorkbookRight>
              </WorkbookRow>

              {isOpen && (
                <div style={{ padding: "0 16px", marginBottom: "12px" }}>
                  {book.dates
                    .flatMap((d) => d.questions)
                    .map((q, i) => (
                      <QuestionListItem
                        key={i}
                        onClick={() => props.onQuestionClick(q)}
                      >
                        <QuestionNumber>Q{i + 1}.</QuestionNumber>
                        <QuestionTitle>{q.title}</QuestionTitle>
                      </QuestionListItem>
                    ))}
                </div>
              )}

              <Divider />
            </div>
          );
        })
      )}

      <AgainButton
        disabled={!isSelectMode || selectedBooks.length === 0}
        onClick={() => {
          if (isSelectMode && selectedBooks.length > 0) {
            onClickStartLearning();
            props.onConfirmLearning();
          }
        }}
      >
        다시 학습하기
      </AgainButton>

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
                      <OptionItem key={idx}>
                        {`${idx + 1}. ${option.split(". ")[1] || option}`}
                      </OptionItem>
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
