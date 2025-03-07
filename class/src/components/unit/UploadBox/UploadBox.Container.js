import UploadBoxUI from "./UploadBox.Presenter";
import { useState } from "react";

export default function UploadBoxLogic(){
    const [file, setFile] = useState(undefined)

    return(
        <UploadBoxUI
        file = {file}
        setFile = {setFile}
        ></UploadBoxUI>
    )
}