import { useState } from "react";
import BookShelfQuestionUI from "./BookShelfQuestion.Presenter";
import axios from "axios";
import { loadNormalQuestion } from "@/utils/WorkbookManager";

export default function BookShelfQuestionLogic(props) {
  const handleChange = (e) => {
    const inputValue = e.target.value;

    if (inputValue === "") {
      // 입력값이 숫자가 아닌 경우
      props.setCount("");
      return;
    }

    const newValue = parseInt(inputValue);
    if (newValue <= 0) {
      // 0 이하인 경우
      props.setCount(1); // 최소값을 1로 설정
    } else if (newValue > props.curBook.items) {
      // 최대값을 초과하는 경우
      props.setCount(props.curBook.items);
    } else {
      // 유효한 범위인 경우
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
    ></BookShelfQuestionUI>
  );
}
