import MainContainerLogic from "@/components/common/MainContainer/MainContainer.Container";
import UploadBoxLogic from "@/components/unit/UploadBox/UploadBox.Container";
import { useState } from "react";
import { Generate__countbutton, Generate__countContainer, Generate__Optname, Generate__submitButton, Generate__subtitle } from "./styles";
import { createQuestion } from "@/utils/QuestionGenerator";
import { useAuth } from "@/utils/AuthContext";
import GenerateShelfLogic from "@/components/unit/GenerateShelf/GenerateShelf.Container";

export default function generatePage(){
    const [file, setFile] = useState(undefined);
    const [QuestionCount,setQuestionCount] = useState(5);
    const [isCreated,setIsCreated] = useState(false);
    const [questionArr, setQuestionArr] = useState(undefined);
    const {token} = useAuth();
    const numArr = token?[5,10,15,20,25,30]:[5];

    return(
    <MainContainerLogic>
        {isCreated && 
          <GenerateShelfLogic
            setIsCreated = {setIsCreated}
            isQuestionArr = {questionArr !== undefined && questionArr.length > 0}
          ></GenerateShelfLogic>
        }
        <UploadBoxLogic
            setFile = {setFile}
            file = {file}
        ></UploadBoxLogic>
        <Generate__subtitle>
            옵션
        </Generate__subtitle>
        <Generate__Optname>
            <div>문제 수</div>
        </Generate__Optname>
        <Generate__countContainer>
        {numArr.map((num,index) => (<Generate__countbutton
            key={index}
            style={QuestionCount === num?{
                backgroundColor: '#3b82f6', color: 'white'
            }:{ 
                backgroundColor: '#e5e7eb', color: 'black'
            }}
            onClick={() => {
                setQuestionCount(num);
            }}
        >
            {num}
            </Generate__countbutton>
        ))}
        </Generate__countContainer>
        <Generate__submitButton
            onClick={() => {createQuestion(file,QuestionCount,token,setIsCreated,setQuestionArr)}}
        >
            생성하기
        </Generate__submitButton>

    </MainContainerLogic>)
}