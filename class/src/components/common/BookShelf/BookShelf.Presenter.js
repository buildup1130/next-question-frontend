import {
  Container,
  Header,
  Title,
  FilterRow,
  FilterGroup,
  FilterSelect,
  FilterActionGroup,
  SearchWrapper,
  StyledSearchInput,
  SearchIcon,
  BookList,
  BookItem,
  BookCheckbox,
  MoreButton,
  OptionPopup,
  OptionItem,
  AddBookArea,
  SelectButton,
  DeleteButton,
  BottomFloatingButton,
  ModalWrapper,
  ModalContent,
} from "./BookShelf.Styles";

import { useState } from "react";

export default function BookShelfUI({
  books,
  searchQuery,
  onSearchChange,
  onSearch,
  onMoreClick,
  onClickBook,
  onClickLearningMode,
  onClickLearningStart,
  isSelectMode,
  selectedBookIds,
  onOpenCreateModal,
  isCreateModalOpen,
  newWorkbookTitle,
  setNewWorkbookTitle,
  onCreateWorkbook,
  onCloseCreateModal,
  onClickRename,
  onClickDelete,
}) {
  const [optionOpenId, setOptionOpenId] = useState(null);

  const closeOptionPopup = () => {
    setOptionOpenId(null);
  };

  const renderBookItem = (book) => {
    const isSelected = selectedBookIds.includes(book.id);

    return (
      <BookItem key={book.id} onClick={() => onClickBook(book)}>
        <div>
          <div>{book.title}</div>
          <div style={{ fontSize: "14px", color: "#666" }}>
            {book.items}문제, 최근 학습일: {book.date}
          </div>
        </div>

        {isSelectMode ? (
          <BookCheckbox
            type="checkbox"
            checked={isSelected}
            onChange={() => onClickBook(book)}
            onClick={(e) => e.stopPropagation()}
          />
        ) : (
          <MoreButton
            onClick={(e) => {
              e.stopPropagation();
              setOptionOpenId(book.id === optionOpenId ? null : book.id);
            }}
          >
            ⋮
          </MoreButton>
        )}

        {!isSelectMode && optionOpenId === book.id && (
          <OptionPopup>
            <OptionItem
              onClick={(e) => {
                e.stopPropagation();
                closeOptionPopup();
                onMoreClick(book, "learn");
              }}
            >
              학습하기
            </OptionItem>
            <OptionItem
              onClick={(e) => {
                e.stopPropagation();
                closeOptionPopup();
                if (typeof onClickRename === "function") {
                  onClickRename(book);
                }
              }}
            >
              수정하기
            </OptionItem>

            <OptionItem
              onClick={(e) => {
                e.stopPropagation();
                closeOptionPopup();
                if (typeof onClickDelete === "function") {
                  onClickDelete(book);
                }
              }}
            >
              삭제하기
            </OptionItem>
          </OptionPopup>
        )}
      </BookItem>
    );
  };

  return (
    <Container>
      <Header>
        <Title>책장</Title>
      </Header>

      <SearchWrapper>
        <SearchIcon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M10 2a8 8 0 015.293 13.707l5 5a1 1 0 01-1.414 1.414l-5-5A8 8 0 1110 2zm0 2a6 6 0 100 12A6 6 0 0010 4z" />
          </svg>
        </SearchIcon>
        <StyledSearchInput
          value={searchQuery}
          onChange={onSearchChange}
          placeholder="검색어를 입력하세요"
        />
      </SearchWrapper>

      <FilterRow>
        <FilterGroup>
          <FilterSelect defaultValue="과목">
            <option value="과목">과목</option>
          </FilterSelect>
          <FilterSelect defaultValue="리스트형">
            <option value="리스트형">리스트형</option>
          </FilterSelect>
        </FilterGroup>

        <FilterActionGroup>
          {isSelectMode && (
            <DeleteButton
              disabled={selectedBookIds.length === 0}
              onClick={onClickLearningStart}
            >
              문제집 삭제
            </DeleteButton>
          )}
          <SelectButton onClick={onClickLearningMode}>
            {isSelectMode ? "선택 취소" : "선택"}
          </SelectButton>
        </FilterActionGroup>
      </FilterRow>

      <BookList>{books.map(renderBookItem)}</BookList>

      <AddBookArea onClick={onOpenCreateModal}>+</AddBookArea>

      {isCreateModalOpen && (
        <ModalWrapper>
          <ModalContent>
            <h3>문제집 생성</h3>
            <input
              value={newWorkbookTitle}
              onChange={(e) => setNewWorkbookTitle(e.target.value)}
              placeholder="문제집 이름을 입력하세요"
            />
            <button onClick={onCreateWorkbook}>생성하기</button>
            <button onClick={onCloseCreateModal}>취소</button>
          </ModalContent>
        </ModalWrapper>
      )}

      {isSelectMode && selectedBookIds.length > 0 && (
        <BottomFloatingButton>
          {selectedBookIds.length}개 과목 학습하기
        </BottomFloatingButton>
      )}
    </Container>
  );
}
