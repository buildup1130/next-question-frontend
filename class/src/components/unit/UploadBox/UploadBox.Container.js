import UploadBoxUI from "./UploadBox.Presenter";

export default function UploadBoxLogic(props){

    const onChangeFile = (e) => {
        const selectedFile = e.target.files[0];
        props.setFile(selectedFile);
        console.log(props.file);
    }

    return(
        <UploadBoxUI
        file = {props.file}
        onChangeFile = {onChangeFile}
        ></UploadBoxUI>
    )
}