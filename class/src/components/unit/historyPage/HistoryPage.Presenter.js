import MainContainerLogic from "@/components/common/MainContainer/MainContainer.Container";
import { History__Header,History__BackButton,History__Plus,History__Title, History__Container } from "./HistoryPage.Styles";
import HistoryBoxLogic from "../HistoryBox/HistoryBox.Container";

export default function HistoryPageUI({
    onClickBack,
    histories
}){
    console.log(histories);
    
    return(
        <MainContainerLogic>
            <History__Header>
                <History__BackButton onClick={onClickBack}>←</History__BackButton>
                <History__Title>학습 기록</History__Title>
            </History__Header>
            <History__Container>
                {histories?.map((data,index) =>(
                    <HistoryBoxLogic
                        data = {data}
                    ></HistoryBoxLogic>
                ))}
            </History__Container>
        </MainContainerLogic>
    )
}