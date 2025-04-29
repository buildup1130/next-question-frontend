import { RefreshIcon, TrashCanIcon, XButton } from "@/utils/SvgProvider";
import { GenerateShelf__Container, GenerateShelf__Shelf, GenerateShelf__Shelf__Container, GenerateShelf__Shelf__Input, GenerateShelf__Shelf__Input__Button, GenerateShelf__Shelf__Input__Container, GenerateShelf__Shelf__QuestionContainer, GenerateShelf__Shelf__QuestionText, GenerateShelf__Shelf__QuestionTitle, GenerateShelf__Shelf__Select, GenerateShelf__Shelf__Select__Button, GenerateShelf__Shelf__submitButton, GenerateShelf__Shelf__Title, GenerateShelf__Shelf__Title__Button, GenerateShelf__Wrapper,GenerateShelf__Shelf__QuestionWrapper, GenerateShelf__Shelf__ButtonContainer,GenerateShelf__countbutton, GenerateShelf__countbuttonContainer, GenerateShelf__Shelf__Title__Text,GenerateShelf__Shelf__QuestionNum, GenerateShelf__Shelf__QuestionAnswer, GenerateShelf__Shelf__QuestionAnswerContainer, GenerateShelf__Shelf__QuestionHeader, GenerateShelf__Shelf__QuestionDeleteContainer, GenerateShelf__Shelf__QuestionDeleteContainer__TrashCan, GenerateShelf__Shelf__QuestionDeleteContainer__XButton } from "./GenerateShelf.Styles";

