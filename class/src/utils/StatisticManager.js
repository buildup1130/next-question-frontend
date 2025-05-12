import axios from "axios";

export const savingStat = async(questions, wrongArr, type,workBookId,token) => {
    console.log(`wrongArr = ${wrongArr}`)
    const infoArr = [];
    //가져온 데이터 객체화
    questions.map((data, index) => {
        const tmpObj = {
            encryptedQuestionId: questions[index].encryptedQuestionId,
            encryptedWorkBookId: questions[index].encryptedWorkbookId,
            wrong: wrongArr.includes(index)?true:false,
        }
        infoArr.push(tmpObj);
    })

    //workBook Id Array화
    let workBookIds;
    if (typeof workBookId === 'string' && workBookId.includes(',')) {
      workBookIds = workBookId.split(',');
    } else if (Array.isArray(workBookId)) {
      workBookIds = workBookId;
    } else {
      workBookIds = [workBookId];
    }

    const dtoObj = [];
    workBookIds.map((data,index) => {
        console.log(data);
        const tmpObj = {
            encryptedWorkBookId:data,
            info:infoArr.filter(obj => obj.encryptedWorkBookId === data)
        }
        dtoObj.push(tmpObj);
    })

    console.log(dtoObj);
    try{
        const response = await axios.post(
            "/api/member/solving/save",
            { type: type?"MOCK":"NORMAL",
              workBookInfoDTOS:dtoObj
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
            "/api/member/solving/histories/search",
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
            "/api/member/solving/daily/check",
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
            "/api/member/attendences/find",
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

export const fetchMainStat = async(token) => {
    try{
        const response = await axios.get(
            "/api/member/statistics/main",
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