import { useRouter } from "next/router";
import {
  SignUpContainer,
  InputWrapper,
  InputField,
  SignUpButton,
  FormWrapper,
  FillForm,
  ErrorMessageWrapper,
  ErrorMessage,
  Logo,
  BackButton,
  Title,
} from "./SignUp.Styles";

export default function SignUpUI({ form, onChange, onSubmit, error }) {
  const router = useRouter();

  return (
    <SignUpContainer>
      <BackButton onClick={() => router.push("/Login")}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </BackButton>

      <FormWrapper>
        <FillForm onSubmit={onSubmit}>
          <Logo src="/image/Logo.png" alt="logo" />

          <InputWrapper>
            <InputField
              type="text"
              name="userId"
              value={form.userId}
              onChange={onChange}
              placeholder="아이디"
              required
            />
          </InputWrapper>

          <InputWrapper>
            <InputField
              type="password"
              name="password"
              value={form.password}
              onChange={onChange}
              placeholder="비밀번호"
              required
            />
          </InputWrapper>

          <InputWrapper>
            <InputField
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={onChange}
              placeholder="비밀번호 확인"
              required
            />
          </InputWrapper>

          <ErrorMessageWrapper>
            {error && <ErrorMessage>{error}</ErrorMessage>}
          </ErrorMessageWrapper>

          <InputWrapper>
            <InputField
              type="email"
              name="email"
              value={form.email}
              onChange={onChange}
              placeholder="abc@naver.com"
              required
            />
          </InputWrapper>

          <InputWrapper>
            <InputField
              type="text"
              name="nickname"
              value={form.nickname}
              onChange={onChange}
              placeholder="닉네임"
              required
            />
          </InputWrapper>

          <SignUpButton type="submit">회원가입</SignUpButton>
        </FillForm>
      </FormWrapper>
    </SignUpContainer>
  );
}
