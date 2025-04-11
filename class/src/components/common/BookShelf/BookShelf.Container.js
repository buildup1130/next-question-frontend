// BookShelf.Container.js
import { useState, useEffect } from "react";
import BookShelfUI from "./BookShelf.Presenter";
import BottomNavigationLogic from "../BottomNavigation/BottomNavigation.Container";
import BottomSheet from "../../unit/BottomSheet/BottomSheet.Container";
import RenameModalContainer from "../../unit/RenameModal/RenameModal.Container";
import BookShelfQuestionLogic from "../../unit/BookShelfQuestion/BookShelfQuestion.Container";

import {
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
    router.push(`/Workbook?id=${book.id}`);
  };

  const onClickLearning = async () => {
    alert("토큰 또는 워크북 정보가 없습니다.");
    console.log("token:", token);
    console.log("curBook:", curBook);
    console.log("count:", count);
    if (!token || !curBook?.id) {
      return;
    }

    console.log("보낼 workbookId:", curBook.id);

    try {
      console.log("🔥 요청 바디:", {
        encryptedWorkBookId: curBook.id,
        options: {
          count: count,
          random: true,
          ox: true,
          multiple: true,
          blank: true,
        },
      });
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
        router.push("/Question");
      }
      console.log("📦 결과:", result);
    } catch (err) {
      alert("문제 데이터를 불러오는 중 오류 발생");
      console.error(err);
    }
  };

  const onCloseLearningModal = () => {
    setSequence(0);
    setCurBook(null);
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
