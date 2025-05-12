import styled from "@emotion/styled";

export const LoginContainer = styled.div`
  width: 100%;
  max-width: 500px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 24px 16px;
  position: relative;
  box-sizing: border-box;
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

export const FormWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-top: 80px;
`;

export const Logo = styled.img`
  width: 80%;
  max-width: 280px;
  margin-bottom: 24px;

  @media (min-width: 768px) {
    max-width: 280px;
  }

  @media (min-width: 1024px) {
    max-width: 320px;
  }
`;

export const UserID = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const Password = styled(UserID)`
  margin-bottom: 10px;
`;

export const InputField = styled.input`
  width: 100%;
  max-width: 300px;
  height: 40px;
  padding: 1px 8px 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  background-color: white;
  font-size: 14px;
  outline: none;

  &::placeholder {
    font-size: 12px;
    color: #aaa;
  }
`;

export const KeepLoginWrapper = styled.div`
  width: 100%;
  max-width: 300px;
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 10px;
`;

export const KeepLoginCheckbox = styled.input`
  width: 15px;
  height: 15px;
  accent-color: #65558f;
  cursor: pointer;
  vertical-align: middle;
`;

export const KeepLoginLabel = styled.label`
  font-size: 13px;
  color: #8b8b8c;
  vertical-align: middle;
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  text-align: center;
`;

export const LoginButton = styled.button`
  width: 100%;
  max-width: 300px;
  height: 42px;
  background-color: #808fff;
  color: white;
  font-size: 15px;
  font-weight: 500;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 8px;
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
