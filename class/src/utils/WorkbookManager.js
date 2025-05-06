import axios from "axios";

export const searchAllWorkBooks = async (token) => {
  try {
    const response = await axios.post(
      "http://localhost:8080/member/workBooks/search",
      {},
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching books:", error);
    throw error;
  }
};

export const createWorkbook = async (token, name) => {
  const response = await axios.post(
    "http://localhost:8080/member/workBook/create",
    { workBookName: name },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};

export const saveAtWorkBook = async (token, Questions, workbookId) => {
  try {
    const response = await axios.post(
      "http://localhost:8080/member/questions/save",
      { encryptedQuestionInfoIds: Questions, encryptedWorkBookId: workbookId },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getWorkbookQuestions = async (token, encryptedWorkBookId) => {
  try {
    const response = await axios.post(
      "http://localhost:8080/member/workBook/search/questions",
      {
        encryptedWorkBookId: encryptedWorkBookId,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("문제 조회 실패:", error.response?.data || error.message);
  }
};

export const deleteWorkBooks = async (token, encryptedWorkBookIds) => {
  try {
    const response = await axios({
      method: "delete", // ✅ 객체 형태로 요청
      url: "http://localhost:8080/member/workBooks/delete",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      data: encryptedWorkBookIds, // ✅ 반드시 이렇게 넘겨야 DELETE + body 형식 됨
    });

    return response.data;
  } catch (error) {
    console.error("문제집 삭제 실패:", error.response?.data || error.message);
    throw error;
  }
};

export const loadNormalQuestion = async (token, id, options) => {
  try {
    const payload = {
      encryptedWorkBookIds: Array.isArray(id) ? id : [id],
      options,
    };

    const response = await axios.post(
      "http://localhost:8080/member/solving/normal/search",
      payload,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("📛 API 호출 에러:", error);
    throw error;
  }
};

export const loadDailyQuestion = async (token) => {
  try {
    const response = await axios.get(
      "http://localhost:8080/member/solving/daily/search",
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const moveQuestions = async (
  token,
  sourceId,
  targetId,
  encryptedQuestionInfoIds
) => {
  const body = {
    encryptedSourceWorkbookId: sourceId,
    encryptedTargetWorkbookId: targetId,
    encryptedQuestionInfoIds,
  };

  const res = await fetch("http://localhost:8080/member/questions/move", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const errorMessage = await res.text();
    throw new Error(`문제 이동 실패: ${errorMessage}`);
  }

  return res.json();
};

export const fetchQuestionType = async (token, idArr) => {
  console.log(typeof idArr);

  //배열이 아닐 시 배열로 변환
  if (typeof idArr !== "object") {
    idArr = [idArr];
  }

  try {
    const response = await axios.post(
      "http://localhost:8080/member/solving/normal/search/type",
      idArr,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
