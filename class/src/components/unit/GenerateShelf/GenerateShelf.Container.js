import { createWorkbook, saveAtWorkBook, searchAllWorkBooks } from "@/utils/WorkbookManager";
import GenerateShelfUI from "./GenerateShelf.Presenter";
import { useAuth } from "@/utils/AuthContext";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { createQuestion } from "@/utils/QuestionGenerator";

export default function GenerateShelfLogic(props){
    const {isAuthenticated,token} = useAuth();
    const router = useRouter();

    //DB에서 받아온 문제집 배열
    const [workBooks, setWorkBooks] = useState([]);
    //문제 생성 중
    const [isCreating, setIsCreating] = useState(false);
    //생성할 문제집의 이름
    const [creatingName, setCreatingName] = useState("");
    //문제를 저장한 문제집 ID
    const [savingWorkBook, setSavingWorkBook] = useState("");
    //모달 시퀀스
    const [sequence,setSequence] = useState(0);
    //생성할 문제 수
    const [questionCount, setQuestionCount] = useState(5);
    //생성된 문제 Id
    const [questionArr, setQuestionArr] = useState(undefined);
    //생성된 문제 정보
    const [questionInfoArr, setQuestionInfoArr] = useState(undefined);

    // 비동기 작업을 처리하는 함수
    // DB에서 문제집 배열을 가져오는 함수
    const fetchWorkBooks = async () => {
        if (isAuthenticated && token) {
            try {
                const result = await searchAllWorkBooks(token);
                setWorkBooks(result);
                console.log(`워크북 => ${result?.map((element) => {console.log(element)})}`);
            } catch (error) {
                console.error("워크북 불러오기 실패:", error);
            }
        }
    };



    useEffect(() => {
        // 함수 실행
        fetchWorkBooks();
    }, [isAuthenticated, token,isCreating]); // 의존성 배열에 isAuthenticated와 token 포함
        // isCreating 변경 마다 워크북 동기화

    const HandleWorkBookName = (e) => {
        setCreatingName(e.target.value);
        console.log(creatingName);
    }

    const onCreateWorkBook = () => {
        console.log(creatingName);
        createWorkbook(token, creatingName);
        setIsCreating(false);
    }

    const onSaveQuestion = ()=> {
        const result = saveAtWorkBook(token,questionArr,savingWorkBook);
    }

    const onCreateQuestion = () => {
        setSequence(1);
        const response = createQuestion(
                    props.file,
                    questionCount,
                    token,
                    isAuthenticated
                  ).then(
                    (result) =>{
                      if(isAuthenticated){
                      setQuestionArr(result.questionArr);
                      setQuestionInfoArr(result.questionInfoArr);
                      }else{
                        console.log(result.questionInfoArr)
                        localStorage.setItem("tempQuestionData",JSON.stringify(result.questionInfoArr));
                        router.push({
                            pathname:"/Question",
                            query:{
                                type:3
                            }
                        })
                      }
                      console.log(`${result.questionArr} ${result.questionInfoArr}`)
                    }
                  );
    }

    const handleNonMember = () =>{

    }
    return(
        <GenerateShelfUI
            setIsCreated = {props.setIsCreated}
            workBooks={workBooks}
            isCreating = {isCreating}
            setIsCreating = {setIsCreating}
            HandleWorkBookName = {HandleWorkBookName}
            onCreateWorkBook = {onCreateWorkBook}
            fetchWorkBooks = {fetchWorkBooks}
            savingWorkBook = {savingWorkBook}
            setSavingWorkBook = {setSavingWorkBook}
            onSaveQuestion = {onSaveQuestion}
            questionInfoArr = {questionInfoArr}
            sequence = {sequence}
            setSequence = {setSequence}
            numArr = {props.numArr}
            questionCount = {questionCount}
            setQuestionCount = {setQuestionCount}
            onCreateQuestion = {onCreateQuestion}
            questionArr = {questionArr}
            setFile = {props.setFile}
        >
            
        </GenerateShelfUI>
    )
}