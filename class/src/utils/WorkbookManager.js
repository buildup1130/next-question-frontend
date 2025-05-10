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
    
    // id가 문자열이고 쉼표가 포함되어 있다면 배열로 분할
    let workBookIds;
    if (typeof id === 'string' && id.includes(',')) {
      workBookIds = id.split(',');
    } else if (Array.isArray(id)) {
      workBookIds = id;
    } else {
      workBookIds = [id];
    }

    const payload = {
      encryptedWorkBookIds: workBookIds,
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
    let message = "알 수 없는 오류";

    try {
      const errorJson = await res.clone().json();
      message = errorJson.message || errorJson.error || message;

      if (res.status === 500 && message.includes("동일한 문제가 존재")) {
        throw new Error(
          "🚫 대상 문제집에 이미 같은 문제가 있어 이동할 수 없습니다."
        );
      }
    } catch {
      try {
        const fallback = await res.text();
        message = fallback || message;
      } catch {
        message = "응답 파싱 중 오류 발생";
      }
    }

    throw new Error(`문제 이동 실패: ${message}`);
  }

  return res.json();
};

export const fetchQuestionType = async (token, idArr) => {
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
    console.error("📛 문제 유형 조회 에러:", error);
  }
};
