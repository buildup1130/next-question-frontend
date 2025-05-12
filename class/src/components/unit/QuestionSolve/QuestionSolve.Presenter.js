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
  QuestionSolve__FillAnswer,
  QuestionSolve__LoadingContainer,
  QuestionSolve__LoadingImg,
  QuestionSolve__LoadingWrapper,
  QuestionSolve__LoadingSubsContainer,
  QuestionSolve__LoadingTitle,
  QuestionSolve__LoadingSubtitle,
  QuestionSolve__SubHeader,
  QuestionSolve__SubHeader__Element,
  QuestionSolve__RateContainer,
  QuestionSolve__RateContainer__Rate,
  QuestionSolve__RateContainer__Percentage,
  QuestionSolve__RateContainer__subtitle,
  QuestionSolve__Result__SubContent,
  QuestionSolve__Result__SubContent__element,
  QuestionSolve__RateContainer__bold,
  QuestionSolve__ResultDetails__header,
  QuestionSolve__ResultDetails__content,
  QuestionSolve__Container,
  QuestionSolve__ResultDetails__CommentContainer,
  QuestionSolve__ResultDetails__Comment,
  QuestionSolve__ResultDetails__WorkBookTitle
} from "./QuestionSolve.Styles";
import { useRouter } from "next/router";
import { savingCheck, savingStat } from "@/utils/StatisticManager";
import { useAuth } from "@/utils/AuthContext";
import { BackIcon, CheckedIcon, CheckIcon, HomeIcon, XButton, XIcon } from "@/utils/SvgProvider";

export default function QuestionSolveUI(props) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [curAns, setCurAns] = useState("");
  const [inputValue, setInputValue] = useState(""); // 빈 칸형 문제용 입력값 상태 추가
  const [wrongArr, setWrongArr] = useState([]);
  const [isResult, setIsResult] = useState(false);
  const [fillAns, setFillAns] = useState("");
  const [fillSeq,setFillSeq] = useState(0);
  const [isLoading, setIsLoading] = useState(0);
  const [resultSeq, setResultSeq] = useState(0);
  //시간 기록용 시작 시간 기록
  const [startTime, setStartTime] = useState(null);
  const [totalTime, setTotalTime] = useState(null);
  //각 문제별 처음 등록한 답 기록
  const [answerArr ,setAnswerArr] = useState([]);

  const inputRef = useRef(null); // 입력 필드 참조 추가
  const router = useRouter();

  const { token } = useAuth();

  // 문제가 변경될 때마다 입력값 초기화
  useEffect(() => {
    setInputValue("");
    // selectedAnswer 초기화도 여기서 처리
    setSelectedAnswer("");
    // isCorrect 초기화
    setIsCorrect(null);
    // curAns 초기화
    setCurAns(null);
  }, [currentQuestion]);

  //컴포넌트 로딩시에 시작 시간 기록
  useEffect(() => {
    setStartTime(Date.now());
    console.log(startTime);
  },[])

  // 문제 데이터가 없으면 로딩 또는 빈 상태 표시
  if (!props.questions || props.questions.length === 0) {
    return <MainContainerLogic>문제를 불러오는 중...</MainContainerLogic>;
  }

  const question = props.questions[currentQuestion];


// 정답 체크 함수
const checkAnswer = () => {
  const isAnswerCorrect = question.answer?.trim() == selectedAnswer;
  console.log(`정답은${question.answer}, 선택한 답은${selectedAnswer}`);
  if(selectedAnswer !== ""){
  if (isAnswerCorrect) {
    if (!wrongArr.includes(currentQuestion)) {
      setCorrectAnswer(correctAnswer + 1);
      //처음 맞춘 경우
      setAnswerArr([...answerArr,selectedAnswer]);
    }
    setIsCorrect(true);
  } else {
    if (!wrongArr.includes(currentQuestion)) {
      setWrongArr([...wrongArr, currentQuestion]);
      //처음 틀린 경우
      setAnswerArr([...answerArr,selectedAnswer]);
    }
    
    // 일반문제 풀이인 경우 오답이면 isCorrect false 유지
    setIsCorrect(props.type === 0 ? false : true);
  }
  
  setCurAns(selectedAnswer);
  // 질문 타입에 따른 추가 처리
  handleQuestionTypeSpecificLogic(isAnswerCorrect);
  }
};

