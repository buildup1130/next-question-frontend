import { useState, useEffect } from "react";
import BookShelfUI from "./BookShelf.Presenter";
import BottomSheet from "../../unit/BottomSheet/BottomSheet.Container";
import RenameModalContainer from "../../unit/RenameModal/RenameModal.Container";
import BookShelfQuestionLogic from "../../unit/BookShelfQuestion/BookShelfQuestion.Container";
import {
  deleteWorkBooks,
  loadNormalQuestion,
  searchAllWorkBooks,
  createWorkbook,
} from "@/utils/WorkbookManager";
import { useAuth } from "@/utils/AuthContext";
import { useRouter } from "next/router";

export default function BookShelfContainer() {
  const [searchQuery, setSearchQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [count, setCount] = useState(1);
  const [isSheetOpen, setSheetOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const [curBook, setCurBook] = useState(null);
  const [sequence, setSequence] = useState(0);
  const [isRenameModalOpen, setRenameModalOpen] = useState(false);
  const [renameTargetBook, setRenameTargetBook] = useState(null);
  const [isTest, setIsTest] = useState(false);
  const [isCreateModalOpen, setCreateModalOpen] = useState(false);
  const [newWorkbookTitle, setNewWorkbookTitle] = useState("");

  const { token } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (token) fetchWorkBooks();
  }, [token]);

  const fetchWorkBooks = async () => {
    setIsLoading(true);
    try {
      const response = await searchAllWorkBooks(token);
      const bookArr = response.map((data) => ({
        id: data.encryptedWorkBookId,
        title: data.name,
        items: data.totalQuestion,
        date: data.recentSolvedDate?.substring(0, 10) || "N/A",
      }));
      setBooks(bookArr);
      setFilteredBooks(bookArr);
    } catch (error) {
      console.error("Failed to fetch books:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearchChange = (e) => setSearchQuery(e.target.value);
  const handleSearch = () => {
    const result = books.filter((book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredBooks(result);
    setSearchQuery("");
  };

  const handleBack = () => router.back();
  const handleMoreClick = (book) => {
    setSelectedBook(book);
    setSheetOpen(true);
  };
  const closeBottomSheet = () => setSheetOpen(false);

  const onClickBook = (book) => {
    router.push({
      pathname: "Workbook",
      query: { workBookId: book.id, title: book.title },
    });
  };

  const onClickLearning = () => {
    if (!token || !curBook?.id) return alert("정보가 없습니다.");
    router.push({
      pathname: "/Question",
      query: {
        Id: curBook.id,
        count,
        type: isTest ? 1 : 0,
        random: true,
        ox: true,
        multiple: true,
        blank: true,
      },
    });
  };

  const handleDelete = async () => {
    if (!token || !selectedBook) return;
    try {
      await deleteWorkBooks(token, [selectedBook.id]);
      fetchWorkBooks();
      setSelectedBook(null);
      setSheetOpen(false);
    } catch (err) {
      alert("삭제 중 오류 발생");
    }
  };

  const handleCreateWorkbook = async () => {
    if (!newWorkbookTitle.trim()) return alert("문제집 이름을 입력해주세요.");
    try {
      await createWorkbook(token, newWorkbookTitle.trim());
      setCreateModalOpen(false);
      setNewWorkbookTitle("");
      fetchWorkBooks();
    } catch {
      alert("문제집 생성 실패");
    }
  };

  return (
    <>
      {sequence === 1 && curBook && !isSheetOpen && (
        <BookShelfQuestionLogic
          curBook={curBook}
          count={count}
          setCount={setCount}
          onClickLearning={onClickLearning}
          onClose={() => {
            setSequence(0);
            setCurBook(null);
          }}
          isTest={isTest}
          setIsTest={setIsTest}
        />
      )}

      <BookShelfUI
        books={filteredBooks}
        isLoading={isLoading}
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        onSearch={handleSearch}
        onBack={handleBack}
        onMoreClick={handleMoreClick}
        onClickBook={onClickBook}
        onClickDelete={handleDelete}
        onOpenCreateModal={() => setCreateModalOpen(true)}
        isCreateModalOpen={isCreateModalOpen}
        newWorkbookTitle={newWorkbookTitle}
        setNewWorkbookTitle={setNewWorkbookTitle}
        onCreateWorkbook={handleCreateWorkbook}
        onCloseCreateModal={() => setCreateModalOpen(false)}
      />

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
        onDelete={handleDelete}
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
