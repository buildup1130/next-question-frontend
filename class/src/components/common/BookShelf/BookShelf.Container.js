import { useState, useEffect } from "react";
import BookShelfUI from "./BookShelf.Presenter";
import BottomNavigationLogic from "../BottomNavigation/BottomNavigation.Container";
import BottomSheet from "../../unit/BottomSheet/BottomSheet.Container";
import {
  loadNormalQuestion,
  searchAllWorkBooks,
} from "@/utils/WorkbookManager";
import { useAuth } from "@/utils/AuthContext";
import { useRouter } from "next/router";

export default function BookShelfContainer() {
  const [searchQuery, setSearchQuery] = useState("");
  const { token, user } = useAuth();
  const userId = user?.userId;
  const [books, setBooks] = useState([]);

  // 현재 시퀀스 (0: 기본 , 1: 문제 옵션 모달)
  const [sequence, setSequence] = useState(0);
  // 현재 선택중인 책
  const [curBook, setCurBook] = useState({});
  //생성할 문제 수
  const [count,setCount] = useState(1);
  //모의고사 여부
  const [isTest,setIsTest] = useState(false);

  //라우터 객체
  const router = useRouter();

  const fetchWorkBooks = async () => {
    const response = await searchAllWorkBooks(token);
    const bookArr = [];

    if (response) {
      response.map((data) => {
        const tmpObj = {
          id: data.encryptedWorkBookId,
          title: data.name,
          items: data.totalQuestion,
          date: data.recentSolvedDate.substring(0, 10),
        };
        bookArr.push(tmpObj);
      });
      setBooks(bookArr);
    }
  };

  useEffect(() => {
    fetchWorkBooks();
  }, [token]);

  useEffect(() => {
    if (curBook) {
      setCount(curBook.items);
    }
  }, [curBook]);

  useEffect(() => {
    if (sequence === 0 && curBook === null && isPendingMoreClick) {
      setSelectedBook(isPendingMoreClick);
      setSheetOpen(true);
      setIsPendingMoreClick(false);
    }
  }, [sequence, curBook, isPendingMoreClick]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    console.log("검색어:", searchQuery);
  };

  const handleBack = () => {
    console.log("뒤로 가기");
  };

  const handleMoreClick = (book) => {
    if (sequence !== 0 || curBook !== null) {
      setSequence(0);
      setCurBook(null);
      setIsPendingMoreClick(book);
    } else {
      setSelectedBook(book);
      setSheetOpen(true);
    }
  };

  const closeBottomSheet = () => {
    setSheetOpen(false);
  };

  const onClickBook = (book) => {
    if (!userId) {
      alert("로그인이 필요합니다");
      return;
    }

    router.push({
      pathname: "/Workbook",
      query: {
        workBookId: book.id,
        memberId: user.userId,
        title: book.title,
      },
    });
  };

  const onCloseLearningModal = () => {
    setSequence(0);
    setCurBook(null);
  };

  const onOpenMultiLearningModal = () => {
    setIsMultiModalOpen(true);
  };

  // //학습하기 버튼 클릭 시 실행되는 함수수
  // const onClickLearning = async () => {
  //   const result = await loadNormalQuestion(token, curBook.id, {
  //     count:count,
  //     random: true,
  //     ox:true,
  //     multiple:true,
  //     blank:true
  //   }).then(
  //     result => {
  //       if(result){
  //     //추가적인 작업 필요
  //     //1. OX를 0,1 로 변경

  //     //result 의 탑은 object
  //     console.log(typeof(result));

  //     result.map((data, index) =>{
  //       //정답이 O면 0 X면 1으로 치환
  //       if(data.answer === 'O'){
  //         data.answer = '0';
  //       }else if(data.answer === 'X'){
  //         data.answer = '1';
  //       }

  //       if(data.type === 'FILL_IN_THE_BLANK'){
  //         const tmp = data.name.replace('{BLANK}', 'OOO');
  //         data.name = tmp;
  //       }
  //     })

  //     // 로컬 스토리지에 데이터 저장
  //     localStorage.setItem('tempQuestionData', JSON.stringify(result));
  //     localStorage.setItem('isTest', isTest);
  //     localStorage.setItem('workBookId', curBook.id);
  //     // Question 페이지로 이동
  //     router.push("/Question");
  //       }
  //     })  
  // }

  //URL 파라미터 사용 방법
  const onClickLearning = () => {
    router.push({
      pathname: "/Question",
      query:{
        Id: curBook.id,
        count: count,
        type:(isTest?1:0),
        random:1,
        ox:1,
        multiple:1,
        blank:1,
      }

      })
  }

  return (
    <>
      <BookShelfUI
        isSheetOpen={isSheetOpen}
        onCloseLearningModal={onCloseLearningModal}
        onOpenMultiLearningModal={onOpenMultiLearningModal}
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
        setIsTest = {setIsTest}
        isTest = {isTest}
      />

      <BottomNavigationLogic />

      <BottomSheet
        isOpen={isSheetOpen}
        onClose={closeBottomSheet}
        book={selectedBook}
        setCurBook={setCurBook}
        setSequence={setSequence}
        setSheetOpen={setSheetOpen}
        fetchWorkBooks={fetchWorkBooks}
      />
    </>
  );
}