// 질문 타입별 특수 로직 처리
const handleQuestionTypeSpecificLogic = (isAnswerCorrect) => {
  switch (question.type) {
    case "MULTIPLE_CHOICE":
      // 객관식 문제에 대한 특수 처리
      console.log("객관식 문제 처리");
      // 여기에 객관식 관련 추가 기능 구현
      break;
      
    case "OX":
      // OX 문제에 대한 특수 처리
      console.log("OX 문제 처리");
      // 여기에 OX 관련 추가 기능 구현
      break;
      
    case "FILL_IN_THE_BLANK":
      if(props.type === 0){
        console.log("빈칸, 일반 문제");
        console.log(question);
        const q = Math.floor(question.answer.length/3);
        const m = question.answer.length%3;
        console.log(question.answer);
        if(fillSeq === 0){
          setFillAns("O".repeat(question.answer.length));
          setFillSeq(1);
        }
        else{
          const num = q*fillSeq+m;
          const tmpArr = fillSeq < 3?question.answer.substring(0,num) + "O".repeat(question.answer.length-num):question.answer;
          setFillSeq(fillSeq+1);
          setFillAns(tmpArr);
          console.log(q*fillSeq,tmpArr);
        }
      }
      // 빈칸 문제에 대한 특수 처리
      console.log("빈칸 문제 처리");
      // 여기에 빈칸 채우기 관련 추가 기능 구현
      break;
      
    default:
      console.log("알 수 없는 문제 유형");
  }
};

//문제 마지막 페이지로 이동하는 함수
const completeQuiz = () => {
  //문제 풀이 시간 계산
  const endTime = Date.now();
  const spentTime = Math.floor((endTime - startTime) / 1000);
  setTotalTime(spentTime);
  console.log(`answer Arr = ${answerArr}`);
  setIsLoading(true);
  //로딩 시간 기록
  setTimeout(()=>{
    setIsLoading(false);
    setIsCompleted(true);
  },3000);
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

// 다음 문제로 이동하는 함수
const moveToNextQuestion = () => {
  if (currentQuestion < props.questions.length - 1) {
    setCurrentQuestion(currentQuestion + 1);
    setFillAns(null);
    setFillSeq(0);
    setSelectedAnswer("");
  } else {
    completeQuiz();
  }
};

// 통합 핸들러 함수
const handleNextQuestion = () => {
  console.log(isCorrect);
  if (!isCorrect) {
    checkAnswer();
  } else {
    moveToNextQuestion();
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

  // 올바른 방법:
  const options =
    question && question.type === "MULTIPLE_CHOICE" && question.opt
      ? question.opt.split("|||")
      : [];

  if(isLoading){
    return(
      <LoadingModal></LoadingModal>
    )
  }

  // 문제 풀이 완료시 표현되는 화면
  if (isCompleted) {
    return (
      <MainContainerLogic>
        {/* {isResult ? (
          <ResultModal
            wrongArr={wrongArr}
            questions={props.questions}
            setIsResult={setIsResult}
          ></ResultModal>
        ) : null} */}
        <Header>
          <Title>문제 풀이 결과</Title>
        </Header>
        <QuestionSolve__SubHeader>
          <QuestionSolve__SubHeader__Element
            isSelected = {fillSeq === 0}
            onClick={() => {setFillSeq(0)}}
          >결과 요약</QuestionSolve__SubHeader__Element>
          <QuestionSolve__SubHeader__Element
            isSelected = {fillSeq === 1}
            onClick={() => {setFillSeq(1)}}
          >결과 상세보기</QuestionSolve__SubHeader__Element>
        </QuestionSolve__SubHeader>
        <QuestionSolve__ResultWrapper>
          {fillSeq === 0?<ResultSummary
            match = {correctAnswer}
            number = {props.questions.length}
            totalTime = {totalTime}
          ></ResultSummary>:<ResultDetails
            match = {correctAnswer}
            questions = {props.questions}
            answerArr = {answerArr}
          ></ResultDetails>}
          <NextButton
            onClick={() => {
              router.push("/");
            }}
            style={{
              width:"100%",
              marginTop: "24px",
              backgroundColor: "#808fff",
              color: "white",
            }}
          >
            홈으로
          </NextButton>
        </QuestionSolve__ResultWrapper>
        {/* <div
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
        </div> */}

      </MainContainerLogic>
    );
  }

  //문제 화면
  if (question) {
    return (
      <QuestionSolve__Container>
        <Header>
          {/* <Title>문제 풀이</Title> */}
        </Header>
        
        <QuestionContainer>
          {/* 문제 헤더 */}
          <QuestionHeader>
            {/* • 문제집 이름 {currentQuestion + 1} */}
            {question.workBookTitle?"• "+question.workBookTitle:""}
          </QuestionHeader>
          {/* 문제 카드 */}
          <QuestionBox>
            {/* 선택지 영역 */}
            <OptionContainer>
            <QuestionBox__Header>
              <QuestionIcon src="/image/Vector_Questionmark.png"></QuestionIcon>
              {/*문제 제목 */}
              <QuestionTitle>{question.name}</QuestionTitle>
            </QuestionBox__Header>
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
                    isRightAnswer={question.answer == '0'}
                    onClick={() => handleSelectOption(0)}
                  >
                    1. O
                  </OptionItem>
                  <OptionItem
                    selected={selectedAnswer === 1}
                    curAns={curAns === 1}
                    isRightAnswer={question.answer == '1'}
                    onClick={() => handleSelectOption(1)}
                  >
                    2. X
                  </OptionItem>
                </>
              )}

              {/* 빈 칸형 문제 */}
              {question.type === "FILL_IN_THE_BLANK" && (
                <>
                <QuestionSolve__FillAnswer style={{display:fillSeq?"":"none"}}>{fillAns}</QuestionSolve__FillAnswer>
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="답을 입력"
                  value={inputValue}
                  style={{
                    padding: "15px",
                    borderRadius: "5px",
                    // border: "1px solid #ddd",
                    border: curAns !== undefined && curAns !== null
                    ? String(curAns) === String(question.answer)
                      ? "1px solid #2fafff"
                      : "1px solid red"
                    : "1px solid #ddd",
                    fontSize: "16px",
                  }}
                  onChange={handleInputChange}
                />
                </>
              )}
            </OptionContainer>
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

          </QuestionBox>

          {/* 다음 버튼 */}
          <ButtonContainer>
            <NextButton onClick={handleNextQuestion}>Next Question</NextButton>
          </ButtonContainer>
          {/* 팔로워 영역 */}
        </QuestionContainer>
      </QuestionSolve__Container>
    );
  }
}

