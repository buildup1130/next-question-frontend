import axios from "axios"


    export const searchAllWorkBooks = async(token) =>{
        try{
        const response = await axios.get(
            "http://localhost:8080/member/workBooks/search",
            {
            headers: {
                'Authorization': `Bearer ${token}` // 토큰 추가
            }
            })
            return response.data;
        }catch(error){
            console.error(error);
        }
    }

    export const createWorkbook = async(token,name) =>{
        try{
        const response = await axios.post(
            "http://localhost:8080/member/workBook/create",
            { workBookName: name },
            {
                headers: {
                    'Authorization': `Bearer ${token}`, // 토큰 추가
                    'Content-Type': 'application/json'
                }
            });
            return response.data;
        }catch(error){
            console.error(error);
        }
    }

    export const saveAtWorkBook = async(token, Questions, workbookId) => {
        try{
            const response = await axios.post(
                "http://localhost:8080/member/questions/save",
                { encryptedQuestionIds: Questions,
                  encryptedWorkBookInfoId: workbookId
                 },
                {
                    headers: {
                        'Authorization': `Bearer ${token}`, // 토큰 추가
                        'Content-Type': 'application/json'
                    }
                });
                return response.data;
        }catch(error){
            console.error(error);
        }
        
    }