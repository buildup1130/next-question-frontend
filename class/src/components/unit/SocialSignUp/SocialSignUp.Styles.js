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
  font-size: 24px;
  cursor: pointer;
`;

export const FormWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.img`
  width: 180px;
  margin-bottom: 40px;
`;

export const FillForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputField = styled.input`
  width: 80%;
  height: 40px;
  padding: 10px 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  background-color: white;
  font-size: 14px;
  outline: none;
  margin-bottom: 20px;

  &::placeholder {
    font-size: 12px;
    color: #aaa;
    line-height: 1; // ✅ placeholder가 너무 아래로 내려가지 않게
  }
`;

export const InputFieldSmallPlaceholder = styled.input`
  width: 80%;
  height: 40px;
  padding: 1px 8px 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  background-color: white;
  font-size: 14px;
  outline: none;
  margin-bottom: 20px;

  &::placeholder {
    font-size: 12px;
    color: #aaa;
    line-height: 1;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  text-align: center;
  min-height: 20px;
  margin-bottom: 10px;
`;

export const SubmitButton = styled.button`
  width: 80%;
  height: 40px;
  background-color: #808fff;
  color: white;
  font-size: 15px;
  font-weight: 500;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 8px;
`;