// //틀린 문제 결과
// const ResultModal = (props) => {
//   const wrongQuestions = [];
//   props.wrongArr.map((data) => {
//     const tmpobj = {
//       name: props.questions[data].name,
//       type: props.questions[data].type,
//       answer: props.questions[data].answer,
//       opt: props.questions[data].opt,
//       number: data + 1,
//     };
//     wrongQuestions.push(tmpobj);
//   });
//   console.log(wrongQuestions);
//   return (
//     <QuestionSolve__ResultWrapper>
//       <QuestionSolve__ResultContainer>
//         <QuestionSolve__ResultBox>
//           {wrongQuestions.length === 0 ? (
//             <QuestionSolve__QuestionTitle>
//               "대단해요! 모두 정답이에요!"
//             </QuestionSolve__QuestionTitle>
//           ) : (
//             <QuestionSolve__QuestionWrapper>
//               {wrongQuestions.map((info, index) => {
//                 const optArr = info.opt ? info.opt.split("|||") : [];
//                 return (
//                   <QuestionSolve__QuestionContainer key={index}>
//                     <QuestionSolve__QuestionTitle>
//                       {info.number}. {info.name}
//                     </QuestionSolve__QuestionTitle>
//                     <QuestionSolve__QuestionText>
//                       문제 유형: {info.type}
//                     </QuestionSolve__QuestionText>

