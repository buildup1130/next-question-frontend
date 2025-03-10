import { useState,useEffect } from "react";
import BookShelfUI from "./BookShelf.Presenter";
import BottomNavigationLogic from "../BottomNavigation/BottomNavigation.Container";
import { searchAllWorkBooks } from "@/utils/WorkbookManager";
import { useAuth } from "@/utils/AuthContext";

export default function BookShelfContainer() {
  // 검색어 상태 관리 (사용자가 입력한 검색어 저장)
  const [searchQuery, setSearchQuery] = useState("");
  const {token} = useAuth();
  // 마우스가 올라간 book


  // 책 목록 상태 관리 (기본 데이터 설정)  --> 배열 이렇게 하는게 맞는지 모르겠..
  const [books, setBooks] = useState([
    
  ]);

  const fetchWorkBooks = async () => {
    const response = await searchAllWorkBooks(token);
    const bookArr = [];
    //response 가 undefined 가 아니라면 setBooks 함수 실행
    if(response){
      response?.map(
      (data,index) => {
        {
          console.dir(data);
          const tmpObj = {
            id:index,
            title: data.name,
            items: `${data.totalQuestion}문제`,
            date: data.recentSolvedDate.substring(0,10),
          }
          bookArr.push(tmpObj)
          console.log(tmpObj.id);
        }
      }
    )
    setBooks(bookArr);
    }
    
  }

      useEffect(() => {
          // 함수 실행
          fetchWorkBooks();
      }, [token]); // 의존성 배열에 isAuthenticated와 token 포함


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
