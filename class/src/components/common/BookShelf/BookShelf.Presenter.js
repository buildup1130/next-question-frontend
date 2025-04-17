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
  onOpenCreateModal,
  isCreateModalOpen,
  newWorkbookTitle,
  setNewWorkbookTitle,
  onCreateWorkbook,
  onCloseCreateModal,
}) {
  const [hoveredId, setHoveredId] = useState(null);

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

      <BookList>
        {books.map((book) => (
          <BookItem
            key={book.id}
            onMouseOver={() => setHoveredId(book.id)}
            onMouseOut={() => setHoveredId(null)}
            onClick={() => onClickBook(book)}
            style={{
              backgroundColor:
                hoveredId === book.id ? "#f0f0f0" : "transparent",
            }}
          >
            <BookInfo>
              <span>{book.title}</span>
              <span>
                {book.items}문제, 최근 학습일: {book.date}
              </span>
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
        ))}
      </BookList>

      <LearnButtonWrapper>
        <LearnButton onClick={onOpenCreateModal}>학습하기</LearnButton>
      </LearnButtonWrapper>

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