//                     <QuestionSolve__QuestionTitle>
//                       정답:
//                       {info.type === "MULTIPLE_CHOICE" &&
//                         optArr[info.answer - 1]}
//                       {info.type === "FILL_IN_THE_BLANK" && info.answer}
//                       {info.type === "OX"
//                         ? info.answer === "0"
//                           ? "O"
//                           : "X"
//                         : ""}
//                     </QuestionSolve__QuestionTitle>
//                   </QuestionSolve__QuestionContainer>
//                 );
//               })}
//             </QuestionSolve__QuestionWrapper>
//           )}
//           <QuestionSolve__ButtonContainer>
//             <QuestionSolve__submitButton
//               onClick={() => {
//                 props.setIsResult(false);
//               }}
//             >
//               확인
//             </QuestionSolve__submitButton>
//           </QuestionSolve__ButtonContainer>
//         </QuestionSolve__ResultBox>
//       </QuestionSolve__ResultContainer>
//     </QuestionSolve__ResultWrapper>
//   );
// };

const LoadingModal = () => {
  return(
    <QuestionSolve__LoadingWrapper>
      <QuestionSolve__LoadingContainer>
      <QuestionSolve__LoadingImg src="/image/Loading.png"></QuestionSolve__LoadingImg>
      <QuestionSolve__LoadingSubsContainer>
        <QuestionSolve__LoadingTitle>
          문제를 채점하고 있어요.
        </QuestionSolve__LoadingTitle>
        <QuestionSolve__LoadingSubtitle>
          문제가 채점될 때 까지 기다려주세요.
        </QuestionSolve__LoadingSubtitle>
      </QuestionSolve__LoadingSubsContainer>
    </QuestionSolve__LoadingContainer>
    </QuestionSolve__LoadingWrapper>
    
  )
}

const ResultSummary = (props) => {
  // 이징 함수들
  const easingFunctions = {
    // 선형 (기본)
    linear: t => t,
    
    // 부드러운 시작
    easeInQuad: t => t * t,
    easeInCubic: t => t * t * t,
    
    // 부드러운 종료
    easeOutQuad: t => t * (2 - t),
    easeOutCubic: t => (--t) * t * t + 1,
    
    // 부드러운 시작과 종료
    easeInOutQuad: t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
    easeInOutCubic: t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
    
    // 탄성 효과
    easeOutElastic: t => {
      const p = 0.3;
      return Math.pow(2, -10 * t) * Math.sin((t - p / 4) * (2 * Math.PI) / p) + 1;
    },
    
    // 바운스 효과
    easeOutBounce: t => {
      if (t < (1 / 2.75)) {
        return 7.5625 * t * t;
      } else if (t < (2 / 2.75)) {
        return 7.5625 * (t -= (1.5 / 2.75)) * t + 0.75;
      } else if (t < (2.5 / 2.75)) {
        return 7.5625 * (t -= (2.25 / 2.75)) * t + 0.9375;
      } else {
        return 7.5625 * (t -= (2.625 / 2.75)) * t + 0.984375;
      }
    }
};

  const matchRate = Math.floor(props.match/props.number * 100);
  const min = props.totalTime < 60?0:Math.floor(props.totalTime/60);
  const sec = props.totalTime % 60;

  const [currentRate, setCurrentRate] = useState(0);
  useEffect(() => {
    const startTime = Date.now();
    const duration = 1500; // 2초
    const startValue = currentRate;
    const endValue = matchRate;

    const easingFunction = easingFunctions.easeInOutCubic;
    
    const animateValue = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const easedProgress = easingFunction(progress)
      
      const newValue = startValue + (endValue - startValue) * easedProgress;
      setCurrentRate(newValue);
      
      if (progress < 1) {
        requestAnimationFrame(animateValue);
      }
    };
    
    requestAnimationFrame(animateValue);
  }, [matchRate]);  

  return(
    <QuestionSolve__ResultContainer>
      <QuestionSolve__RateContainer>
        <QuestionSolve__RateContainer__Rate
          matchRate = {Math.round(currentRate)}
        >
          <QuestionSolve__RateContainer__Percentage>
            <QuestionSolve__RateContainer__subtitle>정답률</QuestionSolve__RateContainer__subtitle>
            <div>{matchRate}%</div>
          </QuestionSolve__RateContainer__Percentage>
        </QuestionSolve__RateContainer__Rate>
      </QuestionSolve__RateContainer>
      <QuestionSolve__ResultDetails__CommentContainer>
        <QuestionSolve__ResultDetails__Comment>
          {
            matchRate === 100? "완벽해요!" : matchRate >= 75? "잘했어요!" : "부족해요"
          }
        </QuestionSolve__ResultDetails__Comment>
      </QuestionSolve__ResultDetails__CommentContainer>
      <QuestionSolve__Result__SubContent>
        <QuestionSolve__Result__SubContent__element>
          <QuestionSolve__RateContainer__subtitle>
            정답수<br/>/문항수
          </QuestionSolve__RateContainer__subtitle>
          <QuestionSolve__RateContainer__bold>
            {props.match}/{props.number}
          </QuestionSolve__RateContainer__bold>
        </QuestionSolve__Result__SubContent__element>
        <QuestionSolve__Result__SubContent__element>
        <QuestionSolve__RateContainer__subtitle>
            풀이 시간
          </QuestionSolve__RateContainer__subtitle>
          <QuestionSolve__RateContainer__bold>
            {min}분 {sec}초
          </QuestionSolve__RateContainer__bold>
        </QuestionSolve__Result__SubContent__element>
      </QuestionSolve__Result__SubContent>
    </QuestionSolve__ResultContainer>
  )
}

