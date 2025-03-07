import styled from "@emotion/styled";

export const LoginContainer = styled.div`
  width: 100%;
  max-width: 500px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 80px;
`;

export const InputField = styled.input`
  //입력 하는 필드
  width: 100%;
  height: 45px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f5f5f5;
  font-size: 16px;
  outline: none;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

  &::placeholder {
    color: #ccc;
  }
`;

export const UserID = styled.div`
  //아이디 입력 필드 테두리
  width: 100%;
  margin-bottom: 30px;
`;

export const Password = styled.div`
  //비번 입력 필드 테두리
  width: 100%;
  margin-bottom: 30px;
`;

export const ButtonWrapper = styled.div`
  //버튼 입력 필드 테두리리
  display: flex;
  width: 100%;
  gap: 10px;
`;

export const LoginButton = styled.button`
  //로그인 버튼튼
  flex: 1;
  height: 45px;
  background-color: #000;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const SignUpButton = styled.button`
  //회원가입 버튼튼
  flex: 1;
  height: 45px;
  background-color: #000;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
