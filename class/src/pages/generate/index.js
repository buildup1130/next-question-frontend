import MainContainerLogic from "@/components/common/MainContainer/MainContainer.Container";
import UploadBoxLogic from "@/components/unit/UploadBox/UploadBox.Container";
import { useState } from "react";
import { Generate__countbutton, Generate__countContainer, Generate__Optname, Generate__submitButton, Generate__subtitle } from "./styles";

export default function generatePage(){
    const [file, setFile] = useState(undefined)
    const [QuestionCount,setQuestionCount] = useState(5);

    const numArr = [5,10,15,20,25,30].map

    return(
    <MainContainerLogic>
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
        {[5,10,15,20,25,30].map((num,index) => (<Generate__countbutton
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
        <Generate__submitButton>
            생성하기
        </Generate__submitButton>

    </MainContainerLogic>)
}