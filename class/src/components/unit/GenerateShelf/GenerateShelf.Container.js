import { createWorkbook, searchAllWorkBooks } from "@/utils/WorkbookManager";
import GenerateShelfUI from "./GenerateShelf.Presenter";
import { useAuth } from "@/utils/AuthContext";
import { useEffect, useState } from "react";

export default function GenerateShelfLogic(props){
    const {isAuthenticated,token} = useAuth();
    const [workBooks, setWorkBooks] = useState([]);
    const [isCreating, setIsCreating] = useState(false);
    const [creatingName, setCreatingName] = useState("");

    useEffect(() => {
        // 비동기 작업을 처리하는 함수
        const fetchWorkBooks = async () => {
            if (isAuthenticated && token) {
                try {
                    const result = await searchAllWorkBooks(token);
                    setWorkBooks(result);
                    console.log(`워크북 => ${result}`);
                } catch (error) {
                    console.error("워크북 불러오기 실패:", error);
                }
            }
        };
        
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

    return(
        <GenerateShelfUI
            setIsCreated = {props.setIsCreated}
            isQuestionArr = {props.isQuestionArr}
            workBooks={workBooks}
            isCreating = {isCreating}
            setIsCreating = {setIsCreating}
            HandleWorkBookName = {HandleWorkBookName}
            onCreateWorkBook = {onCreateWorkBook}
        >
            
        </GenerateShelfUI>
    )
}