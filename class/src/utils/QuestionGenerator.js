// QuestionGenerator.js - 개선된 버전
import axios from "axios";

// 상태 업데이트 함수를 파라미터로 받지 않고 데이터만 반환하는 방식
export const createQuestion = async (file, numOfQuestions,selectedType, token, isAuthenticated) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("multiple", selectedType.includes(0));
  formData.append("ox", selectedType.includes(1));
  formData.append("blank", selectedType.includes(2));

  if (isAuthenticated) {
    formData.append("questionCount", numOfQuestions);
    
    console.log("회원")
    try {
      const result = await generateQuestion_member(formData, token);
      console.log(result);
      return {
        questionArr: result.map((item) => item.encryptedQuestionInfoId),
        questionInfoArr: result.map((item) => ({
          name:
            item.type === "FILL_IN_THE_BLANK"
              ? item.name.replace("{BLANK}", "OOO")
              : item.name,
          type: item.type,
          answer: item.answer,
          opt: item.opt,
        })),
      };
    } catch (error) {
      console.error(error);
      return { error };
    }
  } else {
    try {
      const result = await generateQuestion_nonMember(formData);
      console.log(result);
      return {
        questionArr: null,
        questionInfoArr: result.questions.map((item) => ({
          name:
            item.type === "FILL_IN_THE_BLANK"
              ? item.name.replace("{BLANK}", "OOO")
              : item.name,
          type: item.type,
          answer: item.answer,
          opt: item.option,
        })),
      };
    } catch (error) {
      console.error(error);
      return { error };
    }
  }
};

const generateQuestion_member = async (formData, token) => {
  const response = await axios.post(
    "/api/member/questions/upload",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  console.log("회원 문제 생성");
  console.dir(response.data);
  return response.data;
};

const generateQuestion_nonMember = async (formData) => {
  const response = await axios.post(
    "/api/public/questions/upload",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  console.log("비회원 문제 생성");
  console.dir(response.data);
  return response.data;
};
