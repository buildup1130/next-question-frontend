import styled from "@emotion/styled";

export const SignUpContainer = styled.div`
  width: 100%;
  max-width: 500px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  position: relative;
  box-sizing: border-box;
`;

export const FormWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; // ✅ 수직 정렬
  padding: 60px 0 40px; // ✅ 로고 기준 여백 확보
`;

export const Logo = styled.img`
  width: 180px;
  margin-bottom: 24px;
`;

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 600;
  text-align: left;
  align-self: flex-start;
  padding-left: 10%;
  margin-bottom: 30px;
`;

export const FillForm = styled.form`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.label`
  display: block;
  font-size: 14px;
  margin-bottom: 6px;
  align-self: flex-start;
  padding-left: 2px;
  font-weight: 500;
`;

export const InputField = styled.input`
  width: 100%;
  height: 45px;
  padding: 12px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 6px;
  margin-bottom: 20px;
  outline: none;
  box-sizing: border-box;
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 13px;
  text-align: left;
  align-self: flex-start;
  padding-left: 2px;
  margin-top: -15px;
  margin-bottom: 10px;
`;

export const SubmitButton = styled.button`
  width: 100%;
  height: 45px;
  background-color: #a3baff;
  color: white;
  font-size: 15px;
  font-weight: 500;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 8px;
`;

export const BackButton = styled.button`
  position: absolute;
  top: 24px;
  left: 16px;
  background: none;
  border: none;
  cursor: pointer;
`;
