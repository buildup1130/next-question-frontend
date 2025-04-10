import MainContainerLogic from "@/components/common/MainContainer/MainContainer.Container";
import UploadBoxLogic from "@/components/unit/UploadBox/UploadBox.Container";
import { useEffect, useState } from "react";
import {
  Generate__countbutton,
  Generate__countContainer,
  Generate__Optname,
  Generate__submitButton,
  Generate__subtitle,
} from "./styles";
import { createQuestion } from "@/utils/QuestionGenerator";
import { useAuth } from "@/utils/AuthContext";
import GenerateShelfLogic from "@/components/unit/GenerateShelf/GenerateShelf.Container";
import { useRouter } from "next/router";

export default function generatePage() {
  const [file, setFile] = useState(undefined);
  const [QuestionCount, setQuestionCount] = useState(5);
  const [isCreated, setIsCreated] = useState(false);
  const [questionArr, setQuestionArr] = useState(undefined);
  const [questionInfoArr, setQuestionInfoArr] = useState(undefined);

  const { token, isAuthenticated } = useAuth();
  const router = useRouter();
  const numArr = token ? [5, 10, 15, 20, 25, 30] : [5];

  //비회원일 경우 문제 생성 후 페이지 이동
  useEffect(() => {
    if (isCreated && !isAuthenticated && questionArr?.length > 0) {
      // 로컬 스토리지에 데이터 저장
      localStorage.setItem("tempQuestionData", JSON.stringify(questionArr));

      // Question 페이지로 이동
      router.push({
        pathname: "/Question",
        query: {
          type: 4,
        },
      });
    }
  }, [isCreated, isAuthenticated, questionArr, router]);

  return (
    <MainContainerLogic>
      {isCreated && (
        <GenerateShelfLogic
          setIsCreated={setIsCreated}
          isQuestionArr={questionArr !== undefined && questionArr.length > 0}
          questionArr={questionArr}
          questionInfoArr={questionInfoArr}
        ></GenerateShelfLogic>
      )}
      <UploadBoxLogic setFile={setFile} file={file}></UploadBoxLogic>
      <Generate__subtitle>옵션</Generate__subtitle>
      <Generate__Optname>
        <div>문제 수</div>
      </Generate__Optname>
      <Generate__countContainer>
        {numArr.map((num, index) => (
          <Generate__countbutton
            key={index}
            style={
              QuestionCount === num
                ? {
                    backgroundColor: "#3b82f6",
                    color: "white",
                  }
                : {
                    backgroundColor: "#e5e7eb",
                    color: "black",
                  }
            }
            onClick={() => {
              setQuestionCount(num);
            }}
          >
            {num}
          </Generate__countbutton>
        ))}
      </Generate__countContainer>
      <Generate__submitButton
        onClick={() => {
          const response = createQuestion(
            file,
            QuestionCount,
            token
          ).then(
            (result) =>{
              setQuestionArr(result.questionArr);
              setQuestionInfoArr(result.questionInfoArr);
              setIsCreated(true);
              console.log(`${result.questionArr} ${result.questionInfoArr}`)
            }
          );
        }}
      >
        생성하기
      </Generate__submitButton>
    </MainContainerLogic>
  );
}
