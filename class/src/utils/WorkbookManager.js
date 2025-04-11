import axios from "axios";

export const searchAllWorkBooks = async (token) => {
  console.log("Sending request with token:", token);
  try {
    const response = await axios.post(
      "http://localhost:8080/member/workBooks/search",
      {}, // POST 방식이므로 body는 비어 있어도 {} 넘겨야 함
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

export const getWorkbookQuestions = async (token, encryptedWorkBookId) => {
  try {
    const response = await axios.post(
      "http://localhost:8080/member/workBook/search/questions",
      {
        encryptedWorkBookId: encryptedWorkBookId, // ✅ 정확한 key 사용
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

const handleDelete = async () => {
  if (selectedIds.length === 0) return;
  console.log("🗑 삭제 요청할 문제 ID 목록:", selectedIds);

  try {
    const res = await fetch("http://localhost:8080/member/questions/delete", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(selectedIds),
    });

    if (!res.ok) throw new Error("요청 실패");

    const text = await res.text();
    console.log("🟢 서버 응답 메시지:", text);

    setQuestions((prev) =>
      prev.filter((q) => !selectedIds.includes(q.encryptedQuestionId))
    );
    setSelectedIds([]);
    setDeleteMode(false);
  } catch (err) {
    console.error("❌ 삭제 중 에러 발생:", err);
    alert("삭제 요청 중 오류 발생");
  }
};

export const loadNormalQuestion = async (token, id, options) => {
  try {
    const payload = {
      encryptedWorkBookIds: [id],
      options: options,
    };

    console.log("🔥 API 요청 payload:", payload);

    const response = await axios.post(
      "http://localhost:8080/member/solving/normal/search",
      payload, // 또는 JSON.stringify(payload) 로도 테스트
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

export const moveQuestions = async (token, sourceId, targetId, questionIds) => {
  const body = {
    encryptedSourceWorkBookId: sourceId,
    encryptedTargetWorkBookId: targetId,
    encryptedQuestionInfoIds: questionIds,
  };

  const res = await fetch("http://localhost:8080/member/questions/move", {
    method: "POST", // ✅ POST로 유지
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const text = await res.text();
    console.error("🚨 서버 응답:", text);
    throw new Error("문제 이동 실패");
  }

  return await res.json();
};
