import { RefreshIcon } from "@/utils/SvgProvider";
import { GenerateShelf__Container, GenerateShelf__Shelf, GenerateShelf__Shelf__Container, GenerateShelf__Shelf__Input, GenerateShelf__Shelf__Input__Button, GenerateShelf__Shelf__Input__Container, GenerateShelf__Shelf__QuestionContainer, GenerateShelf__Shelf__QuestionText, GenerateShelf__Shelf__QuestionTitle, GenerateShelf__Shelf__Select, GenerateShelf__Shelf__Select__Button, GenerateShelf__Shelf__submitButton, GenerateShelf__Shelf__Title, GenerateShelf__Shelf__Title__Button, GenerateShelf__Wrapper,GenerateShelf__Shelf__QuestionWrapper, GenerateShelf__Shelf__ButtonContainer } from "./GenerateShelf.Styles";

export default function GenerateShelfUI(props){

    return(
    <GenerateShelf__Wrapper>
        <GenerateShelf__Container>
            {props.isQuestionArr?
            <GenerateShelf__Shelf>
                {props.sequence === 0?
                <QuestionModal
                {...props}
            ></QuestionModal>
            :
            <SavingModal
                    {...props}
                ></SavingModal> 
            }                                  
            </GenerateShelf__Shelf>
            :
            <div>로딩 중</div>
            }
        </GenerateShelf__Container>
    </GenerateShelf__Wrapper>);
}


//문제 모달
const QuestionModal = (props) => {
    return(
        <>
        <GenerateShelf__Shelf__Title>
                    <div>문제 미리보기</div>
                    <GenerateShelf__Shelf__Title__Button
                        onClick={() => {
                            props.setIsCreated(false);
                        }}
                    >X</GenerateShelf__Shelf__Title__Button>
                </GenerateShelf__Shelf__Title>
                <GenerateShelf__Shelf__QuestionWrapper>
                        {props.questionInfoArr?.map(
                            (info,index) => {
                                const optArr = info.opt?info.opt.split("/"):[];

                                return(
                                <GenerateShelf__Shelf__QuestionContainer
                                key = {index}>
                                  <GenerateShelf__Shelf__QuestionTitle>{index+1}. {info.name}</GenerateShelf__Shelf__QuestionTitle>
                                  <GenerateShelf__Shelf__QuestionText>문제 유형: {info.type}</GenerateShelf__Shelf__QuestionText>
                                  {
                                    info.type==="MULTIPLE_CHOICE"&&
                                    optArr.map((info,index) =>(
                                        <GenerateShelf__Shelf__QuestionText>
                                            {info}
                                        </GenerateShelf__Shelf__QuestionText>
                                    ))
                                  }
                                  <GenerateShelf__Shelf__QuestionTitle>정답: {info.answer}</GenerateShelf__Shelf__QuestionTitle>
                                </GenerateShelf__Shelf__QuestionContainer>);
                            }
                        )}
                </GenerateShelf__Shelf__QuestionWrapper>
                <GenerateShelf__Shelf__ButtonContainer>
                <GenerateShelf__Shelf__submitButton
                    onClick={() => {
                        props.setSequence(1);
                    }}
                >
                    저장
                </GenerateShelf__Shelf__submitButton>
                <GenerateShelf__Shelf__submitButton
                    onClick={() => {
                        props.setIsCreated(false);
                    }}
                    style={{backgroundColor:"#ffffff", color:"#111111"}}
                >
                    취소
                </GenerateShelf__Shelf__submitButton>
                </GenerateShelf__Shelf__ButtonContainer>
                
        </>
    )
}



//문제 저장 모달
const SavingModal = (props) => {
    return(
        <>
            <GenerateShelf__Shelf__Container>
                    <GenerateShelf__Shelf__Select__Button
                        onClick={props.fetchWorkBooks}
                    >
                        <RefreshIcon></RefreshIcon>
                    </GenerateShelf__Shelf__Select__Button>
                    <GenerateShelf__Shelf__Select
                        value = {props.savingWorkBook}
                        onChange={(e) => {
                            props.setSavingWorkBook(e.target.value);
                        }}
                    >
                      <option value="">-- 문제집을 선택하세요 --</option>
                      {props.workBooks?.map((info,index) => (<option value = {info.encryptedWorkBookId} key = {index}>
                        {info.name}
                      </option>))}
                    </GenerateShelf__Shelf__Select>
                    <GenerateShelf__Shelf__Select__Button
                        onClick={() => {
                            if(props.isCreating){
                                props.setIsCreating(false)
                            }else{
                            props.setIsCreating(true)}
                        }}
                    >+</GenerateShelf__Shelf__Select__Button>
                </GenerateShelf__Shelf__Container>
                {props.isCreating?
                    <GenerateShelf__Shelf__Input__Container>
                        <GenerateShelf__Shelf__Input
                            onChange={(e) => {props.HandleWorkBookName(e);
                            }}
                        ></GenerateShelf__Shelf__Input>
                        <GenerateShelf__Shelf__Input__Button
                            onClick={() => {props.onCreateWorkBook()}}
                        >생성</GenerateShelf__Shelf__Input__Button>
                    </GenerateShelf__Shelf__Input__Container>
                    :
                    <></>}
                    <GenerateShelf__Shelf__ButtonContainer>
                    <GenerateShelf__Shelf__submitButton
                    onClick={() => {
                        props.onSaveQuestion();
                    }}
                >
                    저장하기
                </GenerateShelf__Shelf__submitButton>
                <GenerateShelf__Shelf__submitButton
                    onClick={() => {
                        props.setIsCreated(false);
                    }}
                    style={{backgroundColor:"#ffffff", color:"#111111"}}
                >
                    취소
                </GenerateShelf__Shelf__submitButton>
                    </GenerateShelf__Shelf__ButtonContainer>
                
        </>
    );
}