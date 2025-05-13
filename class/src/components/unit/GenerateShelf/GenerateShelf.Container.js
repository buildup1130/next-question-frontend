import { createWorkbook, saveAtWorkBook, searchAllWorkBooks } from "@/utils/WorkbookManager";
import GenerateShelfUI from "./GenerateShelf.Presenter";
import { useAuth } from "@/utils/AuthContext";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { createQuestion } from "@/utils/QuestionGenerator";
import { toast } from "react-toastify";

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
    //삭제버튼이 보이는 문제 index
    const [visibleTrashIndex,setVisibleTrashIndex] = useState(null);
    //선택된 타입
    const [selectedType, setSelectedType] = useState([0,1,2]);

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

        //pdf가 아닌경우 예외처리
    useEffect(() => {
        console.log(props.file.name.slice(-3));
        if(props.file.name.slice(-3)!== "pdf"){
            toast.error("pdf 파일만 업로드 가능합니다.",{position:"top-center"});
            props.setFile(null);
            props.setIsCreated(false);
        }
    },[props.file])

    const HandleWorkBookName = (e) => {
        setCreatingName(e.target.value);
        console.log(creatingName);
    }

    const onCreateWorkBook = () => {
        console.log(creatingName);
        if(creatingName !== ""){
        createWorkbook(token, creatingName).then(
            () => {
                fetchWorkBooks();
                setCreatingName("");
                toast.success("문제집이 생성되었습니다.",{position:"top-center"})
            }
        ).catch(
            error =>{
                console.log(error);
                if (error.response && error.response.status === 500) {
                    // alert("이미 존재하는 문제집 이름입니다.");
                    toast.error("이미 존재하는 문제집 이름입니다.",{position:"top-center"});
                } else {
                    toast.error("문제집 생성 중 오류가 발생했습니다: " + error.message,{position:"top-center"});
                }
            }
        )
        setIsCreating(false);
    }else{
        toast.error("생성할 문제집의 이름을 입력해주세요.",{position:"top-center"});
    }
    }

    const onSaveQuestion = ()=> {
        if(savingWorkBook !== ""){
        const result = saveAtWorkBook(token,questionArr,savingWorkBook);
        }else{
            toast.error("문제집을 선택해주세요.",{position:"top-center"});
        }
    }

    const onCreateQuestion = () => {
        setSequence(1);
        const response = createQuestion(
                    props.file,
                    questionCount,
                    selectedType,
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

    const onClickSubmit = () => {
        if(savingWorkBook !== ""){
        onSaveQuestion();
        //setIsCreated(false);
        // setSequence(3);
        // setTimeout(() => {
        //     props.setIsCreated(false);
        //     props.setFile(null);
        // },1000);
        props.setIsCreated(false);
        props.setFile(null);
        toast.success("문제가 저장되었습니다.",{position:"top-center"});
    }else{
        toast.error("문제집을 선택해주세요.",{position:"top-center"})
    }
    }

    const onClickTrashCan = (index) =>{
        if(visibleTrashIndex === index){
            setVisibleTrashIndex(null);
        }else{
            setVisibleTrashIndex(index);
        }
    }

    const onClickDelete = (index) => {
    console.log(`${questionArr}${questionInfoArr}`);
    console.dir(questionArr);
    
    // pop() 대신 splice()를 사용하여 특정 인덱스의 요소를 제거
    const newQuestionArr = [...questionArr];
    const newQuestionInfoArr = [...questionInfoArr];
    
    newQuestionArr.splice(index, 1);
    newQuestionInfoArr.splice(index, 1);
    
    setQuestionArr(newQuestionArr);
    setQuestionInfoArr(newQuestionInfoArr);
    
    // 삭제 후 삭제 버튼 상태 초기화
    setVisibleTrashIndex(null);
    }

      //0: 객관식 , 1: 참/거짓, 2:주관식
    const onClickType = (type) => {
        const index = selectedType.indexOf(type);
        if (index !== -1) {
        const newSelectedType = [...selectedType];
        newSelectedType.splice(index, 1);
        setSelectedType(newSelectedType);
        } else {
        setSelectedType([...selectedType, type]);
        }
        console.log(selectedType);
    };


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
            onClickSubmit = {onClickSubmit}
            visibleTrashIndex = {visibleTrashIndex}
            setVisibleTrashIndex = {setVisibleTrashIndex}
            onClickTrashCan = {onClickTrashCan}
            onClickDelete = {onClickDelete}
            creatingName = {creatingName}
            onClickType = {onClickType}
            selectedType = {selectedType}
            setSelectedType = {setSelectedType}
        >
            
        </GenerateShelfUI>
    )
}