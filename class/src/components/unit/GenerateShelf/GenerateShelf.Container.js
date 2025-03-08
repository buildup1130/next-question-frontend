import { searchAllWorkBooks } from "@/utils/WorkbookManager";
import GenerateShelfUI from "./GenerateShelf.Presenter";
import { useAuth } from "@/utils/AuthContext";
import { useEffect, useState } from "react";

export default function GenerateShelfLogic(props){
    const {isAuthenticated,token} = useAuth();
    const [workBooks, setWorkBooks] = useState([]);

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
    }, [isAuthenticated, token]); // 의존성 배열에 isAuthenticated와 token 포함


    return(
        <GenerateShelfUI
            setIsCreated = {props.setIsCreated}
            isQuestionArr = {props.isQuestionArr}
            workBooks={workBooks}
        >
            
        </GenerateShelfUI>
    )
}