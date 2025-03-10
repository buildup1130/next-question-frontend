import MainContainerLogic from "@/components/common/MainContainer/MainContainer.Container";
import { useState } from "react";
import { ButtonContainer, NextButton, OptionContainer, OptionItem, Progress, ProgressBar, ProgressText, QuestionBox, QuestionContainer, QuestionHeader, QuestionIcon, QuestionTitle,Header,BackButton,Title,Plus } from "./QuestionSolve.Styles";
import { useRouter } from "next/router";

export default function QuestionSolveUI(props){
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    
    const router = useRouter();

    // 문제 데이터가 없으면 로딩 또는 빈 상태 표시
    if (!props.questions || props.questions.length === 0) {
      return <MainContainerLogic>문제를 불러오는 중...</MainContainerLogic>;
    }
    
    const question = props.questions[currentQuestion];
    
    // 다음 문제로 이동
    const handleNextQuestion = () => {
      if (currentQuestion < props.questions.length - 1) {
        console.log(`${question.answer} === ${selectedAnswer}`);


        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      }else if(currentQuestion === props.questions.length -1) {
            router.push("/");
        }
    };
    
    // 옵션 선택 처리
    const handleSelectOption = (index) => {
      setSelectedAnswer(index);
    };
    
    // 선택지 배열로 변환 (MULTIPLE_CHOICE 타입)
    const options = question.type === "MULTIPLE_CHOICE" && question.opt 
      ? question.opt.split("/") 
      : [];
    
    return (
      <MainContainerLogic>
        <Header>
                <BackButton>←</BackButton>
                <Title>책장</Title>
        </Header>
        <QuestionContainer>
          {/* 진행 상태 바 */}
          <ProgressBar>
            <Progress current={currentQuestion + 1} total={props.questions.length} />
          </ProgressBar>
          
          <ProgressText>
            {currentQuestion + 1}/{props.questions.length}
          </ProgressText>
          
          {/* 문제 헤더 */}
          <QuestionHeader>
            • 문제집 이름 {currentQuestion + 1} • n번 잘 오답
          </QuestionHeader>
          
          {/* 문제 카드 */}
          <QuestionBox>
            <QuestionIcon>?</QuestionIcon>
            <QuestionTitle>{question.name}</QuestionTitle>
            
            {/* 선택지 영역 */}
            <OptionContainer>
              {question.type === "MULTIPLE_CHOICE" && options.map((option, index) => (
                <OptionItem 
                  key={index} 
                  selected={selectedAnswer === index}
                  onClick={() => handleSelectOption(index)}
                >
                  {index + 1}. {option.split(". ")[1] || option}
                </OptionItem>
              ))}
              
              {question.type === "OX" && (
                <>
                  <OptionItem 
                    selected={selectedAnswer === 0}
                    onClick={() => handleSelectOption(0)}
                  >
                    1. O
                  </OptionItem>
                  <OptionItem 
                    selected={selectedAnswer === 1}
                    onClick={() => handleSelectOption(1)}
                  >
                    1. X
                  </OptionItem>
                </>
              )}
              
              {question.type === "FILL_IN_THE_BLANK" && (
                <input 
                  type="text" 
                  placeholder="답을 입력하세요" 
                  style={{
                    padding: '15px',
                    borderRadius: '5px',
                    border: '1px solid #ddd',
                    fontSize: '16px'
                  }}
                />
              )}
            </OptionContainer>
          </QuestionBox>
          
          {/* 다음 버튼 */}
          <ButtonContainer>
            <NextButton onClick={handleNextQuestion}>
              Next Question
            </NextButton>
          </ButtonContainer>
        </QuestionContainer>
      </MainContainerLogic>
    );
}