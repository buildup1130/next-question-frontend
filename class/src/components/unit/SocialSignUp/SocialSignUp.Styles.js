import styled from "@emotion/styled";

export const SignUpContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  padding: 40px 0px;
`;

export const Label = styled.label`
  display: block;
  margin-top: 15px;
  margin-bottom: 6px;
  font-weight: bold;
`;

export const InputField = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 15px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #fff;
`;

export const ErrorMessage = styled.p`
  color: red;
  margin-bottom: 15px;
  font-size: 14px;
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: black;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
