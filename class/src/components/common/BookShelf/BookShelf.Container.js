import { useState, useEffect } from "react";
import BookShelfUI from "./BookShelf.Presenter";
import BottomSheet from "../../unit/BottomSheet/BottomSheet.Container";
import RenameModalLogic from "../../unit/RenameModal/RenameModal.Container";
import BookShelfQuestionLogic from "../../unit/BookShelfQuestion/BookShelfQuestion.Container";
import {
  deleteWorkBooks,
  searchAllWorkBooks,
  createWorkbook,
} from "@/utils/WorkbookManager";
import { useAuth } from "@/utils/AuthContext";
import { useRouter } from "next/router";
import { fetchQuestionType } from "@/utils/WorkbookManager";

export default function BookShelfLogic() {
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
  const [isSelectMode, setIsSelectMode] = useState(false);
  const [selectedBookIds, setSelectedBookIds] = useState([]);
  //선택된 Type
  //0: 객관식 , 1: 참/거짓, 2:주관식
  const [selectedType, setSelectedType] = useState([0, 1, 2]);
  //Type 별 수
  const [typeNum, setTypeNum] = useState({});

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

  // 검색 관련
  const handleSearchChange = (e) => setSearchQuery(e.target.value);
  const handleSearch = () => {
    const result = books.filter((book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredBooks(result);
    setSearchQuery("");
  };

  // 네비게이션
  const handleBack = () => router.back();

  // 모달 및 기타 액션
  const handleMoreClick = (book) => {
    setSelectedBook(book);
    setSheetOpen(true);
  };
  const closeBottomSheet = () => setSheetOpen(false);

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

  // 문제집 클릭 및 학습 관련
  const onClickBook = (book) => {
    if (isSelectMode) {
      const isSelected = selectedBookIds.includes(book.id);
      setSelectedBookIds((prev) =>
        isSelected ? prev.filter((id) => id !== book.id) : [...prev, book.id]
      );
    } else {
      router.push({
        pathname: "Workbook",
        query: { workBookId: book.id, title: book.title },
      });
    }
  };

  const onClickLearningMode = () => {
    setIsSelectMode((prev) => !prev);
    setSelectedBookIds([]);
  };

  const onClickLearningStart = () => {
    if (selectedBookIds.length === 0) return alert("문제집을 선택해주세요.");
    const totalQuestions = books
      .filter((book) => selectedBookIds.includes(book.id))
      .reduce((acc, cur) => acc + cur.items, 0);
    setCurBook({ id: selectedBookIds, items: totalQuestions });
    setSequence(1);
  };

  const onClickLearning = () => {
    if (!token || !curBook?.id || selectedType.length === 0)
      return alert("잘못된 접근입니다.");
    const typeMapping = [
      { type: 0, count: typeNum.multipleChoice },
      { type: 1, count: typeNum.ox },
      { type: 2, count: typeNum.fillInTheBlank },
    ];

    const queCount = typeMapping.reduce(
      (total, { type, count }) =>
        selectedType.includes(type) ? total + count : total,
      0
    );

    router.push({
      pathname: "/Question",
      query: {
        Id: curBook.id,
        count: queCount,
        type: isTest ? 1 : 0,
        random: selectedType.length === 3 ? true : false,
        ox: selectedType.includes(1) ? "true" : "false",
        multiple: selectedType.includes(0) ? "true" : "false",
        blank: selectedType.includes(2) ? "true" : "false",
      },
    });
  };

  const onFetchType = (id) => {
    fetchQuestionType(token, id).then((res) => {
      setTypeNum(res);
    });
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
            setIsSelectMode(false);
            setSelectedBookIds([]);
          }}
          isTest={isTest}
          setIsTest={setIsTest}
          selectedType={selectedType}
          setSelectedType={setSelectedType}
          typeNum={typeNum}
          onFetchType={onFetchType}
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
        onClickLearningMode={onClickLearningMode}
        onClickLearningStart={onClickLearningStart}
        isSelectMode={isSelectMode}
        selectedBookIds={selectedBookIds}
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
        <RenameModalLogic
          book={renameTargetBook}
          onClose={() => setRenameModalOpen(false)}
          fetchWorkBooks={fetchWorkBooks}
        />
      )}
    </>
  );
}
