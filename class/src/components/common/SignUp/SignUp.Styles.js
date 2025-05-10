import styled from "@emotion/styled";

export const SignUpContainer = styled.div`
  width: 100%;
  max-width: 500px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 24px 20px;
  position: relative;
  box-sizing: border-box;
`;

export const FormWrapper = styled.div`
  flex-grow: 1; // 💡 남은 공간을 모두 차지
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; // 💡 수직 중앙 정렬
`;

export const FillForm = styled.form`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: auto; // 하단 여백 확보용
  margin-bottom: auto; // 상단 여백 확보용 → 결과적으로 가운데 정렬됨
`;

export const InputWrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

export const InputField = styled.input`
  width: 100%;
  height: 45px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 14px;
  outline: none;
  padding: 12px;
  box-sizing: border-box;
`;

export const EmailWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const IdInputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const SignUpButton = styled.button`
  width: 100%;
  height: 45px;
  background-color: #a3baff;
  color: white;
  font-size: 15px;
  font-weight: 500;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 20px;
`;

export const ErrorMessageWrapper = styled.div`
  width: 100%;
  height: 0px; // ✅ 기본 공간 차지 안 함
  margin-top: -10px; // ✅ 위 간격 줄임
  margin-bottom: 10px; // ✅ 아래 입력창과 일정 간격
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 2px;

  // 에러 없을 때는 공간 없음 → 에러 있을 때만 높이 생김
  & > p {
    height: auto;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 13px;
  text-align: left;
`;

export const Logo = styled.img`
  width: 180px;
  margin-bottom: 24px;
`;

export const BackButton = styled.button`
  position: absolute;
  top: 24px;
  left: 16px;
  background: none;
  border: none;
  cursor: pointer;
`;

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 600;
  text-align: left;
  align-self: flex-start;
  margin-bottom: 30px;
`;
