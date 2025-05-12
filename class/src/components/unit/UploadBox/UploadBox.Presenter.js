import { useState } from "react";
import {
  CurrentFilename,
  HiddenForm,
  UploadBox__UploadButton,
  UploadContainer,
  UploadContainer__text,
} from "./UploadBox.Styles";
import { keyframes } from "styled-components";
import styled from "styled-components";

export default function UploadBoxUI(props) {
  const [isHover, setIsHover] = useState(false);
  const draw = keyframes`
    to{stroke-dashoffset:0;}
  `
  const AnimatedPath = styled.path`
  stroke-dasharray: 50;
  stroke-dashoffset: 50;
  animation: ${draw} 1s ease-in-out forwards;
`;

  return (
    <>
      <UploadContainer as="label" htmlFor="hiddenForm"
        onMouseOver={() => {
          setIsHover(true);
        }}
        onMouseOut={() => {
          setIsHover(false);
        }}
      >
    {props.file?
    <>
    <svg
      width="64"
      height="64"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.55156 18.0001L3.85156 12.3001L5.27656 10.8751L9.55156 15.1501L18.7266 5.9751L20.1516 7.4001L9.55156 18.0001Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
    </svg>
      <UploadContainer__text>
          파일이 업로드되었습니다.
      </UploadContainer__text>
    </>:
      <>
      <svg viewBox="0 0 80 80" width="54px" height= "70px"
      xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M15,5 L55,5 L65,15 L65,75 L15,75 Z" 
              fill="none" 
              stroke="#999999" 
              strokeWidth="4"/>
        <path d="M55,5 L55,15 L65,15" 
              fill="none" 
              stroke="#999999" 
              strokeWidth="4"/>
        <path 
              d="M40,60 L40,30 M30,40 L40,30 L50,40"
              fill="none" 
              stroke="#999999" 
              strokeWidth="4" 
              strokeLinecap="round" 
              strokeLinejoin="round">
          {isHover && (
            <animate 
              attributeName="d" 
              values="M40,60 L40,30 M30,40 L40,30 L50,40;
                     M40,50 L40,20 M30,30 L40,20 L50,30;"
              dur="0.8s" 
              repeatCount="indefinite"
            />
          )}
        </path>
      </svg>
        <UploadContainer__text>
          문제 생성을 위한 문서를 업로드해주세요.
        </UploadContainer__text>
        </>
      }

        <CurrentFilename>{props.file?.name}</CurrentFilename>
      </UploadContainer>
      <UploadBox__UploadButton
        onClick={() =>{
          if(props.file){
          props.setIsCreated(true);
          console.log(props.file)
          }
        }}
      >
        <img src = "image/LightIcon.png"></img>
        문제 생성하기
      </UploadBox__UploadButton>
      
      <HiddenForm
        type="file"
        id="hiddenForm"
        onChange={props.onChangeFile}
      ></HiddenForm>
      
    </>
  );
}
