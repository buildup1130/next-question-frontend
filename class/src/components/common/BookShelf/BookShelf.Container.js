// ✅ BookShelf.Container.js
import { useState, useEffect } from "react";
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
import { useRouter } from "next/router";

export default function BookShelfLogic() {
  const [searchQuery, setSearchQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [count, setCount] = useState(1);
  const [curBook, setCurBook] = useState(null);
  const [sequence, setSequence] = useState(0);
  const [isRenameModalOpen, setRenameModalOpen] = useState(false);
  const [renameTargetBook, setRenameTargetBook] = useState(null);
  const [isTest, setIsTest] = useState(false);
  const [isCreateModalOpen, setCreateModalOpen] = useState(false);
  const [newWorkbookTitle, setNewWorkbookTitle] = useState("");
  const [isSelectMode, setIsSelectMode] = useState(false);
  const [selectedBookIds, setSelectedBookIds] = useState([]);
  const [selectedType, setSelectedType] = useState([0, 1, 2]);
  const [typeNum, setTypeNum] = useState({});
  const [isLearningModalOpen, setIsLearningModalOpen] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [sortOption, setSortOption] = useState("name");

  const { token } = useAuth();
  const router = useRouter();

  const [viewType, setViewType] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("viewType") || "list";
    }
    return "list";
  });

  const handleViewTypeChange = (type) => {
    setViewType(type);
    localStorage.setItem("viewType", type);
  };

  useEffect(() => {
    if (token) fetchWorkBooks();
  }, [token, router.asPath]);

  useEffect(() => {
    let sorted = [...books];
    if (sortOption === "name") {
      sorted.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOption === "created") {
      sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortOption === "count") {
      sorted.sort((a, b) => b.items - a.items);
    }
    setFilteredBooks(sorted);
  }, [sortOption, books]);

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

  const handleSearchChange = (e) => {
    const keyword = e.target.value;
    setSearchQuery(keyword);
    const result = books.filter((book) =>
      book.title.toLowerCase().includes(keyword.toLowerCase())
    );
    setFilteredBooks(result);
  };

  const handleDelete = async () => {
    if (!token) return;

    const validIds = selectedBookIds.filter((id) => !!id);
    if (validIds.length === 0) {
      toast.warn("삭제할 문제집이 없습니다.");
      return;
    }

    try {
      await deleteWorkBooks(token, validIds);
      await fetchWorkBooks();
      setSelectedBookIds([]);
      setIsSelectMode(false);
      toast.success("선택한 문제집이 삭제되었습니다.");
    } catch (err) {
      toast.error("문제집 삭제 중 오류가 발생했습니다.");
    }
  };

  const openDeleteModal = (book) => {
    setDeleteTarget(book);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = async () => {
    if (!token || !deleteTarget || !deleteTarget.id) return;

    try {
      await deleteWorkBooks(token, [deleteTarget.id]);
      await fetchWorkBooks();
      toast.success("문제집이 삭제되었습니다.");
    } catch {
      toast.error("문제집 삭제 중 오류가 발생했습니다.");
    } finally {
      setIsDeleteModalOpen(false);
      setDeleteTarget(null);
    }
  };

  const handleCreateWorkbook = async () => {
    if (!newWorkbookTitle.trim()) {
      toast.error("문제집 이름을 입력해주세요.");
      return;
    }

    try {
      await createWorkbook(token, newWorkbookTitle.trim());
      toast.success("새 문제집이 추가됐습니다!");
      setCreateModalOpen(false);
      setNewWorkbookTitle("");
      await fetchWorkBooks();
    } catch (err) {
      if (
        err?.response?.data?.message?.includes("이미 존재") || // 백엔드 메시지 기반
        err?.message?.includes("already exists")
      ) {
        toast.error("이미 존재하는 문제집입니다.");
      } else {
        toast.error("문제집 생성 실패");
      }
    }
  };

  const handleMoreClick = (book, action) => {
    if (action === "learn") {
      if (book.items === 0) {
        alert("문제집이 비어있습니다!");
        return;
      }
      setCurBook({ id: book.id, items: book.items, name: book.title });
      setSequence(1);
      setIsLearningModalOpen(true);
    } else if (action === "rename") {
      setRenameTargetBook(book);
      setRenameModalOpen(true);
    } else if (action === "delete") {
      openDeleteModal(book);
    }
  };

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
        count: queCount,
        type: isTest ? 1 : 0,
        random: selectedType.length === 3 ? true : false,
        ox: selectedType.includes(1) ? "true" : "false",
        multiple: selectedType.includes(0) ? "true" : "false",
        blank: selectedType.includes(2) ? "true" : "false",
        title: titles.join(","),
      },
    });
  };

  const onFetchType = async (ids) => {
    let total = {
      multipleChoice: 0,
      ox: 0,
      fillInTheBlank: 0,
    };

    for (const id of Array.isArray(ids) ? ids : [ids]) {
      const res = await fetchQuestionType(token, id);
      total.multipleChoice += res.multipleChoice;
      total.ox += res.ox;
      total.fillInTheBlank += res.fillInTheBlank;
    }

    const totalCount = total.multipleChoice + total.ox + total.fillInTheBlank;

    setTypeNum(total);
    setCount(totalCount);
  };

  const handleStartLearning = async () => {
    if (selectedBookIds.length === 0) return alert("문제집을 선택해주세요.");

    const response = await searchAllWorkBooks(token);
    const bookArr = response.map((data) => ({
      id: data.encryptedWorkBookId,
      title: data.name,
      items: data.totalQuestion,
      date: data.recentSolvedDate?.substring(0, 10) || "N/A",
    }));

    setBooks(bookArr);
    console.log(bookArr);

    const selectedBooks = bookArr.filter((book) =>
      selectedBookIds.includes(book.id)
    );

    const totalQuestions = selectedBooks.reduce(
      (acc, cur) => acc + cur.items,
      0
    );

    const selectedTitles = [];
    selectedBooks.map((data, index) => {
      selectedTitles.push(data.title);
    });

    console.log(selectedTitles);

    if (totalQuestions === 0) {
      alert("선택한 문제집에 문제가 없습니다!");
      return;
    }

    await onFetchType(selectedBookIds);

    setCurBook({
      id: selectedBookIds,
      items: totalQuestions,
      name: selectedTitles,
    });
    setSequence(1);
    setIsLearningModalOpen(true);
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
            setIsSelectMode(false);
            setSelectedBookIds([]);
            setIsLearningModalOpen(false);
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
        onSearch={() => {}}
        onMoreClick={handleMoreClick}
        onClickBook={onClickBook}
        onClickLearningMode={onClickLearningMode}
        onClickLearningStart={handleStartLearning}
        handleDelete={handleDelete}
        isSelectMode={isSelectMode}
        selectedBookIds={selectedBookIds}
        isLearningModalOpen={isLearningModalOpen}
        onOpenCreateModal={() => setCreateModalOpen(true)}
        isCreateModalOpen={isCreateModalOpen}
        newWorkbookTitle={newWorkbookTitle}
        setNewWorkbookTitle={setNewWorkbookTitle}
        onCreateWorkbook={handleCreateWorkbook}
        onCloseCreateModal={() => setCreateModalOpen(false)}
        viewType={viewType}
        sortOption={sortOption}
        setSortOption={setSortOption}
        setViewType={handleViewTypeChange}
        onClickRename={(book) => {
          setRenameTargetBook(book);
          setRenameModalOpen(true);
        }}
        onClickDelete={(book) => {
          if (book) {
            setDeleteTarget(book);
          } else if (selectedBookIds.length > 0) {
            setDeleteTarget(null);
          }
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
            if (isSelectMode) {
              handleDelete();
            } else {
              confirmDelete();
            }
          }}
        />
      )}
    </>
  );
}
