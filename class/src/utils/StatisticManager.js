import axios from "axios";

export const savingStat = async(questions, wrongArr, isTest,token) => {
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
            "http://localhost:8080/solving/save",
            { type: isTest?"MOCK":"NORMAL",
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