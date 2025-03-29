import styled from "@emotion/styled";

export const LoginContainer = styled.div`
  width: 100%;
  max-width: 500px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 20px;

  @media (max-width: 768px) {
    height: auto;
    padding: 60px 20px;
  }
`;

export const InputField = styled.input`
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

  @media (max-width: 480px) {
    font-size: 14px;
    height: 40px;
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

export const ErrorMessageWrapper = styled.div`
  width: 100%;
  min-height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
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

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
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

  @media (max-width: 480px) {
    flex: none;
    width: 80%;
    max-width: 300px;
    font-size: 14px;
    height: 40px;
  }
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

  @media (max-width: 480px) {
    flex: none;
    width: 80%;
    max-width: 300px;
    font-size: 14px;
    height: 40px;
  }
`;

export const SocialLoginButton = styled.button`
  margin-top: 20px;
  height: 45px;
  background-color: #db4437;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 0 20px;
  font-size: 16px;
  cursor: pointer;

  @media (max-width: 480px) {
    width: 50%;
    max-width: 300px;
    font-size: 14px;
    height: 40px;
  }
`;
