import { useRouter } from "next/router";
import { Calendar } from "lucide-react";
import { Calendar as DatePicker } from "react-date-range";
import { ko } from "date-fns/locale";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import React, { useState } from "react";

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
  DateInputGroup,
  DateInputLabel,
  DateInput,
  DateModalButtons,
  QuickRangeButtonContainer,
  QuickRangeButton,
  WorkbookCount,
  WorkbookRight,
  DateRangeWrapper,
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
    groupedHistory,
    onClickHistory,
    openStartCalendar,
    setOpenStartCalendar,
    openEndCalendar,
    setOpenEndCalendar,
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

      <DateHeader>
        {selectedDateRange.start} ~ {selectedDateRange.end}
        <CalendarButton onClick={() => setIsDateModalOpen(true)}>
          <Calendar size={20} strokeWidth={2} />
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

      {(selectedFilterBook === "학습별" ? groupedHistory : filteredData)
        ?.length === 0 ? (
        <p style={{ textAlign: "center", marginTop: "24px" }}>
          학습 기록이 없습니다.
        </p>
      ) : selectedFilterBook === "학습별" ? (
        groupedHistory.map((group, idx) => (
          <WorkbookRow
            key={idx}
            onClick={() => onClickHistory(group.historyId)}
          >
            <WorkbookName>
              {group.solvedAt?.replace("T", " ").slice(0, 16)}{" "}
              {group.mainWorkBookName}
              {group.workBookCount > 1 &&
                ` 외 ${group.workBookCount - 1} 문제집`}
            </WorkbookName>
            <WorkbookRight>
              <WorkbookCount>{group.questionCount}문제</WorkbookCount>
              <WorkbookArrow>▶</WorkbookArrow>
            </WorkbookRight>
          </WorkbookRow>
        ))
      ) : (
        filteredData.map((book) => {
          const firstQuestion = book.dates?.[0]?.questions?.[0];
          const dt = firstQuestion?.solvedAt
            ? new Date(firstQuestion.solvedAt.replace(" ", "T"))
            : null;
          const formattedTime =
            dt && !isNaN(dt.getTime())
              ? dt.toISOString().slice(0, 16).replace("T", " ")
              : "시간 정보 없음";

          return (
            <div key={book.workbook}>
              <WorkbookRow
                onClick={() => {
                  if (isSelectMode) {
                    onToggleBookSelect(book.workbook);
                  } else {
                    router.push({
                      pathname: "/WrongWorkbook",
                      query: {
                        workbookId: book.workbookId,
                        title: book.workbook,
                      },
                    });
                  }
                }}
              >
                <WorkbookName>
                  <div className="title">{book.workbook}</div>
                  <div className="date">{formattedTime}</div>
                </WorkbookName>

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
                    <WorkbookArrow>▶</WorkbookArrow>
                  )}
                </WorkbookRight>
              </WorkbookRow>

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
            <DateInputGroup>
              <DateInputLabel>시작일</DateInputLabel>
              <DateInput
                value={tempStart}
                readOnly
                onClick={() => {
                  setOpenStartCalendar(!openStartCalendar);
                  setOpenEndCalendar(false);
                }}
              />
              {openStartCalendar && (
                <DateRangeWrapper>
                  <DatePicker
                    locale={ko}
                    date={new Date(tempStart)}
                    onChange={(date) => {
                      const offsetDate = new Date(
                        date.getTime() + 9 * 60 * 60 * 1000
                      ); // ✅ KST 보정
                      const localDateStr = offsetDate
                        .toISOString()
                        .split("T")[0];
                      setTempStart(localDateStr); // ✅ 시작일 설정
                      setOpenStartCalendar(false);
                    }}
                  />
                </DateRangeWrapper>
              )}
            </DateInputGroup>

            <DateInputGroup>
              <DateInputLabel>종료일</DateInputLabel>
              <DateInput
                value={tempEnd}
                readOnly
                onClick={() => {
                  setOpenEndCalendar(!openEndCalendar);
                  setOpenStartCalendar(false);
                }}
              />
              {openEndCalendar && (
                <DateRangeWrapper>
                  <DatePicker
                    locale={ko}
                    date={new Date(tempEnd)}
                    onChange={(date) => {
                      const offsetDate = new Date(
                        date.getTime() + 9 * 60 * 60 * 1000
                      ); // ✅ KST 보정
                      const localDateStr = offsetDate
                        .toISOString()
                        .split("T")[0];
                      setTempEnd(localDateStr); // ✅ 종료일 설정
                      setOpenEndCalendar(false);
                    }}
                  />
                </DateRangeWrapper>
              )}
            </DateInputGroup>

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
              <button onClick={() => setIsDateModalOpen(false)}>취소</button>
              <button onClick={handleApplyDateFilter}>확인</button>
            </DateModalButtons>
          </DateModalContent>
        </DateModalBackdrop>
      )}
    </Wrapper>
  );
}
