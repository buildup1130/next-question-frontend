import { useState,useEffect } from "react";
import BookShelfUI from "./BookShelf.Presenter";
import BottomNavigationLogic from "../BottomNavigation/BottomNavigation.Container";
import { loadNormalQuestion, searchAllWorkBooks } from "@/utils/WorkbookManager";
import { useAuth } from "@/utils/AuthContext";

export default function BookShelfContainer() {
  // 검색어 상태 관리 (사용자가 입력한 검색어 저장)
  const [searchQuery, setSearchQuery] = useState("");
  const {token,isAuthenticated} = useAuth();

  // 책 목록 상태 관리 (기본 데이터 설정)  --> 배열 이렇게 하는게 맞는지 모르겠..
  const [books, setBooks] = useState([]);
  // 현재 시퀀스 (0: 기본 , 1: 문제 옵션 모달)
  const [sequence, setSequence] = useState(0);
  // 현재 선택중인 책
  const [curBook, setCurBook] = useState(null);
  //생성할 문제 수
  const [count,setCount] = useState(1);
  //만들어진 문제 배열
  const [Questions,setQuestions] = [];


  const fetchWorkBooks = async () => {
    // console.log(token);
    const response = await searchAllWorkBooks(token);
    const bookArr = [];
    //response 가 undefined 가 아니라면 setBooks 함수 실행
    if(response){
      response?.map(
      (data) => {
        {
          const tmpObj = {
            id:data.encryptedWorkBookId,
            title: data.name,
            items: data.totalQuestion,
            date: data.recentSolvedDate.substring(0,10),
          }
          bookArr.push(tmpObj)
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

      // 선택된 책의 문제 수로 count 설정
      useEffect(() => {
        // 함수 실행
        setCount(curBook?.items);
    }, [curBook, count, setCount]);


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

  //책 선택 시 실행되는 함수
  const onClickBook = (id) => {
    console.log(`current book = ${id}`);
    setCurBook(id);
    console.log(`curBook = ${curBook}`)
    setSequence(1);
  }

  const onClickLearning = async () => {
    const result = await loadNormalQuestion(token, curBook.encryptedWorkBookId, {
      count:count,
      random: true,
      ox:true,
      multiple:true,
      blank:true
    })
    
  }

  return (
    <>
      <BookShelfUI
        books={books} // 책 목록 데이터 전달
        searchQuery={searchQuery} // 검색어 상태 전달
        onSearchChange={handleSearchChange} // 검색어 변경 핸들러 전달
        onSearch={handleSearch} // 검색 버튼 클릭 핸들러 전달
        onBack={handleBack} // 뒤로 가기 버튼 핸들러 전달
        onMoreClick={handleMoreClick} // 책 아이템의 ... 버튼 핸들러 전달
        sequence = {sequence}
        onClickBook = {onClickBook}
        curBook = {curBook}
        count = {count}
        setCount = {setCount}
        onClickLearning = {onClickLearning}
      />
      <BottomNavigationLogic />
    </>
  );
}
