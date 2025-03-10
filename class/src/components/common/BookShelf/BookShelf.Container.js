import { useState,useEffect } from "react";
import BookShelfUI from "./BookShelf.Presenter";
import BottomNavigationLogic from "../BottomNavigation/BottomNavigation.Container";

import BottomSheet from "../../unit/BottomSheet/BottomSheet.Container"; // 바텀 시트 추가
import { loadNormalQuestion, searchAllWorkBooks } from "@/utils/WorkbookManager";
import { useAuth } from "@/utils/AuthContext";
import { useRouter } from "next/router";

export default function BookShelfContainer() {
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

  //라우터 객체
  const router = useRouter();

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
    }, [curBook,setCount]);

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

  //책 선택 시 실행되는 함수
  const onClickBook = (id) => {
    console.log(`current book = ${id}`);
    setCurBook(id);
    console.log(`curBook = ${curBook}`)
    setSequence(1);
  }

  //학습하기 버튼 클릭 시 실행되는 함수수
  const onClickLearning = async () => {
    const result = await loadNormalQuestion(token, curBook.id, {
      count:count,
      random: true,
      ox:true,
      multiple:true,
      blank:true
    })
    // 로컬 스토리지에 데이터 저장
    localStorage.setItem('tempQuestionData', JSON.stringify(result));
          
    // Question 페이지로 이동
    router.push("/Question");
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

      {/* 바텀 시트 추가 */}
      <BottomSheet
        isOpen={isSheetOpen}
        onClose={closeBottomSheet}
        book={selectedBook}
      />
    </>
  );
}
