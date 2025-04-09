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

  const [sequence, setSequence] = useState(0); // 학습 모달 컨트롤
  const [curBook, setCurBook] = useState(null); // 학습 대상 문제집
  const [count, setCount] = useState(1); // 문제 수 설정

  const [isSheetOpen, setSheetOpen] = useState(false); // 바텀시트 열림 여부
  const [selectedBook, setSelectedBook] = useState(null); // 바텀시트 대상 문제집
  const [isPendingMoreClick, setIsPendingMoreClick] = useState(false); // 안전한 바텀시트 실행 예약

  const [isMultiModalOpen, setIsMultiModalOpen] = useState(false); // 다중 문제집 학습 모달

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

  const onClickLearning = async () => {
    const result = await loadNormalQuestion(token, curBook.id, {
      count: count,
      random: true,
      ox: true,
      multiple: true,
      blank: true,
    });

    if (result) {
      result.map((data) => {
        if (data.answer === "O") data.answer = "0";
        else if (data.answer === "X") data.answer = "1";

        if (data.type === "FILL_IN_THE_BLANK") {
          data.name = data.name.replace("{BLANK}", "OOO");
        }
      });

      localStorage.setItem("tempQuestionData", JSON.stringify(result));
      router.push("/Question");
    }
  };

  const onCloseLearningModal = () => {
    setSequence(0);
    setCurBook(null);
  };

  const onOpenMultiLearningModal = () => {
    setIsMultiModalOpen(true);
  };

  return (
    <>
      <BookShelfUI
        books={books}
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        onSearch={handleSearch}
        onBack={handleBack}
        onMoreClick={handleMoreClick}
        sequence={sequence}
        onClickBook={onClickBook}
        curBook={curBook}
        count={count}
        setCount={setCount}
        onClickLearning={onClickLearning}
        isSheetOpen={isSheetOpen}
        onCloseLearningModal={onCloseLearningModal}
        onOpenMultiLearningModal={onOpenMultiLearningModal}
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
