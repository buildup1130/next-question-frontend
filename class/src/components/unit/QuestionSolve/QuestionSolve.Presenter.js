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
  QuestionSolve__ResultWrapper,
  QuestionSolve__ResultContainer,
  QuestionSolve__ResultBox,
  QuestionSolve__QuestionWrapper,
  QuestionSolve__QuestionContainer,
  QuestionSolve__QuestionTitle,
  QuestionSolve__QuestionText,
  QuestionSolve__ButtonContainer,
  QuestionSolve__submitButton,
} from "./QuestionSolve.Styles";
import { useRouter } from "next/router";
import { savingCheck, savingStat } from "@/utils/StatisticManager";
import { useAuth } from "@/utils/AuthContext";

export default function QuestionSolveUI(props) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [curAns, setCurAns] = useState(null);
  const [inputValue, setInputValue] = useState(""); // 빈 칸형 문제용 입력값 상태 추가
  const [wrongArr, setWrongArr] = useState([]);
  const [isResult, setIsResult] = useState(false);

  const inputRef = useRef(null); // 입력 필드 참조 추가
  const router = useRouter();

  const { token } = useAuth();

  // 문제가 변경될 때마다 입력값 초기화
  useEffect(() => {
    setInputValue("");
    // selectedAnswer 초기화도 여기서 처리
    setSelectedAnswer(null);
    // isCorrect 초기화
    setIsCorrect(null);
    // curAns 초기화
    setCurAns(null);
  }, [currentQuestion]);

  // 문제 데이터가 없으면 로딩 또는 빈 상태 표시
  if (!props.questions || props.questions.length === 0) {
    return <MainContainerLogic>문제를 불러오는 중...</MainContainerLogic>;
  }

  const question = props.questions[currentQuestion];

  // 다음 문제로 이동
  // selectedAnswer 와 question.answer가 동일할 때 다음 문제로 이동
  // 1. selectedAnswer와 question.answer를 비교한 후 동일하다면 색을 변경
  // 2. 변수를 사용하여 한 번 더 누르면 다음 문제로 이동
  // props.isTest 모달을 이용
  const handleNextQuestion = () => {
    // 아직 정답 여부가 확인되지 않은 상태라면
    if (!isCorrect) {
      // 처음 문제를 맞췄을 때만 correctAnswer 증가
      if (question.answer == selectedAnswer) {
        // 이 문제를 이전에 틀린 적이 없는 경우만 correctAnswer 증가
        if (!wrongArr.includes(currentQuestion)) {
          setCorrectAnswer(correctAnswer + 1);
        }
        setIsCorrect(true);
      } else {
        // 틀린 경우 wrongArr에 추가 (중복 방지)
        if (!wrongArr.includes(currentQuestion)) {
          setWrongArr([...wrongArr, currentQuestion]);
        }
        // 일반문제 풀이인 경우 오답이면 isCorrect false 유지
        if (props.type === 0) {
          console.log(`type은 0입니다 setFalse`);
          setIsCorrect(false);
        } else {
          // console.log("setTrue");
          console.log(`type은 1입니다 setCorrect`);
          setIsCorrect(true);
        }
      }
      //가장 최근에 선택한 답변 저장
      setCurAns(selectedAnswer);
    }
    // 이미 정답 확인이 완료된 상태라면 다음 문제로 이동
    else {
      if (currentQuestion < props.questions.length - 1) {
        console.log(`${question.answer} = ${selectedAnswer}`);
        console.log(`${question.answer == selectedAnswer}`);

        setCurrentQuestion(currentQuestion + 1);
        // 문제가 끝났다면 결과 화면으로 이동
      } else {
        setIsCompleted(true);
        if (props.onFinish) {
          props.onFinish(wrongArr);
        }
        if (props.type === 2) {
          //일일 문제풀이가 끝난 경우 출석체크
          savingCheck(props.questions, wrongArr, token);
        }
        //일반 문제풀이, 모의고사 문제풀이 인 경우 결과 저장
        else if (props.type === 0 || props.type === 1) {
          savingStat(
            props.questions,
            wrongArr,
            props.type,
            props.workBookId,
            token
          );
        } else {
          console.log("비회원 문제풀이");
        }
        console.log(
          `wrongArr = ${wrongArr} ${wrongArr.map((value) => {
            console.log(props.questions[value]);
          })}`
        );
      }
    }
    //테스트 콘솔솔
    console.log(
      `props.type = ${typeof props.type} isAnswer = ${
        question.answer == selectedAnswer
      } isCorrect = ${isCorrect} questions = ${question}`
    );
  };

  // 옵션 선택 처리
  const handleSelectOption = (index) => {
    setSelectedAnswer(index);
  };

  // 빈 칸형 문제 입력 처리
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setSelectedAnswer(value.trim());
  };

  // 올바른 방법:
  const options =
    question && question.type === "MULTIPLE_CHOICE" && question.opt
      ? question.opt.split("/")
      : [];

  // 문제 풀이 완료시 표현되는 화면
  if (isCompleted) {
    return (
      <MainContainerLogic>
        {isResult ? (
          <ResultModal
            wrongArr={wrongArr}
            questions={props.questions}
            setIsResult={setIsResult}
          ></ResultModal>
        ) : null}
        <Header>
          <BackButton>←</BackButton>
          <Title>책장</Title>
        </Header>
        <div
          style={{
            width: "100%",
            height: "100%",
            padding: "0 16px",
            maxWidth: "500px",

            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div>
            <Title style={{ marginBottom: "20px" }}>풀이 결과</Title>
            <ProgressBar style={{ height: "28px", borderRadius: "16px" }}>
              <Progress
                current={correctAnswer}
                total={props.questions.length}
              />
            </ProgressBar>

            <ProgressText style={{ fontSize: "20px" }}>
              {correctAnswer}/{props.questions.length}
            </ProgressText>
          </div>
          <NextButton
            onClick={() => {
              // 결과 모달 열기 로직
              setIsResult(true);
            }}
          >
            틀린 문제 보기
          </NextButton>
          <NextButton
            onClick={() => {
              router.push("/");
            }}
            style={{
              marginTop: "12px",
              backgroundColor: "#3b82f6",
              color: "white",
            }}
          >
            홈으로
          </NextButton>
        </div>
      </MainContainerLogic>
    );
  }

  //문제 화면
  if (question) {
    return (
      <MainContainerLogic>
        <Header>
          <BackButton>←</BackButton>
          <Title>문제 풀이</Title>
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
                    curAns={curAns === index + 1}
                    isRightAnswer={question.answer == index + 1}
                  >
                    {index + 1}. {option.split(". ")[1] || option}
                  </OptionItem>
                ))}
              {/* O X */}
              {question.type === "OX" && (
                <>
                  <OptionItem
                    selected={selectedAnswer === 0}
                    curAns={curAns === 0}
                    isRightAnswer={question.answer == 0}
                    onClick={() => handleSelectOption(0)}
                  >
                    1. O
                  </OptionItem>
                  <OptionItem
                    selected={selectedAnswer === 1}
                    curAns={curAns === 1}
                    isRightAnswer={question.answer == 1}
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
                    // border: "1px solid #ddd",
                    border: selectedAnswer
                      ? selectedAnswer === question.answer
                        ? "1px solid green"
                        : "1px solid red"
                      : "1px solid #ddd",
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
}

//틀린 문제 결과
const ResultModal = (props) => {
  const wrongQuestions = [];
  props.wrongArr.map((data) => {
    const tmpobj = {
      name: props.questions[data].name,
      type: props.questions[data].type,
      answer: props.questions[data].answer,
      opt: props.questions[data].opt,
      number: data + 1,
    };
    wrongQuestions.push(tmpobj);
  });
  console.log(wrongQuestions);
  return (
    <QuestionSolve__ResultWrapper>
      <QuestionSolve__ResultContainer>
        <QuestionSolve__ResultBox>
          {wrongQuestions.length === 0 ? (
            <QuestionSolve__QuestionTitle>
              "대단해요! 모두 정답이에요!"
            </QuestionSolve__QuestionTitle>
          ) : (
            <QuestionSolve__QuestionWrapper>
              {wrongQuestions.map((info, index) => {
                const optArr = info.opt ? info.opt.split("/") : [];
                return (
                  <QuestionSolve__QuestionContainer key={index}>
                    <QuestionSolve__QuestionTitle>
                      {info.number}. {info.name}
                    </QuestionSolve__QuestionTitle>
                    <QuestionSolve__QuestionText>
                      문제 유형: {info.type}
                    </QuestionSolve__QuestionText>

                    <QuestionSolve__QuestionTitle>
                      정답:
                      {info.type === "MULTIPLE_CHOICE" &&
                        optArr[info.answer - 1]}
                      {info.type === "FILL_IN_THE_BLANK" && info.answer}
                      {info.type === "OX"
                        ? info.answer === "0"
                          ? "O"
                          : "X"
                        : ""}
                    </QuestionSolve__QuestionTitle>
                  </QuestionSolve__QuestionContainer>
                );
              })}
            </QuestionSolve__QuestionWrapper>
          )}
          <QuestionSolve__ButtonContainer>
            <QuestionSolve__submitButton
              onClick={() => {
                props.setIsResult(false);
              }}
            >
              확인
            </QuestionSolve__submitButton>
          </QuestionSolve__ButtonContainer>
        </QuestionSolve__ResultBox>
      </QuestionSolve__ResultContainer>
    </QuestionSolve__ResultWrapper>
  );
};
