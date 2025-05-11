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

export const BackButton = styled.button`
  position: absolute;
  top: 24px;
  left: 16px;
  background: none;
  border: none;
  cursor: pointer;
`;

export const FormWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FillForm = styled.form`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: auto;
  margin-bottom: auto;
`;

export const Logo = styled.img`
  width: 180px;
  margin-bottom: 24px;
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

export const ErrorMessage = styled.p`
  color: red;
  font-size: 13px;
  margin-top: 6px;
  margin-bottom: -10px;
  padding-left: 2px;
`;

export const SignUpButton = styled.button`
  width: 100%;
  height: 45px;
  background-color: #808fff;
  color: white;
  font-size: 15px;
  font-weight: 500;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 16px;
`;
