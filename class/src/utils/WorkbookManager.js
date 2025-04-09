import axios from "axios";

export const searchAllWorkBooks = async (token) => {
  try {
    const response = await axios.get(
      "http://localhost:8080/member/workBooks/search",
      {
        headers: {
          Authorization: `Bearer ${token}`, // 토큰 추가
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const createWorkbook = async (token, name) => {
  try {
    const response = await axios.post(
      "http://localhost:8080/member/workBook/create",
      { workBookName: name },
      {
        headers: {
          Authorization: `Bearer ${token}`, // 토큰 추가
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const saveAtWorkBook = async (token, Questions, workbookId) => {
  try {
    const response = await axios.post(
      "http://localhost:8080/member/questions/save",
      { encryptedQuestionInfoIds: Questions, encryptedWorkBookId: workbookId },
      {
        headers: {
          Authorization: `Bearer ${token}`, // 토큰 추가
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const loadNormalQuestion = async (token, id, options) => {
  try {
    console.log(`id >> ${id}`);
    const response = await axios.post(
      "http://localhost:8080/solving/normal/search",
      {
        encryptedWorkBookId: id,
        options: options,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`, // 토큰 추가
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};


export const getWorkbookQuestions = async (token, workBookId, memberId) => {
  try {
    const response = await axios.get(
      "http://localhost:8080/member/workBook/search/questions",
      {
        headers: {
          Authorization: `Bearer ${token}`,
          // Content-Type은 GET에서는 제거
        },
        params: {
          workBookId: workBookId,
          memberId: memberId,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("문제 조회 실패:", error.response?.data || error.message);
  }
};

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
