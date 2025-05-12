import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import BookShelfUI from "./BookShelf.Presenter";
import RenameModalLogic from "../../unit/RenameModal/RenameModal.Container";
import BookShelfQuestionLogic from "../../unit/BookShelfQuestion/BookShelfQuestion.Container";
import DeleteWorkbookModalLogic from "../../unit/DeleteModal/DeleteWorkbookModal.Container";
import { toast } from "react-toastify";
import {
  deleteWorkBooks,
  searchAllWorkBooks,
  createWorkbook,
  fetchQuestionType,
} from "@/utils/WorkbookManager";
import { useAuth } from "@/utils/AuthContext";

export default function BookShelfLogic() {
  const { token } = useAuth();
  const router = useRouter();

  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [viewType, setViewType] = useState("list");
  const [sortOption, setSortOption] = useState("name");
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const [isSelectMode, setIsSelectMode] = useState(false);
  const [selectedBookIds, setSelectedBookIds] = useState([]);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const [isRenameModalOpen, setRenameModalOpen] = useState(false);
  const [renameTargetBook, setRenameTargetBook] = useState(null);

  const [isCreateModalOpen, setCreateModalOpen] = useState(false);
  const [newWorkbookTitle, setNewWorkbookTitle] = useState("");

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState(null);

  const [isLearningModalOpen, setIsLearningModalOpen] = useState(false);
  const [curBook, setCurBook] = useState(null);
  const [sequence, setSequence] = useState(0);
  const [count, setCount] = useState(1);
  const [isTest, setIsTest] = useState(false);
  const [selectedType, setSelectedType] = useState([0, 1, 2]);
  const [typeNum, setTypeNum] = useState({});

  useEffect(() => {
    if (typeof window !== "undefined") {
      setViewType(localStorage.getItem("viewType") || "list");
    }
  }, []);

  useEffect(() => {
    if (token) fetchWorkBooks();
  }, [token, router.asPath]);

  useEffect(() => {
    const checkScreenSize = () => setIsSmallScreen(window.innerWidth <= 375);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    const sorted = [...books].sort((a, b) => {
      if (sortOption === "name") return a.title.localeCompare(b.title);
      if (sortOption === "created") return new Date(b.date) - new Date(a.date);
      if (sortOption === "count") return b.items - a.items;
      return 0;
    });
    setFilteredBooks(sorted);
  }, [sortOption, books]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setShowScrollTop(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const fetchWorkBooks = async () => {
    setIsLoading(true);
    try {
      const data = await searchAllWorkBooks(token);
      const bookArr = data.map(
        ({ encryptedWorkBookId, name, totalQuestion, recentSolvedDate }) => ({
          id: encryptedWorkBookId,
          title: name,
          items: totalQuestion,
          date: recentSolvedDate?.substring(0, 10) || "N/A",
        })
      );
      setBooks(bookArr);
      setFilteredBooks(bookArr);
    } catch (err) {
      console.error("책장 로딩 실패:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearchChange = (e) => {
    const keyword = e.target.value;
    setSearchQuery(keyword);
    setFilteredBooks(
      books.filter((book) =>
        book.title.toLowerCase().includes(keyword.toLowerCase())
      )
    );
  };

  const handleCreateWorkbook = async () => {
    if (!newWorkbookTitle.trim())
      return toast.error("문제집 이름을 입력해주세요.");
    try {
      await createWorkbook(token, newWorkbookTitle.trim());
      toast.success("새 문제집이 추가됐습니다!");
      setCreateModalOpen(false);
      setNewWorkbookTitle("");
      fetchWorkBooks();
    } catch (err) {
      if (
        err?.response?.data?.message?.includes("이미 존재") ||
        err?.message?.includes("already exists")
      ) {
        toast.error("이미 존재하는 문제집입니다.");
      } else {
        toast.error("문제집 생성 실패");
      }
    }
  };

  const handleDelete = async () => {
    if (!token || selectedBookIds.length === 0)
      return toast.warn("삭제할 문제집이 없습니다.");
    try {
      await deleteWorkBooks(token, selectedBookIds);
      toast.success("선택한 문제집이 삭제되었습니다.");
      setIsSelectMode(false);
      setSelectedBookIds([]);
      fetchWorkBooks();
    } catch {
      toast.error("문제집 삭제 중 오류가 발생했습니다.");
    } finally {
      setIsDeleteModalOpen(false);
    }
  };

  const confirmDelete = async () => {
    if (!token || !deleteTarget?.id) return;
    try {
      await deleteWorkBooks(token, [deleteTarget.id]);
      toast.success("문제집이 삭제되었습니다.");
      fetchWorkBooks();
    } catch {
      toast.error("문제집 삭제 중 오류가 발생했습니다.");
    } finally {
      setDeleteTarget(null);
      setIsDeleteModalOpen(false);
    }
  };

  const onClickBook = (book) => {
    if (isSelectMode) {
      setSelectedBookIds((prev) =>
        prev.includes(book.id)
          ? prev.filter((id) => id !== book.id)
          : [...prev, book.id]
      );
    } else {
      router.push({
        pathname: "Workbook",
        query: { workBookId: book.id, title: book.title },
      });
    }
  };

  const handleMoreClick = (book, action) => {
    if (action === "learn") {
      if (book.items === 0) return toast.error("문제집이 비어있습니다!");
      setCurBook({ id: book.id, items: book.items, name: book.title });
      setSequence(1);
      setIsLearningModalOpen(true);
    } else if (action === "rename") {
      setRenameTargetBook(book);
      setRenameModalOpen(true);
    } else if (action === "delete") {
      setDeleteTarget(book);
      setIsDeleteModalOpen(true);
    }
  };

  const onClickLearningStart = async () => {
    if (selectedBookIds.length === 0) return alert("문제집을 선택해주세요.");
    const data = await searchAllWorkBooks(token);
    const selectedBooks = data.filter((b) =>
      selectedBookIds.includes(b.encryptedWorkBookId)
    );
    const total = selectedBooks.reduce((sum, b) => sum + b.totalQuestion, 0);
    const titles = selectedBooks.map((b) => b.name);
    if (total === 0) return alert("선택한 문제집에 문제가 없습니다!");
    await onFetchType(selectedBookIds);
    setCurBook({ id: selectedBookIds, items: total, name: titles });
    setSequence(1);
    setIsLearningModalOpen(true);
  };

  const onFetchType = async (ids) => {
    const total = { multipleChoice: 0, ox: 0, fillInTheBlank: 0 };
    for (const id of ids) {
      const res = await fetchQuestionType(token, id);
      total.multipleChoice += res.multipleChoice;
      total.ox += res.ox;
      total.fillInTheBlank += res.fillInTheBlank;
    }
    setTypeNum(total);
    setCount(total.multipleChoice + total.ox + total.fillInTheBlank);
  };

  const onClickLearning = () => {
    if (!token || !curBook?.id || selectedType.length === 0)
      return alert("잘못된 접근입니다.");
    const typeMap = [
      { type: 0, count: typeNum.multipleChoice },
      { type: 1, count: typeNum.ox },
      { type: 2, count: typeNum.fillInTheBlank },
    ];
    const total = typeMap.reduce(
      (sum, { type, count }) =>
        selectedType.includes(type) ? sum + count : sum,
      0
    );
    const ids = Array.isArray(curBook.id) ? curBook.id : [curBook.id];
    const titles = Array.isArray(curBook.name) ? curBook.name : [curBook.name];
    setSequence(0);
    setCurBook(null);
    setIsLearningModalOpen(false);
    setIsSelectMode(false);
    setSelectedBookIds([]);
    router.push({
      pathname: "/Question",
      query: {
        Id: ids.join(","),
        count: total,
        type: isTest ? 1 : 0,
        random: selectedType.length === 3,
        ox: selectedType.includes(1).toString(),
        multiple: selectedType.includes(0).toString(),
        blank: selectedType.includes(2).toString(),
        title: titles.join(","),
      },
    });
  };

  return (
    <>
      {sequence === 1 && curBook && (
        <BookShelfQuestionLogic
          curBook={curBook}
          count={count}
          setCount={setCount}
          onClickLearning={onClickLearning}
          onClose={() => {
            setSequence(0);
            setCurBook(null);
            setIsLearningModalOpen(false);
            setIsSelectMode(false);
            setSelectedBookIds([]);
          }}
          isTest={isTest}
          setIsTest={setIsTest}
          selectedType={selectedType}
          setSelectedType={setSelectedType}
          typeNum={typeNum}
          onFetchType={() => onFetchType(curBook.id)}
        />
      )}

      <BookShelfUI
        books={filteredBooks}
        isLoading={isLoading}
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        onMoreClick={handleMoreClick}
        onClickBook={onClickBook}
        onClickLearningMode={() => {
          setIsSelectMode((prev) => !prev);
          setSelectedBookIds([]);
        }}
        onClickLearningStart={onClickLearningStart}
        handleDelete={handleDelete}
        isSelectMode={isSelectMode}
        isSmallScreen={isSmallScreen}
        selectedBookIds={selectedBookIds}
        isLearningModalOpen={isLearningModalOpen}
        onOpenCreateModal={() => setCreateModalOpen(true)}
        isCreateModalOpen={isCreateModalOpen}
        newWorkbookTitle={newWorkbookTitle}
        showScrollTop={showScrollTop}
        scrollToTop={scrollToTop}
        setNewWorkbookTitle={setNewWorkbookTitle}
        onCreateWorkbook={handleCreateWorkbook}
        onCloseCreateModal={() => setCreateModalOpen(false)}
        viewType={viewType}
        sortOption={sortOption}
        setSortOption={setSortOption}
        setViewType={(type) => {
          setViewType(type);
          localStorage.setItem("viewType", type);
        }}
        onClickRename={(book) => {
          setRenameTargetBook(book);
          setRenameModalOpen(true);
        }}
        onClickDelete={(book) => {
          if (book) setDeleteTarget(book);
          else if (selectedBookIds.length > 0) setDeleteTarget(null);
          setIsDeleteModalOpen(true);
        }}
      />

      {isRenameModalOpen && (
        <RenameModalLogic
          book={renameTargetBook}
          onClose={() => setRenameModalOpen(false)}
          fetchWorkBooks={fetchWorkBooks}
        />
      )}

      {isDeleteModalOpen && (
        <DeleteWorkbookModalLogic
          onClose={() => setIsDeleteModalOpen(false)}
          onConfirm={() => {
            isSelectMode ? handleDelete() : confirmDelete();
          }}
        />
      )}
    </>
  );
}
