import { useEffect, useState } from "react";
import BookShelfQuestionUI from "./BookShelfQuestion.Presenter";
import axios from "axios";
import { loadNormalQuestion } from "@/utils/WorkbookManager";

export default function BookShelfQuestionLogic(props) {
  // ✅ 문제 수를 모달 열 때 최대값으로 초기화
  useEffect(() => {
    if (props.curBook?.items) {
      props.setCount(props.curBook.items);
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
    />
  );
}
