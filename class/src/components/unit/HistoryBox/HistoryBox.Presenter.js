import { HistoryBox__TitleContainer, HistoryBox__Wrapper,HistoryBox__InfoContainer,HistoryBox__QuestionContainer,HistoryBox__QuestionType,HistoryBox__QuestionTitle,HistoryBox__QuestionWrapper,HistoryBox__QuestionAnswer,HistoryBox__QuestionOption,HistoryBox__downButton, HistoryBox__TitleLeft } from "./HistoryBox.Styles";
import { DownIcon } from "@/utils/SvgProvider";
export default function HistoryBoxUI({data,visible,onClickOpen}){
    const date = data.solvedDate.split('T')[0]

    return(
    <HistoryBox__Wrapper>
    <HistoryBox__TitleContainer>
        <HistoryBox__TitleLeft>
        <HistoryBox__QuestionTitle>{date}</HistoryBox__QuestionTitle>
        <div>{data.solvedType === "MOCK"?"모의고사":"일반 문제"}</div>
        </HistoryBox__TitleLeft>   
        <HistoryBox__downButton
            onClick={onClickOpen}
        >
            <DownIcon></DownIcon>
        </HistoryBox__downButton>
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
                                <HistoryBox__QuestionTitle
                                    style={{color:info.wrong?"red":"green"}}
                                >{info.wrong?"오답":"정답"}</HistoryBox__QuestionTitle>
                                <HistoryBox__QuestionTitle>{index+1}. {info.name.replace("{BLANK}","OOO")}</HistoryBox__QuestionTitle>
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