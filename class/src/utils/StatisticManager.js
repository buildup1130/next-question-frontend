import axios from "axios";

export const savingStat = async(questions, wrongArr, type,workBookId,token) => {
    console.log(`wrongArr = ${wrongArr}`)
    const infoArr = [];
    questions.map((data, index) => {
        const tmpObj = {
            encryptedQuestionId: questions[index].encryptedQuestionId,
            wrong: wrongArr.includes(index)?true:false,
        }
        infoArr.push(tmpObj);
    })
    console.log(infoArr);
    try{
        const response = await axios.post(
            "http://localhost:8080/member/solving/save",
            { type: type?"MOCK":"NORMAL",
              encryptedWorkBookId: workBookId,
              info:infoArr
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

export const fetchHistories = async(token) => {
    try{
        const response = await axios.get(
            "http://localhost:8080/member/solving/histories/search",
            {
                headers:{
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            return response.data;
    }catch(error){
        console.error(error);
    }
}

export const savingCheck = async(questions, wrongArr,token) => {
    console.log(`wrongArr = ${wrongArr}`)
    const infoArr = [];
    questions.map((data, index) => {
        const tmpObj = {
            encryptedQuestionId: questions[index].encryptedQuestionId,
            wrong: wrongArr.includes(index)?true:false,
        }
        infoArr.push(tmpObj);
    })
    console.log(infoArr);
    try{
        const response = await axios.post(
            "http://localhost:8080/member/solving/daily/check",
              infoArr,
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

export const fetchCheck = async(token) => {
    try{
        const response = await axios.get(
            "http://localhost:8080/member/attendences/find",
            {
                headers:{
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            return response.data;
    }catch(error){
        console.error(error);
    }
}
