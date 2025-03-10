import { useState } from "react";
import BookShelfUI from "./BookShelf.Presenter";
import BottomNavigationLogic from "../BottomNavigation/BottomNavigation.Container";

export default function BookShelfContainer() {
  // 검색어 상태 관리 (사용자가 입력한 검색어 저장)
  const [searchQuery, setSearchQuery] = useState("");

  // 책 목록 상태 관리 (기본 데이터 설정)  --> 배열 이렇게 하는게 맞는지 모르겠..
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

  // 검색 입력 값 변경 시 호출되는 함수
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value); // 입력 값 업데이트
  };

  // 검색 버튼 클릭 시 실행되는 함수
  const handleSearch = () => {
    console.log("검색어:", searchQuery);
    // 실제 검색 기능이 필요하면 여기에 구현
  };

  // 뒤로 가기 버튼 클릭 시 실행되는 함수
  const handleBack = () => {
    // 뒤로 가기 동작을 구현 (예: 이전 페이지 이동)
  };

  // 각 책의 '...' 버튼 클릭 시 실행되는 함수
  const handleMoreClick = (id) => {
    console.log(`책 ID ${id}의 ... 버튼 클릭!`);
    // 추가 메뉴를 열거나 상세 정보를 표시하는 기능을 구현 가능
  };

  return (
    <>
      <BookShelfUI
        books={books} // 책 목록 데이터 전달
        searchQuery={searchQuery} // 검색어 상태 전달
        onSearchChange={handleSearchChange} // 검색어 변경 핸들러 전달
        onSearch={handleSearch} // 검색 버튼 클릭 핸들러 전달
        onBack={handleBack} // 뒤로 가기 버튼 핸들러 전달
        onMoreClick={handleMoreClick} // 책 아이템의 ... 버튼 핸들러 전달
      />
      <BottomNavigationLogic />
    </>
  );
}
