import { useAuth } from "./AuthContext"
import axios from "axios"


export const createQuestion = (file,numOfQuestions,token) =>{
    const formData = new FormData();
    
    //isAuth 함수로 대체해야함    
    if(token){
        formData.append("file",file);
        formData.append("numOfQuestions", numOfQuestions);
        generateQuestion_member(formData,token)
    }else{
        formData.append("file",file);
        generateQuestion_nonMember(formData)
    }
}

export const generateQuestion_member = async(formData,token) =>{
    try {
        const response = await axios.post(
          "http://localhost:8080/member/question/upload",
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}` // 토큰 추가
                }
            }
        );
        console.log("회원 문제 생성");
        console.dir(response.data)
    }catch(error)
        {
            console.error(error);
        }
}

export const generateQuestion_nonMember = async(formData) =>{
    try {
        const response = await axios.post(
          "http://localhost:8080/public/question/upload",
        formData,
        {
            headers: {
                'Content-Type': 'multipart/form-data',
            } 
        }
        );
        console.log("비회원 문제 생성");
        console.dir(response.data);
    }catch(error)
        {
            console.error(error);
        }
}