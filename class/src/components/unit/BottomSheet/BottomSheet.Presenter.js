import { useState } from "react";
import BottomSheet from "./BottomSheet";
import {
  Container,
  Header,
  Title,
  BookList,
  BookItem,
  BookInfo,
  MoreButton,
} from "./BookShelf.Styles";

export default function BookShelfUI({ books }) {
  const [isSheetOpen, setSheetOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const handleMoreClick = (book) => {
    setSelectedBook(book);
    setSheetOpen(true);
  };

  return (
    <Container>
      <Header>
        <Title>책장</Title>
      </Header>

      <BookList>
        {books.map((book) => (
          <BookItem key={book.id}>
            <BookInfo>
              <span>
                {book.icon} {book.title}
              </span>
              <span>
                {book.items}, 최근 학습일: {book.date}
              </span>
            </BookInfo>
            <MoreButton onClick={() => handleMoreClick(book)}>⋮</MoreButton>
          </BookItem>
        ))}
      </BookList>

      {/* 바텀 시트 팝업 */}
      <BottomSheet
        isOpen={isSheetOpen}
        onClose={() => setSheetOpen(false)}
        book={selectedBook}
      />
    </Container>
  );
}
