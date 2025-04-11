import { RefreshIcon } from "@/utils/SvgProvider";
import { GenerateShelf__Container, GenerateShelf__Shelf, GenerateShelf__Shelf__Container, GenerateShelf__Shelf__Input, GenerateShelf__Shelf__Input__Button, GenerateShelf__Shelf__Input__Container, GenerateShelf__Shelf__QuestionContainer, GenerateShelf__Shelf__QuestionText, GenerateShelf__Shelf__QuestionTitle, GenerateShelf__Shelf__Select, GenerateShelf__Shelf__Select__Button, GenerateShelf__Shelf__submitButton, GenerateShelf__Shelf__Title, GenerateShelf__Shelf__Title__Button, GenerateShelf__Wrapper,GenerateShelf__Shelf__QuestionWrapper, GenerateShelf__Shelf__ButtonContainer,GenerateShelf__countbutton, GenerateShelf__countbuttonContainer } from "./GenerateShelf.Styles";

export default function GenerateShelfUI(props){

    return(
    <GenerateShelf__Wrapper>
        <GenerateShelf__Container>
            <GenerateShelf__Shelf>
            {(!props.questionInfoArr && props.sequence === 1) ?
             <div>로딩 중</div>:
                <>
                {props.sequence === 0 ? (
                <OptionModal {...props} />
            ) : props.sequence === 1 ? (
                <QuestionModal {...props} />
            ) : props.sequence === 2 ? (
                <SavingModal {...props} />
            ) : <div>문제가 저장되었습니다.</div>}                                  
            </>
            }
            </GenerateShelf__Shelf>
        </GenerateShelf__Container>
    </GenerateShelf__Wrapper>);
}

//옵션 모달
const OptionModal = (props) =>{
    return(
        <>
        <GenerateShelf__Shelf__Title>
                    <div>옵션</div>
                    <GenerateShelf__Shelf__Title__Button
                        onClick={() => {
                            props.setIsCreated(false);
                        }}
                    >X</GenerateShelf__Shelf__Title__Button>
                </GenerateShelf__Shelf__Title>
                <GenerateShelf__Shelf__Title>
                    문제 수
                </GenerateShelf__Shelf__Title>
                <GenerateShelf__countbuttonContainer
                    isSingle = {props.numArr.length === 1}
                >
                {props.numArr.map((num, index) => (
                        <GenerateShelf__countbutton
                        key={index}
                        style={
                        props.questionCount === num
                            ? {
                                backgroundColor: "#3b82f6",
                                color: "white",
                                }
                            : {
                                backgroundColor: "#e5e7eb",
                                color: "black",
                                }
                            }
                        onClick={() => {
                            props.setQuestionCount(num);
                        }}
                        >
                        {num}
                        </GenerateShelf__countbutton>
                        ))}
                </GenerateShelf__countbuttonContainer>
                
                <GenerateShelf__Shelf__ButtonContainer>
                <GenerateShelf__Shelf__submitButton
                    onClick={() => {
                        props.setIsCreated(false);
                    }}
                    style={{backgroundColor:"#ffffff", color:"#111111"}}
                >
                    취소
                </GenerateShelf__Shelf__submitButton>
                <GenerateShelf__Shelf__submitButton
                    onClick={() => {
                        props.onCreateQuestion();
                    }}
                >
                    다음
                </GenerateShelf__Shelf__submitButton>
                </GenerateShelf__Shelf__ButtonContainer>
                
        </>
    ) 
}


//문제 모달
const QuestionModal = (props) => {
    return(
        <>
        <GenerateShelf__Shelf__Title>
                    <div>문제 확인하기</div>
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
                        props.setIsCreated(false);
                    }}
                    style={{backgroundColor:"#ffffff", color:"#111111"}}
                >
                    취소
                </GenerateShelf__Shelf__submitButton>
                <GenerateShelf__Shelf__submitButton
                    onClick={() => {
                        props.setSequence(2);
                    }}
                >
                    다음
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
                        props.setSequence(1);
                    }}
                    style={{backgroundColor:"#ffffff", color:"#111111"}}
                >
                    이전
                </GenerateShelf__Shelf__submitButton>
                <GenerateShelf__Shelf__submitButton
                    onClick={() => {
                        props.onSaveQuestion();
                        // props.setIsCreated(false);
                        props.setSequence(3);
                        setTimeout(() => {
                            props.setIsCreated(false);
                            props.setFile(null);
                        },1000);
                    }}
                >
                    저장하기
                </GenerateShelf__Shelf__submitButton>
                    </GenerateShelf__Shelf__ButtonContainer>
                
        </>
    );
}