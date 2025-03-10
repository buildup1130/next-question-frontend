import { useState } from "react";
import BookShelfUI from "./BookShelf.Presenter";
import BottomNavigationLogic from "../BottomNavigation/BottomNavigation.Container";
import BottomSheet from "../../unit/BottomSheet/BottomSheet.Container"; // 바텀 시트 추가

export default function BookShelfContainer() {
  const [searchQuery, setSearchQuery] = useState("");

  const [books, setBooks] = useState([
    {
      id: 1,
      title: "컴퓨터 구조 3장",
      items: "N개 항목",
      date: "2025. 1. 29.",
      icon: "📺",
    },
    {
      id: 2,
      title: "컴퓨터 구조 2장",
      items: "N개 항목",
      date: "2025. 1. 28.",
      icon: "📺",
    },
    {
      id: 3,
      title: "컴퓨터 구조 1장",
      items: "N개 항목",
      date: "2025. 1. 27.",
      icon: "📺",
    },
    {
      id: 4,
      title: "논리 회로 2장",
      items: "N개 항목",
      date: "2025. 1. 27.",
      icon: "🔲",
    },
    {
      id: 5,
      title: "논리 회로 1장",
      items: "N개 항목",
      date: "2025. 1. 27.",
      icon: "🔲",
    },
    {
      id: 6,
      title: "논리 회로 종합과사",
      items: "N개 항목",
      date: "2025. 1. 27.",
      icon: "🔲",
    },
  ]);

  const [isSheetOpen, setSheetOpen] = useState(false); // 바텀 시트 상태
  const [selectedBook, setSelectedBook] = useState(null); // 선택한 책 정보

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    console.log("검색어:", searchQuery);
  };

  const handleBack = () => {
    console.log("뒤로 가기");
  };

  // 점 3개 버튼 클릭 시 실행
  const handleMoreClick = (book) => {
    setSelectedBook(book);
    setSheetOpen(true);
  };

  // 바텀 시트 닫기
  const closeBottomSheet = () => {
    setSheetOpen(false);
  };

  return (
    <>
      <BookShelfUI
        books={books}
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        onSearch={handleSearch}
        onBack={handleBack}
        onMoreClick={handleMoreClick} // 바텀 시트 열기
      />
      <BottomNavigationLogic />

      {/* 바텀 시트 추가 */}
      <BottomSheet
        isOpen={isSheetOpen}
        onClose={closeBottomSheet}
        book={selectedBook}
      />
    </>
  );
}
