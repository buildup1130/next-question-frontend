import { useEffect, useState } from "react";
import BookShelfQuestionUI from "./BookShelfQuestion.Presenter";
import { fetchQuestionType } from "@/utils/WorkbookManager";
import { useAuth } from "@/utils/AuthContext";

export default function BookShelfQuestionLogic(props) {
  const { token } = useAuth();

  // 문제 수를 모달 열 때 최대값으로 초기화
  useEffect(() => {
    if (props.curBook?.items) {
      props.setCount(props.curBook.items);
      console.log(props.curBook);
      props.onFetchType(props.curBook?.id);
    }
  }, [props.curBook]);

  const handleChange = (e) => {
    const inputValue = e.target.value;

    if (inputValue === "") {
      props.setCount("");
      return;
    }

    const newValue = parseInt(inputValue);
    if (newValue <= 0) {
      props.setCount(1);
    } else if (newValue > props.curBook.items) {
      props.setCount(props.curBook.items);
    } else {
      props.setCount(newValue);
    }
  };

  //0: 객관식 , 1: 참/거짓, 2:주관식
  const onClickType = (type) => {
    const index = props.selectedType.indexOf(type);
    if (index !== -1) {
      const newSelectedType = [...props.selectedType];
      newSelectedType.splice(index, 1);
      props.setSelectedType(newSelectedType);
    } else {
      props.setSelectedType([...props.selectedType, type]);
    }
    console.log(props.selectedType);
  };

  return (
    <BookShelfQuestionUI
      curBook={props.curBook}
      count={props.count}
      setCount={props.setCount}
      handleChange={handleChange}
      onClickLearning={props.onClickLearning}
      onClose={props.onClose}
      setIsTest={props.setIsTest}
      isTest={props.isTest}
      typeNum={props.typeNum}
      onClickType={onClickType}
      selectedType={props.selectedType}
    />
  );
}
