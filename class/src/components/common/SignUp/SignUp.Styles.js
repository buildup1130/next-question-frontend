import styled from "@emotion/styled";

export const SignUpContainer = styled.div`
  //회원가입 틀
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 50px 20px;
`;

export const FillForm = styled.form`
  //회원가입 폼
  width: 500px;
`;
export const InputWrapper = styled.div`
  //입력 필드 테두리
  width: 100%;
  margin-bottom: 15px;
`;

export const Label = styled.label`
  //입력 필드 라벨
  font-size: 20px;
  font-weight: bold;
  display: block;
  margin-bottom: 5px;
`;

export const InputField = styled.input`
  //입력 필드
  width: 100%;
  height: 35px;
  border: none;
  border-bottom: 1px solid #000;
  font-size: 20px;
  outline: none;
  padding: 5px;
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
  height: 40px;
  background-color: #000;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
`;
