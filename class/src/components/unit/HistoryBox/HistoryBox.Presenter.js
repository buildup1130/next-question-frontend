import { HistoryBox__TitleContainer, HistoryBox__Wrapper,HistoryBox__InfoContainer,HistoryBox__QuestionContainer,HistoryBox__QuestionType,HistoryBox__QuestionTitle,HistoryBox__QuestionWrapper,HistoryBox__QuestionAnswer,HistoryBox__QuestionOption, } from "./HistoryBox.Styles";

export default function HistoryBoxUI({data,visible,onClickOpen}){
    const date = data.solvedDate.split('T')[0]

    return(
    <HistoryBox__Wrapper>
    <HistoryBox__TitleContainer>
        <div>{date}</div>
        <div>{data.solvedType === "MOCK"?"모의고사":"일반 문제"}</div>
        <button
            onClick={onClickOpen}
        >!</button>
    </HistoryBox__TitleContainer>
    <HistoryBox__InfoContainer
        $visible = {visible}
    >
            <HistoryBox__QuestionWrapper>
                {data.questionInfos.map(
                    (info,index) => {
                        const optArr = info.opt?info.opt.split("/"):[];
                        return(
                        <HistoryBox__QuestionContainer
                            key = {index}>
                                <HistoryBox__QuestionTitle>Q{index+1}</HistoryBox__QuestionTitle>
                                <HistoryBox__QuestionTitle>{info.name.replace("{BLANK}","OOO")}</HistoryBox__QuestionTitle>
                                <HistoryBox__QuestionType>문제 유형: {info.type === "MULTIPLE_CHOICE"? "객관식": info.type === "FILL_IN_THE_BLANK"? "빈칸" : "O/X"}</HistoryBox__QuestionType>
                                    {
                                    info.type==="MULTIPLE_CHOICE"&&
                                    optArr.map((info,index) =>(
                                   <HistoryBox__QuestionOption>
                                        {info}
                                    </HistoryBox__QuestionOption>
                                    ))
                                    }
                                <HistoryBox__QuestionAnswer>정답: {info.answer}</HistoryBox__QuestionAnswer>
                                </HistoryBox__QuestionContainer>
                                );
                        }
                    )}
            </HistoryBox__QuestionWrapper>
    </HistoryBox__InfoContainer>
    </HistoryBox__Wrapper>
    );
}