import BookShelfQuestionLogic from "@/components/unit/BookShelfQuestion/BookShelfQuestion.Container";
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
  Plus,
  MoreButtonWrapper,
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
  sequence,
  curBook,
  count,
  setCount,
  onClickLearning,
  isSheetOpen,
  onCloseLearningModal,
}) {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <Container>
      {sequence === 1 && curBook !== null && !isSheetOpen ? (
        <BookShelfQuestionLogic
          curBook={curBook}
          count={count}
          setCount={setCount}
          onClickLearning={onClickLearning}
          onClose={onCloseLearningModal}
        />
      ) : null}

      <></>
      {/* 상단 헤더 (뒤로 가기 버튼 + 제목) */}
      <Header>
        <BackButton onClick={onBack}>←</BackButton>
        <Title>책장</Title>
        <Plus>+</Plus>
      </Header>
      <hr />
      {/* 검색창 */}
      <SearchBar>
        <SearchInput
          type="text"
          placeholder="책장 검색"
          value={searchQuery}
          onChange={onSearchChange}
        />
        <SearchButton onClick={onSearch}>🔍</SearchButton>
      </SearchBar>
      {/* 책 목록 */}
      <BookList>
        {books.map((book, index) => (
          <BookItem
            key={index}
            onMouseOver={() => setHoveredId(book.id)}
            onMouseOut={() => setHoveredId(null)}
            style={{
              backgroundColor:
                hoveredId === book.id ? "#f0f0f0" : "transparent",
            }}
            onClick={() => {
              onClickBook(book);
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
    </Container>
  );
}
