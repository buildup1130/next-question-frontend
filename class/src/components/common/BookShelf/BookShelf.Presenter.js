import {
  Container,
  Header,
  Title,
  Divider,
  FilterRow,
  FilterGroup,
  FilterSelect,
  FilterActionGroup,
  SearchWrapper,
  StyledSearchInput,
  SearchIcon,
  BookList,
  BookItem,
  BookCheckbox,
  MoreButton,
  OptionPopup,
  OptionItem,
  AddBookArea,
  SelectButton,
  DeleteButton,
  BottomFloatingButton,
  ModalWrapper,
  ModalContent,
  TileGrid,
  TileItem,
  Card,
  CardTop,
  CardBottom,
  CardTitle,
  CardInfo,
  CardActions,
  TileTopRightButton,
  PlusCard,
} from "./BookShelf.Styles";

import { useState } from "react";

export default function BookShelfUI({
  books,
  searchQuery,
  onSearchChange,
  onMoreClick,
  onClickBook,
  onClickLearningMode,
  onClickLearningStart,
  isSelectMode,
  selectedBookIds,
  onOpenCreateModal,
  isCreateModalOpen,
  newWorkbookTitle,
  setNewWorkbookTitle,
  onCreateWorkbook,
  onCloseCreateModal,
  onClickRename,
  onClickDelete,
  viewType,
  setViewType,
  isLearningModalOpen,
  sortOption,
  setSortOption,
}) {
  const [optionOpenId, setOptionOpenId] = useState(null);

  const closeOptionPopup = () => setOptionOpenId(null);

  const renderTileItem = (book) => {
    const isSelected = selectedBookIds.includes(book.id);
    return (
      <TileItem key={book.id} onClick={() => onClickBook(book)}>
        <Card>
          <CardTop>
            📘
            {isSelectMode && !isLearningModalOpen ? (
              <TileTopRightButton onClick={(e) => e.stopPropagation()}>
                <BookCheckbox
                  type="checkbox"
                  checked={isSelected}
                  onChange={() => {}}
                  onClick={(e) => {
                    e.stopPropagation();
                    onClickBook(book);
                  }}
                />
              </TileTopRightButton>
            ) : !isSelectMode && !isLearningModalOpen ? (
              <TileTopRightButton>
                <MoreButton
                  onClick={(e) => {
                    e.stopPropagation();
                    setOptionOpenId(book.id === optionOpenId ? null : book.id);
                  }}
                >
                  ⋮
                </MoreButton>
              </TileTopRightButton>
            ) : null}
          </CardTop>

          <CardBottom>
            <CardTitle>{book.title}</CardTitle>
            <CardInfo>
              {book.items}문제, 최근: {book.date}
            </CardInfo>
            <CardActions>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onClickBook(book);
                }}
              >
                문제보기
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onMoreClick(book, "learn");
                }}
              >
                학습하기
              </button>
            </CardActions>
          </CardBottom>

          {!isSelectMode &&
            optionOpenId === book.id &&
            !isLearningModalOpen && (
              <OptionPopup>
                <OptionItem
                  onClick={(e) => {
                    e.stopPropagation();
                    closeOptionPopup();
                    onMoreClick(book, "learn");
                  }}
                >
                  학습하기
                </OptionItem>
                <OptionItem
                  onClick={(e) => {
                    e.stopPropagation();
                    closeOptionPopup();
                    onClickRename(book);
                  }}
                >
                  수정하기
                </OptionItem>
                <OptionItem
                  onClick={(e) => {
                    e.stopPropagation();
                    closeOptionPopup();
                    onClickDelete(book);
                  }}
                >
                  삭제하기
                </OptionItem>
              </OptionPopup>
            )}
        </Card>
      </TileItem>
    );
  };

  const renderListItem = (book) => {
    const isSelected = selectedBookIds.includes(book.id);
    return (
      <BookItem key={book.id} onClick={() => onClickBook(book)}>
        <div>
          <div>{book.title}</div>
          <div style={{ fontSize: "14px", color: "#666" }}>
            {book.items}문제, 최근 학습일: {book.date}
          </div>
        </div>

        {isSelectMode && !isLearningModalOpen ? (
          <BookCheckbox
            type="checkbox"
            checked={isSelected}
            onChange={() => {}}
            onClick={(e) => {
              e.stopPropagation();
              onClickBook(book);
            }}
          />
        ) : !isSelectMode && !isLearningModalOpen ? (
          <MoreButton
            onClick={(e) => {
              e.stopPropagation();
              setOptionOpenId(book.id === optionOpenId ? null : book.id);
            }}
          >
            ⋮
          </MoreButton>
        ) : null}

        {!isSelectMode && optionOpenId === book.id && !isLearningModalOpen && (
          <OptionPopup>
            <OptionItem
              onClick={(e) => {
                e.stopPropagation();
                closeOptionPopup();
                onMoreClick(book, "learn");
              }}
            >
              학습하기
            </OptionItem>
            <OptionItem
              onClick={(e) => {
                e.stopPropagation();
                closeOptionPopup();
                onClickRename(book);
              }}
            >
              수정하기
            </OptionItem>
            <OptionItem
              onClick={(e) => {
                e.stopPropagation();
                closeOptionPopup();
                onClickDelete(book);
              }}
            >
              삭제하기
            </OptionItem>
          </OptionPopup>
        )}
      </BookItem>
    );
  };

  return (
    <Container>
      <Header>
        <Title>책장</Title>
      </Header>
      <Divider />

      <SearchWrapper>
        <SearchIcon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M10 2a8 8 0 015.293 13.707l5 5a1 1 0 01-1.414 1.414l-5-5A8 8 0 1110 2zm0 2a6 6 0 100 12A6 6 0 0010 4z" />
          </svg>
        </SearchIcon>
        <StyledSearchInput
          value={searchQuery}
          onChange={onSearchChange}
          placeholder="검색어를 입력하세요"
        />
      </SearchWrapper>

      <FilterRow>
        <FilterGroup>
          <FilterSelect
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="name">이름</option>
            <option value="created">등록순</option>
            <option value="count">문제 수</option>
          </FilterSelect>

          <FilterSelect
            value={viewType}
            onChange={(e) => setViewType(e.target.value)}
          >
            <option value="list">리스트형</option>
            <option value="tile">타일형</option>
          </FilterSelect>
        </FilterGroup>

        <FilterActionGroup>
          {isSelectMode && (
            <DeleteButton
              disabled={selectedBookIds.length === 0}
              onClick={onClickDelete}
            >
              문제집 삭제
            </DeleteButton>
          )}
          <SelectButton onClick={onClickLearningMode}>
            {isSelectMode ? "선택 취소" : "선택"}
          </SelectButton>
        </FilterActionGroup>
      </FilterRow>

      {viewType === "list" ? (
        <>
          <BookList>{books.map(renderListItem)}</BookList>
          <AddBookArea onClick={onOpenCreateModal}>＋</AddBookArea>
        </>
      ) : (
        <>
          <TileGrid>
            {books.map(renderTileItem)}
            <TileItem onClick={onOpenCreateModal}>
              <PlusCard>＋</PlusCard>
            </TileItem>
          </TileGrid>
        </>
      )}

      {isCreateModalOpen && (
        <ModalWrapper onClick={onCloseCreateModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <h3>문제집 생성</h3>
            <input
              value={newWorkbookTitle}
              onChange={(e) => setNewWorkbookTitle(e.target.value)}
              placeholder="문제집 이름을 입력하세요"
            />
            <button onClick={onCreateWorkbook}>생성하기</button>
            <button onClick={onCloseCreateModal}>취소</button>
          </ModalContent>
        </ModalWrapper>
      )}

      {isSelectMode && selectedBookIds.length > 0 && (
        <BottomFloatingButton onClick={onClickLearningStart}>
          {selectedBookIds.length}개 과목 학습하기
        </BottomFloatingButton>
      )}
    </Container>
  );
}
