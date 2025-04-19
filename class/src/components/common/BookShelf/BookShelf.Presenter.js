import {
  Container,
  Header,
  BackButton,
  Title,
  SearchBar,
  SearchInput,
  SearchButton,
  BookList,
  BookItem,
  BookInfo,
  MoreButton,
  MoreButtonWrapper,
  Plus,
  LearnButtonWrapper,
  LearnButton,
  ModalOverlay,
  ModalContainer,
  ModalTitle,
  ModalInput,
  ModalButtons,
  ModalButton,
  BookCheckbox,
  TopButtonBar,
} from "./BookShelf.Styles";
import { useState } from "react";

export default function BookShelfUI({
  books,
  searchQuery,
  onSearchChange,
  onSearch,
  onBack,
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
}) {
  const [hoveredId, setHoveredId] = useState(null);

  const renderBookItem = (book) => {
    const isSelected = selectedBookIds.includes(book.id);

    return (
      <BookItem
        key={book.id}
        onMouseOver={() => setHoveredId(book.id)}
        onMouseOut={() => setHoveredId(null)}
        onClick={() => onClickBook(book)}
      >
        <BookInfo
          style={{ flexDirection: "row", alignItems: "center", gap: "8px" }}
        >
          {isSelectMode && (
            <BookCheckbox
              type="checkbox"
              checked={isSelected}
              onChange={() => onClickBook(book)}
              onClick={(e) => e.stopPropagation()}
            />
          )}
          <div>
            <div>{book.title}</div>
            <div style={{ fontSize: "14px", color: "#666" }}>
              {book.items}문제, 최근 학습일: {book.date}
            </div>
          </div>
        </BookInfo>
        <MoreButtonWrapper
          onClick={(e) => {
            e.stopPropagation();
            onMoreClick(book);
          }}
        >
          <MoreButton>⋮</MoreButton>
        </MoreButtonWrapper>
      </BookItem>
    );
  };

  return (
    <Container>
      <Header>
        <BackButton onClick={onBack}>←</BackButton>
        <Title>책장</Title>
        <Plus onClick={onOpenCreateModal}>+</Plus>
      </Header>

      <hr />

      <SearchBar>
        <SearchInput
          value={searchQuery}
          onChange={onSearchChange}
          placeholder="책장 검색"
        />
        <SearchButton onClick={onSearch}>🔍</SearchButton>
      </SearchBar>

      <TopButtonBar>
        <LearnButton onClick={onClickLearningMode}>
          {isSelectMode ? "선택 취소" : "학습하기"}
        </LearnButton>
        {isSelectMode && (
          <LearnButton onClick={onClickLearningStart}>학습 시작</LearnButton>
        )}
      </TopButtonBar>

      <BookList>{books.map(renderBookItem)}</BookList>

      {isCreateModalOpen && (
        <ModalOverlay>
          <ModalContainer>
            <ModalTitle>빈 문제집 생성</ModalTitle>
            <ModalInput
              value={newWorkbookTitle}
              onChange={(e) => setNewWorkbookTitle(e.target.value)}
              placeholder="문제집 이름을 입력하세요"
            />
            <ModalButtons>
              <ModalButton onClick={onCloseCreateModal}>취소</ModalButton>
              <ModalButton primary onClick={onCreateWorkbook}>
                생성하기
              </ModalButton>
            </ModalButtons>
          </ModalContainer>
        </ModalOverlay>
      )}
    </Container>
  );
}
