import MainContainerLogic from "@/components/common/MainContainer/MainContainer.Container";
import { useState, useRef, useEffect } from "react";
import {
  ButtonContainer,
  NextButton,
  OptionContainer,
  OptionItem,
  Progress,
  ProgressBar,
  ProgressText,
  QuestionBox,
  QuestionContainer,
  QuestionHeader,
  QuestionIcon,
  QuestionTitle,
  Header,
  BackButton,
  Title,
  Plus,
  QuestionBox__Header,
  QuestionSolve__ProgressBarContainer,
} from "./QuestionSolve.Styles";
import { useRouter } from "next/router";

export default function QuestionSolveUI(props) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [inputValue, setInputValue] = useState(""); // 빈 칸형 문제용 입력값 상태 추가
  const [wrongArr, setWrongArr] = useState([]);

  const inputRef = useRef(null); // 입력 필드 참조 추가
  const router = useRouter();

  // 문제가 변경될 때마다 입력값 초기화
  useEffect(() => {
    setInputValue("");
    // selectedAnswer 초기화도 여기서 처리
    setSelectedAnswer(null);
  }, [currentQuestion]);

  // 문제 데이터가 없으면 로딩 또는 빈 상태 표시
  if (!props.questions || props.questions.length === 0) {
    return <MainContainerLogic>문제를 불러오는 중...</MainContainerLogic>;
  }

  const question = props.questions[currentQuestion];

  // 다음 문제로 이동
  const handleNextQuestion = () => {
    if (question.answer == selectedAnswer) {
      setCorrectAnswer(correctAnswer + 1);
    }
    else{
      setWrongArr([...wrongArr, currentQuestion]);
      console.log(wrongArr)
    }

    if (currentQuestion < props.questions.length - 1) {
      console.log(`${question.answer} = ${selectedAnswer}`);
      console.log(`${question.answer == selectedAnswer}`);

      setCurrentQuestion(currentQuestion + 1);
      // setSelectedAnswer(null)은 useEffect에서 처리됨
    } else {
      setIsCompleted(true);
    }
  };

  // 옵션 선택 처리
  const handleSelectOption = (index) => {
    setSelectedAnswer(index);
  };

  // 빈 칸형 문제 입력 처리
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setSelectedAnswer(value);
  };

  // 선택지 배열로 변환 (MULTIPLE_CHOICE 타입)
  // 현재는 "/" 기준 파싱
  const options =
    question.type === "MULTIPLE_CHOICE" && question.opt
      ? question.opt.split("/")
      : [];

  // 문제 풀이 완료시 표현되는 화면
  if (isCompleted) {
    return (
      <MainContainerLogic>
        <Header>
          <BackButton>←</BackButton>
          <Title>책장</Title>
        </Header>
        <div
          style={{
            width: "100%",
            height:"100%",
            padding: "0 16px",
            maxWidth: "500px",

            display:"flex",
            flexDirection:"column",
            justifyContent:"center"
          }}
        >
          <div>
          <Title style={{ marginBottom: "20px" }}>풀이 결과</Title>
          <ProgressBar style={{ height: "28px", borderRadius: "16px" }}>
            <Progress current={correctAnswer} total={props.questions.length} />
          </ProgressBar>

          <ProgressText style={{ fontSize: "20px" }}>
            {correctAnswer}/{props.questions.length}
          </ProgressText>
        </div>
        <NextButton
          onClick={() => {
            router.push("/");
          }}
        >
          홈으로
        </NextButton>
        </div>
      </MainContainerLogic>
    );
  }

  //문제 화면
  return (
    <MainContainerLogic>
      <Header>
        <BackButton>←</BackButton>
        <Title>책장</Title>
      </Header>
      <QuestionSolve__ProgressBarContainer>
      <ProgressBar>
          <Progress
            current={currentQuestion + 1}
            total={props.questions.length}
          />
        </ProgressBar>

        <ProgressText>
          {currentQuestion + 1}/{props.questions.length}
        </ProgressText>
      </QuestionSolve__ProgressBarContainer>
      <QuestionContainer>
        {/* 진행 상태 바 */}

        {/* 문제 헤더 */}
        <QuestionHeader>
          • 문제집 이름 {currentQuestion + 1} • n번 오답
        </QuestionHeader>

        {/* 문제 카드 */}
        <QuestionBox>
          <QuestionBox__Header>
            <QuestionIcon src="/image/Vector_Questionmark.png"></QuestionIcon>
            {/*문제 제목 */}
            <QuestionTitle>{question.name}</QuestionTitle>
          </QuestionBox__Header>
          {/* 선택지 영역 */}
          <OptionContainer>
            {/* 오지선다 */}
            {question.type === "MULTIPLE_CHOICE" &&
              options.map((option, index) => (
                <OptionItem
                  key={index}
                  selected={selectedAnswer === index + 1}
                  onClick={() => handleSelectOption(index + 1)}
                >
                  {index + 1}. {option.split(". ")[1] || option}
                </OptionItem>
              ))}
            {/* O X */}
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
                  2. X
                </OptionItem>
              </>
            )}

            {/* 빈 칸형 문제 */}
            {question.type === "FILL_IN_THE_BLANK" && (
              <input
                ref={inputRef}
                type="text"
                placeholder="답을 입력하세요"
                value={inputValue}
                style={{
                  padding: "15px",
                  borderRadius: "5px",
                  border: "1px solid #ddd",
                  fontSize: "16px",
                }}
                onChange={handleInputChange}
              />
            )}
          </OptionContainer>
        </QuestionBox>

        {/* 다음 버튼 */}
        <ButtonContainer>
          <NextButton onClick={handleNextQuestion}>Next Question</NextButton>
        </ButtonContainer>
      </QuestionContainer>
    </MainContainerLogic>
  );
}

const MultipleChoiceContainer = () => {};