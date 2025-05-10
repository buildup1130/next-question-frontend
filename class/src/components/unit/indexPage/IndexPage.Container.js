import IndexPageUI from "./IndexPage.Presenter";
import { useRouter } from "next/router";
import { useAuth } from "@/utils/AuthContext";
import { useState, useEffect } from "react";
import { createQuestion } from "@/utils/QuestionGenerator";
import { fetchCheck, fetchMainStat } from "@/utils/StatisticManager";

export default function IndexPageLogic() {
  const router = useRouter();
  const { user, token, isAuthenticated,logout } = useAuth();

  //회원일 경우 30문제, 비회원일 경우 5문제 출제
  const numArr = token ? [5, 10, 15, 20, 25, 30] : [5];

  //문제 생성 관련 State
  const [file, setFile] = useState(undefined);
  const [isCreated, setIsCreated] = useState(false);
 
  //출석체크 관련 State
  const [checkArr,setCheckArr] = useState([]);

  //차트 관련 State
  const [chartArr, setChartArr] = useState([])

  const onClickLogin = () => {
    if(isAuthenticated){
      logout();
    }else{
      router.push("/Login");
    }
  };

  useEffect(
    () => {
      if(isAuthenticated){
        const response = fetchCheck(token).then(response => {  
          setCheckArr(response);
        });
        const mainStatResponse = fetchMainStat(token).then(response => {
          const dayArr = []; 
          const totalArr = [];
          const correctArr = []; 
          response?.map((data,index) =>{
            dayArr.push(data.day);
            totalArr.push(data.total);
            correctArr.push(data.correct);
          });
          setChartArr({day: dayArr,total: totalArr,correct: correctArr});
          console.log(chartArr);
        });
      }
    },[token]
  );

  // //비회원일 경우 문제 생성 후 페이지 이동
  // useEffect(() => {
  //   if (isCreated && !isAuthenticated && questionArr?.length > 0) {
  //     // 로컬 스토리지에 데이터 저장
  //     localStorage.setItem("tempQuestionData", JSON.stringify(questionArr));

  //     // Question 페이지로 이동
  //     router.push({
  //       pathname: "/Question",
  //       query: {
  //         type: 4,
  //       },
  //     });
  //   }
  // }, [isCreated, isAuthenticated, questionArr, router]);

  return (
    <IndexPageUI
      onClickLogin={onClickLogin}
      user={user}
      isAuthenticated={isAuthenticated}
      isCreated={isCreated}
      setIsCreated={setIsCreated}
      file={file}
      setFile={setFile}
      numArr={numArr}
      checkArr = {checkArr}
      chartArr = {chartArr}
    ></IndexPageUI>
  );
}