const ResultDetails = (props) => {
  return(
    <>
      <QuestionSolve__ResultDetails__header>
        <span style={{color:"#2fafff"}}><CheckedIcon /></span>{props.match}
        <span style={{marginLeft:"10px", marginRight:"2px"}}><XIcon /></span>{props.questions.length - props.match}
      </QuestionSolve__ResultDetails__header>
      <QuestionSolve__ResultDetails__content>
        {props.questions.map((question, index) => {
          // 객관식 선택지 처리
          const options = question.type === "MULTIPLE_CHOICE" && question.opt
            ? question.opt.split("|||")
            : [];
          
          // 사용자가 선택한 답변
          const userAnswer = props.answerArr[index];
          
          // 정답 여부
          const isCorrect = question.answer?.trim() == userAnswer;
          
          return (
            <QuestionSolve__ResultContainer key={index}
              style={{paddingTop:"8px"}}
            >
              {question.workBookTitle?
              <QuestionSolve__ResultDetails__WorkBookTitle>
              {question.workBookTitle?"• "+question.workBookTitle:""}
              </QuestionSolve__ResultDetails__WorkBookTitle>:
              <></>}
              
              <QuestionBox__Header>
                <QuestionIcon src="/image/Vector_Questionmark.png" />
                <QuestionTitle>{question.name}</QuestionTitle>
              </QuestionBox__Header>
              
              {/* 객관식 문제 */}
              {question.type === "MULTIPLE_CHOICE" &&
                options.map((option, optIndex) => (
                  <OptionItem
                    key={optIndex}
                    curAns={userAnswer === optIndex + 1}
                    isRightAnswer={question.answer == optIndex + 1}
                    // onClick 함수 제거 (읽기 전용)
                  >
                    {optIndex + 1}. {option.split(". ")[1] || option}
                  </OptionItem>
                ))}
              
              {/* OX 문제 */}
              {question.type === "OX" && (
                <>
                  <OptionItem
                    curAns={userAnswer === 0}
                    isRightAnswer={question.answer == 0}
                    // onClick 함수 제거 (읽기 전용)
                  >
                    1. O
                  </OptionItem>
                  <OptionItem
                    curAns={userAnswer === 1}
                    isRightAnswer={question.answer == 1}
                    // onClick 함수 제거 (읽기 전용)
                  >
                    2. X
                  </OptionItem>
                </>
              )}
              
              {/* 빈 칸형 문제 */}
              {question.type === "FILL_IN_THE_BLANK" && (
                <div style={{
                  width:"100%",
                  padding: "15px",
                  borderRadius: "5px",
                  border: isCorrect ? "1px solid #2fafff" : "1px solid red",
                  fontSize: "16px"
                }}>
                  <div>{userAnswer || "입력 없음"}</div>
                </div>
              )}
              {isCorrect?<></>:
                <div style={{
                  marginTop: "10px", 
                  padding: "0 8px", 
                  borderRadius: "4px",
                  width:"100%",
                  display:"flex",
                  alignItems:"center",
                  justifyContent:"flex-end",
                  gap: "4px",
                  color:"#2fafff"
                }}>
                  정답: {question.type === "OX"?question.answer==="0"?"O":"X":question.answer}
                </div>
              }
            </QuestionSolve__ResultContainer>
          );
        })}
      </QuestionSolve__ResultDetails__content>
    </>
  )
}