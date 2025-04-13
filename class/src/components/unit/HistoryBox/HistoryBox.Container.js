import { useState } from "react";
import HistoryBoxUI from "./HistoryBox.Presenter";

export default function HistoryBoxLogic({data}){
    const [visible,setVisible] = useState(false);

    const onClickOpen = () => {
        if(visible){
            setVisible(false);
        }else{
            setVisible(true);
        }
    }
    console.log(data);
    return(
    <HistoryBoxUI
        data = {data}
        visible = {visible}
        onClickOpen = {onClickOpen}
    ></HistoryBoxUI>)
}