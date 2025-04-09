import { useRouter } from "next/router";
import QuestionSolveUI from "./QuestionSolve.Presenter";
import { useState,useEffect } from "react";
import { useAuth } from "@/utils/AuthContext";
import { loadDailyQuestion, loadNormalQuestion } from "@/utils/WorkbookManager";

export default function QuestionSolveLogic(props){
    const [questions, setQuestions] = useState([]);
    // const [count,setCount] = useState(0);
    // const [isTest,setIsTest] = useState(true);
    // const [workBookId, setWorkBookId] = useState(undefined);

    const router = useRouter();
    const {token} = useAuth();
    //type {0: 일반, 1: 모의고사, 2: 데일리 문제}
    const {Id,count,random,ox,multiple,blank,type} = router.query;

    useEffect(() => {
        if(token){
        // workBookId가 있을 때만 API 호출
        console.log(Id);
        if (Id) {
          loadNormalQuestion(token, Id, {
            count: count || 5,
            random: random?true:false,
            ox: ox?true:false,
            multiple: multiple?true:false,
            blank: blank?true:false
          }).then(result => {
            if (result) {
              // 필요한 데이터 변환 처리
              const processedQuestions = handleQuestions(result);
              setQuestions(processedQuestions);
            //   setIsTest(type === 1?true:0);
            }
          });
        }
        else{
            loadDailyQuestion(token)
            .then((result) =>{
                const processedQuestions = handleQuestions(result);
                setQuestions(processedQuestions);
                // setIsTest(1);
            })
        }
    }  
        else{
            //토큰이 없음을 명시
            console.log("토큰이 없음");
        }
      console.log(`작동함 ${questions}`)
      }, [Id, token, count, random, ox, multiple, blank]);

    const handleQuestions = (questions) => {    
        // questions가 undefined나 null인 경우 빈 배열 반환
        if (!questions) {
            console.error("Questions data is undefined or null");
            return [];
        }

        // questions가 배열이 아닌 경우 처리
        if (!Array.isArray(questions)) {
            console.error("Questions data is not an array:", questions);
            return [];
        }


        const processedQuestions = questions.map(data => {
            const newData = {...data};
            // OX 정답 처리
            if (newData.answer === 'O') {
              newData.answer = '0';
            } else if (newData.answer === 'X') {
              newData.answer = '1';
            }
            
            // 빈칸 처리
            if (newData.type === 'FILL_IN_THE_BLANK') {
              newData.name = newData.name.replace('{BLANK}', 'OOO');
            }
            return newData;
          });
          return processedQuestions;
        }



    // //LocalStorage사용 방식
    // useEffect(() => {
    //     const storedData = localStorage.getItem('tempQuestionData');
    //     if (storedData && storedData!== undefined) {
    //       const questionData = JSON.parse(storedData);
    //       setQuestions(questionData); // 질문 데이터 설정
    //       setCount(questionData.length);// 문제 개수 설정

    //       console.dir(questionData);
    //        // 사용 후 삭제
    //     //   localStorage.removeItem('tempQuestionData');

    //     }
    //     const tmpTest = localStorage.getItem('isTest');
    //     if(tmpTest && tmpTest !== undefined){
    //         setIsTest(JSON.parse(tmpTest));
    //     }
    //     const tmpWorkBookId = localStorage.getItem('workBookId');
    //     if(tmpWorkBookId && tmpWorkBookId!== undefined){
    //         setWorkBookId(tmpWorkBookId);
    //     }

    //   }, []);
      
    return(
        <QuestionSolveUI
            questions = {questions}
            // isTest = {isTest}
            type = {Number(type)}
            workBookId = {Id}
        ></QuestionSolveUI>
    );
}