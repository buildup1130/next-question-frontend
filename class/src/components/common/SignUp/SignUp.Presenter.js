import { useRouter } from "next/router";
import { BackIcon } from "@/utils/SvgProvider";

import {
  SignUpContainer,
  InputWrapper,
  InputField,
  SignUpButton,
  FormWrapper,
  FillForm,
  ErrorMessage,
  Logo,
  BackButton,
} from "./SignUp.Styles";

export default function SignUpUI({ form, onChange, onSubmit, errors }) {
  const router = useRouter();

  const renderInput = (type, name, placeholder) => (
    <InputWrapper>
      <InputField
        type={type}
        name={name}
        value={form[name]}
        onChange={onChange}
        placeholder={placeholder}
      />
      {errors[name] && <ErrorMessage>{errors[name]}</ErrorMessage>}
    </InputWrapper>
  );

  return (
    <SignUpContainer>
      <BackButton onClick={() => router.push("/Login")}>
        <BackIcon />
      </BackButton>

      <FormWrapper>
        <FillForm onSubmit={onSubmit}>
          <Logo src="/image/Logo.png" alt="logo" />

          {renderInput("text", "userId", "아이디")}
          {renderInput("password", "password", "비밀번호")}
          {renderInput("password", "confirmPassword", "비밀번호 확인")}
          {renderInput("email", "email", "이메일")}
          {renderInput("text", "nickname", "닉네임")}

          <SignUpButton type="submit">회원가입</SignUpButton>
        </FillForm>
      </FormWrapper>
    </SignUpContainer>
  );
}
