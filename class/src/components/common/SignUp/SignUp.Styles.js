import styled from "@emotion/styled";

export const SignUpContainer = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 50px 20px;

  @media (max-width: 480px) {
    padding: 30px 16px;
  }
`;

export const FillForm = styled.form`
  width: 100%;
  max-width: 500px;
`;

export const InputWrapper = styled.div`
  width: 100%;
  margin-bottom: 15px;
`;

export const Label = styled.label`
  font-size: 20px;
  font-weight: bold;
  display: block;
  margin-bottom: 5px;

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const InputField = styled.input`
  width: 100%;
  height: 35px;
  border: none;
  border-bottom: 1px solid #000;
  font-size: 20px;
  outline: none;
  padding: 5px;

  @media (max-width: 480px) {
    height: 30px;
    font-size: 16px;
    padding: 4px;
  }
`;

export const EmailWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const IdInputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
  }
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

  @media (max-width: 480px) {
    height: 36px;
    font-size: 14px;
  }
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
