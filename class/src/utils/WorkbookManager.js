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
                { encryptedQuestionInfoIds: Questions,
                    encryptedWorkBookId: workbookId
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

    export const loadNormalQuestion = async(token, id, options) => {
        try{
            // console.log(`id >> ${id}`);
            const response = await axios.post(
                "http://localhost:8080/member/solving/normal/search",
                { 
                    encryptedWorkBookId: id,
                    options:options,
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

    export const loadDailyQuestion = async(token) => {
        try{
            const response = await axios.get(
                "http://localhost:8080/member/solving/daily/search",             
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
