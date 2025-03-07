import { CurrentFilename, HiddenForm, UploadContainer,UploadContainer__text } from "./UploadBox.Styles";

export default function UploadBoxUI(props){

    return(
    <>
    <UploadContainer as ="label" htmlFor = "hiddenForm">
        <UploadContainer__text>파일 업로드</UploadContainer__text>
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 5L7 10H10V16H14V10H17L12 5Z" fill="currentColor" />
        <rect x="4" y="18" width="16" height="2" rx="1" fill="currentColor" />
        </svg>
    </UploadContainer>
    <CurrentFilename>현재 파일: {props.file?.name}</CurrentFilename>
    <HiddenForm
        type = "file"
        id = "hiddenForm"
        onChange={props.onChangeFile}
    ></HiddenForm>
    </>
    )
}