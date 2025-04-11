import {
  CurrentFilename,
  HiddenForm,
  UploadBox__UploadButton,
  UploadContainer,
  UploadContainer__text,
} from "./UploadBox.Styles";

export default function UploadBoxUI(props) {
  return (
    <>
      <UploadContainer as="label" htmlFor="hiddenForm">
      <svg viewBox="0 0 80 80" width="54px" height= "70px"
      xmlns="http://www.w3.org/2000/svg">
        <path d="M15,5 L55,5 L65,15 L65,75 L15,75 Z" 
              fill="none" 
              stroke="#999999" 
              strokeWidth="4"/>
        <path d="M55,5 L55,15 L65,15" 
              fill="none" 
              stroke="#999999" 
              strokeWidth="4"/>
        <path d="M40,60 L40,30 M30,40 L40,30 L50,40" 
              fill="none" 
              stroke="#999999" 
              strokeWidth="4" 
              strokeLinecap="round" 
              strokeLinejoin="round"/>
      </svg>
        <UploadContainer__text>
          문제 생성을 위한 문서를 업로드해주세요.
        </UploadContainer__text>
        <CurrentFilename>{props.file?.name}</CurrentFilename>
      </UploadContainer>
      <UploadBox__UploadButton
        onClick={() =>{
          props.setIsCreated(true);
          console.log(props.file)
        }}
      >문제 생성하기</UploadBox__UploadButton>
      
      <HiddenForm
        type="file"
        id="hiddenForm"
        onChange={props.onChangeFile}
      ></HiddenForm>
      
    </>
  );
}
