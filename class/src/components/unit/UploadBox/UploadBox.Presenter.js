import { CurrentFilename, HiddenForm, UploadContainer } from "./UploadBox.Styles";

export default function UploadBoxUI(props){

    return(
    <>
    <UploadContainer as ="label" htmlFor = "hiddenForm">
        123
    </UploadContainer>
    <CurrentFilename>{props.file}</CurrentFilename>
    <HiddenForm
        type = "file"
        id = "hiddenForm"
    ></HiddenForm>
    </>
    )
}