import MainContainerLogic from "@/components/common/MainContainer/MainContainer.Container";
import { History__Header,History__BackButton,History__Plus,History__Title } from "./HistoryPage.Styles";

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
        </MainContainerLogic>
    )
}