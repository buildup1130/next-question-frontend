import styled from "@emotion/styled";

export const LoginContainer = styled.div`
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
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const InputField = styled.input`
  width: 80%;
  height: 40px;
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  background-color: white;
  font-size: 14px;
  outline: none;
`;

export const UserID = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const Password = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
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
`;

export const LoginButton = styled.button`
  width: 80%;
  height: 40px;
  background-color: #a3baff;
  color: white;
  font-size: 15px;
  font-weight: 500;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 8px;
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

export const DividerWithText = styled.div`
  width: 100%;
  margin: 24px 0 12px;
  text-align: center;
  position: relative;
  font-size: 13px;
  color: #999;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    width: 40%;
    height: 1px;
    background: #ddd;
  }

  &::before {
    left: 0;
  }

  &::after {
    right: 0;
  }
`;

export const GoogleLoginButton = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: white;
  color: #444;
  border: 1px solid #ccc;
  padding: 10px 18px;
  border-radius: 20px;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);

  &:hover {
    background-color: #f5f5f5;
  }
`;

export const GoogleIcon = styled.img`
  width: 20px;
  height: 20px;
`;

export const Logo = styled.img`
  width: 180px;
  margin-bottom: 40px;
`;

export const BackButton = styled.button`
  position: absolute;
  top: 24px;
  left: 16px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

export const LoginTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  margin: 24px 0 30px;
  text-align: left;
  line-height: 1.5;
  width: 100%;
  padding-left: 10%;
  box-sizing: border-box;
`;

export const LoginSubText = styled.p`
  font-size: 14px;
  margin: 16px 0;
  color: #444;
  text-align: center;

  span {
    text-decoration: underline;
    cursor: pointer;
    color: #333;
  }
`;
