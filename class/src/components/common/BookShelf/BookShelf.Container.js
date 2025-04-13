import { useState, useEffect } from "react";
import BookShelfUI from "./BookShelf.Presenter";
import BottomNavigationLogic from "../BottomNavigation/BottomNavigation.Container";
import BottomSheet from "../../unit/BottomSheet/BottomSheet.Container";
import RenameModalContainer from "../../unit/RenameModal/RenameModal.Container";
import BookShelfQuestionLogic from "../../unit/BookShelfQuestion/BookShelfQuestion.Container";
import {
  deleteWorkBooks,
  loadNormalQuestion,
  searchAllWorkBooks,
} from "@/utils/WorkbookManager";
import { useAuth } from "@/utils/AuthContext";
import { useRouter } from "next/router";

export default function BookShelfContainer() {
  const [searchQuery, setSearchQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [count, setCount] = useState(1);

  const { token } = useAuth();
  const router = useRouter();

  const [isSheetOpen, setSheetOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const [isPendingMoreClick, setIsPendingMoreClick] = useState(false);

  const [curBook, setCurBook] = useState(null);
  const [sequence, setSequence] = useState(0);

  const [isRenameModalOpen, setRenameModalOpen] = useState(false);
  const [renameTargetBook, setRenameTargetBook] = useState(null);
  const [isTest, setIsTest] = useState(false);

  const fetchWorkBooks = async () => {
    setIsLoading(true);
    if (!token) {
      console.log("Token is not available yet.");
      setIsLoading(false);
      return;
    }

    try {
      const response = await searchAllWorkBooks(token);
      console.log("Books fetched successfully:", response);
      const bookArr = response.map((data) => ({
        id: data.encryptedWorkBookId,
        title: data.name,
        items: data.totalQuestion,
        date: data.recentSolvedDate.substring(0, 10),
      }));
      setBooks(bookArr);
    } catch (error) {
      console.error("Failed to fetch books:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchWorkBooks();
  }, [token]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    console.log("Search query:", searchQuery);
  };

  const handleBack = () => {
    router.back();
  };

  const handleMoreClick = (book) => {
    setSelectedBook(book);
    setSheetOpen(true);
  };

  const closeBottomSheet = () => {
    setSheetOpen(false);
  };

  const onClickBook = (book) => {
    router.push(`/Workbook?workBookId=${book.id}&title=${book.title}`);
  };

  const onClickLearning = async () => {
    console.log("token:", token);
    console.log("curBook:", curBook);
    console.log("count:", count);

    if (!token || !curBook?.id) {
      alert("토큰 또는 워크북 정보가 없습니다.");
      return;
    }

    try {
      const result = await loadNormalQuestion(token, curBook.id, {
        count: count,
        random: true,
        ox: true,
        multiple: true,
        blank: true,
      });

      if (result) {
        localStorage.setItem("tempQuestionData", JSON.stringify(result));
        localStorage.setItem("isTest", isTest);
        localStorage.setItem("workBookId", curBook.id);
        router.push({
          pathname: "/Question",
          query: { type: 3 },
        });
      }
    } catch (err) {
      alert("문제 데이터를 불러오는 중 오류 발생");
      console.error(err);
    }
  };

  const onCloseLearningModal = () => {
    setSequence(0);
    setCurBook(null);
  };

  const handleDelete = async () => {
    console.log("📌 handleDelete 함수 실행됨");

    try {
      if (!token || !selectedBook) {
        alert("삭제할 문제집이 선택되지 않았습니다.");
        return;
      }

      await deleteWorkBooks(token, [selectedBook.id]);

      // 상태 초기화 및 목록 새로고침
      fetchWorkBooks();
      setSelectedBook(null);
      setSheetOpen(false);
    } catch (err) {
      alert("문제집 삭제 중 오류 발생");
      console.error(err);
    }
  };

  return (
    <>
      {sequence === 1 && curBook !== null && !isSheetOpen && (
        <BookShelfQuestionLogic
          curBook={curBook}
          count={count}
          setCount={setCount}
          onClickLearning={onClickLearning}
          onClose={onCloseLearningModal}
          isTest={isTest}
          setIsTest={setIsTest}
        />
      )}

      <BookShelfUI
        books={books}
        isLoading={isLoading}
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        onSearch={handleSearch}
        onBack={handleBack}
        onMoreClick={handleMoreClick}
        onClickBook={onClickBook}
        onClickDelete={handleDelete} // ✅ 수정된 부분
        isSheetOpen={isSheetOpen}
        onCloseBottomSheet={closeBottomSheet}
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
        setRenameModalOpen={setRenameModalOpen}
        setRenameTargetBook={setRenameTargetBook}
        onDelete={handleDelete} // ✅ 꼭 추가해야 함!
      />

      {isRenameModalOpen && (
        <RenameModalContainer
          book={renameTargetBook}
          onClose={() => setRenameModalOpen(false)}
          fetchWorkBooks={fetchWorkBooks}
        />
      )}
    </>
  );
}
