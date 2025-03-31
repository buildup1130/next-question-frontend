import QuestionSolveUI from "./QuestionSolve.Presenter";
import { useState,useEffect } from "react";

export default function QuestionSolveLogic(props){
    const [questions, setQuestions] = useState([]);
    const [count,setCount] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [wrongCount, setWrongCount] = useState(0);
    const [isTest,setIsTest] = useState(false);

    useEffect(() => {
        const storedData = localStorage.getItem('tempQuestionData');
        if (storedData && storedData!== undefined) {
          const questionData = JSON.parse(storedData);
          setQuestions(questionData); // 질문 데이터 설정
          setCount(questionData.length);// 문제 개수 설정

          console.dir(questionData);
           // 사용 후 삭제
        //   localStorage.removeItem('tempQuestionData');

        const tmpTest = localStorage.getItem('isTest');
        if(tmpTest && tmpTest !== undefined){
            setIsTest(JSON.parse(tmpTest));
        }
        }
      }, []);

    return(
        <QuestionSolveUI
            questions = {questions}
            isTest = {isTest}
        ></QuestionSolveUI>
    );
}