export default function GenerateShelfUI(props){

    return(
    <GenerateShelf__Wrapper>
        <GenerateShelf__Container>
            <GenerateShelf__Shelf>
            {(!props.questionInfoArr && props.sequence === 1) ?
             <LoadingModal></LoadingModal>:
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
                    <GenerateShelf__Shelf__Title__Text>옵션</GenerateShelf__Shelf__Title__Text>
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
                    <GenerateShelf__Shelf__Title__Text>문제 확인</GenerateShelf__Shelf__Title__Text>
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
                                    <GenerateShelf__Shelf__QuestionHeader
                                    style={{marginBottom:"8px"}}
                                    >
                                    <GenerateShelf__Shelf__QuestionTitle>Q{index+1}</GenerateShelf__Shelf__QuestionTitle>
                                    <GenerateShelf__Shelf__QuestionDeleteContainer>
                                        <GenerateShelf__Shelf__QuestionDeleteContainer__TrashCan
                                            isVisible = {props.visibleTrashIndex === index}
                                            onClick={() => {
                                                props.onClickTrashCan(index);
                                            }}
                                        >
                                            <TrashCanIcon></TrashCanIcon>
                                        </GenerateShelf__Shelf__QuestionDeleteContainer__TrashCan>
                                        <GenerateShelf__Shelf__QuestionDeleteContainer__XButton
                                            isVisible = {props.visibleTrashIndex === index}
                                            onClick={() => {props.onClickDelete(index)}}
                                        >
                                            <XButton></XButton>
                                        </GenerateShelf__Shelf__QuestionDeleteContainer__XButton>
                                    </GenerateShelf__Shelf__QuestionDeleteContainer>
                                    </GenerateShelf__Shelf__QuestionHeader>
                                  <GenerateShelf__Shelf__QuestionTitle
                                  style={{marginBottom:"20px"}}>{info.name}</GenerateShelf__Shelf__QuestionTitle>
                                  <GenerateShelf__Shelf__QuestionAnswerContainer>
                                  {
                                    info.type==="MULTIPLE_CHOICE"&&(
                                    optArr.map((optInfo,index) =>{
                                        const ansArr = optInfo.split(".");
                                        return(
                                        <GenerateShelf__Shelf__QuestionText>
                                            <GenerateShelf__Shelf__QuestionNum isAns = {index === info.answer-1}>{ansArr[0]}</GenerateShelf__Shelf__QuestionNum>{ansArr[1]}
                                        </GenerateShelf__Shelf__QuestionText>);
                                    }))
                                  }
                                  {
                                    info.type==="OX"&&
                                    (
                                    <>
                                    <GenerateShelf__Shelf__QuestionText>
                                        <GenerateShelf__Shelf__QuestionNum isAns = {info.answer === "O"}>1</GenerateShelf__Shelf__QuestionNum>O
                                    </GenerateShelf__Shelf__QuestionText>
                                    <GenerateShelf__Shelf__QuestionText>
                                        <GenerateShelf__Shelf__QuestionNum isAns = {info.answer === "X"}>2</GenerateShelf__Shelf__QuestionNum>X
                                    </GenerateShelf__Shelf__QuestionText>
                                    </>
                                    )
                                  }
                                </GenerateShelf__Shelf__QuestionAnswerContainer>
                                  {info.type === "FILL_IN_THE_BLANK" &&(
                                        <GenerateShelf__Shelf__QuestionAnswer>{info.answer}</GenerateShelf__Shelf__QuestionAnswer>
                                  )}
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
                        props.setVisibleTrashIndex(null);
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
            <GenerateShelf__Shelf__Title>
                <GenerateShelf__Shelf__Title__Text>문제 저장</GenerateShelf__Shelf__Title__Text>
            </GenerateShelf__Shelf__Title>
            <GenerateShelf__Shelf__Container>
                    <GenerateShelf__Shelf__Select
                        value = {props.savingWorkBook}
                        onChange={(e) => {
                            props.setSavingWorkBook(e.target.value);
                        }}
                    >
                      <option value="">문제집을 선택해주세요.</option>
                      {props.workBooks?.map((info,index) => (<option value = {info.encryptedWorkBookId} key = {index}>
                        {info.name}
                      </option>))}
                    </GenerateShelf__Shelf__Select>
                    {/* <GenerateShelf__Shelf__Select__Button
                        onClick={() => {
                            if(props.isCreating){
                                props.setIsCreating(false)
                            }else{
                            props.setIsCreating(true)}
                        }}
                    >+</GenerateShelf__Shelf__Select__Button> */}
                </GenerateShelf__Shelf__Container>
                {/* {props.isCreating?
                    <GenerateShelf__Shelf__Input__Container>
                        <GenerateShelf__Shelf__Input
                            onChange={(e) => {props.HandleWorkBookName(e);
                            }}
                            placeholder="문제집명을 입력해주세요."
                        ></GenerateShelf__Shelf__Input>
                        <GenerateShelf__Shelf__Input__Button
                            onClick={() => {props.onCreateWorkBook()}}
                        >생성</GenerateShelf__Shelf__Input__Button>
                    </GenerateShelf__Shelf__Input__Container>
                    :
                    <></>} */}
                    <GenerateShelf__Shelf__Input__Container>
                        <GenerateShelf__Shelf__Input
                            value={props.creatingName}
                            onChange={(e) => {props.HandleWorkBookName(e);
                            }}
                            placeholder="문제집명을 입력해주세요."
                        ></GenerateShelf__Shelf__Input>
                        <GenerateShelf__Shelf__Input__Button
                            onClick={() => {props.onCreateWorkBook()}}
                        >생성</GenerateShelf__Shelf__Input__Button>
                    </GenerateShelf__Shelf__Input__Container>
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
                        props.onClickSubmit();
                    }}
                >
                    저장하기
                </GenerateShelf__Shelf__submitButton>
                    </GenerateShelf__Shelf__ButtonContainer>
                
        </>
    );
}

const LoadingModal = () => {
    return(
    <>
    <div>로딩 중</div>
      <svg 
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        width="50px"
        height="50px"
        style={{
          animation: "spin 1.5s ease-in-out infinite",
          transformOrigin: "center"
        }}
      >
        <style>
          {`
            @keyframes spin {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
          `}
        </style>
        <circle 
          cx="50" 
          cy="50" 
          r="40" 
          fill="none" 
          stroke="black" 
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray="251.2"
          strokeDashoffset="62.8"
        />
      </svg>
    </>
    )
}