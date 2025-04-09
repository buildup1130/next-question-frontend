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
  width: 100%;
  height: 45px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f0f0f0;
  font-size: 16px;
  outline: none;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

  &::placeholder {
    color: #000;
  }
`;

export const UserID = styled.div`
  width: 100%;
  margin-bottom: 30px;
`;

export const Password = styled.div`
  width: 100%;
  margin-bottom: 30px;
`;

// 에러 메시지를 항상 일정한 높이로 유지
export const ErrorMessageWrapper = styled.div`
  width: 100%;
  min-height: 20px; /* 에러 메시지가 없어도 높이를 유지 */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px; /* 버튼과 간격 유지 */
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  text-align: center;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
`;

export const LoginButton = styled.button`
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
  flex: 1;
  height: 45px;
  background-color: #000;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const GoogleLoginButtonWrapper = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const GoogleLoginButton = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: white;
  color: #444;
  border: 1px solid #ccc;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #f5f5f5;
  }
`;

export const GoogleIcon = styled.img`
  width: 20px;
  height: 20px;
`;
