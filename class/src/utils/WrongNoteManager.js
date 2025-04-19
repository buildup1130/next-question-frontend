export const getWrongNote = async (
  token,
  startDate,
  endDate,
  periodType = "custom"
) => {
  try {
    const response = await fetch("http://localhost:8080/solving/wrong/search", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ startDate, endDate, periodType }),
    });

    if (!response.ok) {
      if (response.status === 403) return { questions: [] };
      const errorText = await response.text();
      throw new Error("서버 오류: " + errorText);
    }

    const result = await response.json();
    return result;
  } catch (err) {
    console.error("오답노트 조회 실패:", err);
    return null;
  }
};
