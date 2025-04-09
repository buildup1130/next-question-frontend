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
  LearnButtonWrapper, // ✅ 추가
  LearnButton, // ✅ 추가
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
  onOpenLearningModal, // ✅ 상위에서 props 내려준다면 필요
  setIsTest,
  isTest
}) {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <Container>
      {sequence === 1 && curBook !== null && !isSheetOpen && (
        <BookShelfQuestionLogic
          curBook={curBook}
          count={count}
          setCount={setCount}
          onClickLearning={onClickLearning}
          onClose={onCloseLearningModal}
        />
      )}
      <Header>
        <BackButton onClick={onBack}>←</BackButton>
        <Title>책장</Title>
        <Plus>+</Plus>
      </Header>

      <hr />

      <SearchBar>
        <SearchInput
          type="text"
          placeholder="책장 검색"
          value={searchQuery}
          onChange={onSearchChange}
        />
        <SearchButton onClick={onSearch}>🔍</SearchButton>
      </SearchBar>

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

      {/* ✅ 버튼 위치 */}
      <LearnButtonWrapper>
        <LearnButton onClick={onOpenLearningModal}>학습하기</LearnButton>
      </LearnButtonWrapper>
    </Container>
  );
}
