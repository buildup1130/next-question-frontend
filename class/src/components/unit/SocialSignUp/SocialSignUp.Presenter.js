import { useRouter } from "next/router";
import {
  SignUpContainer,
  Label,
  FillForm,
  InputField,
  ErrorMessage,
  SubmitButton,
  Logo,
  BackButton,
  Title,
  FormWrapper,
} from "./SocialSignUp.Styles";

export default function SocialSignUpUI({
  email,
  nickname,
  error,
  onChange,
  onSubmit,
}) {
  const router = useRouter();

  if (!email) return <div>이메일 정보를 불러오는 중...</div>;

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
        <Logo src="/image/Logo.png" alt="logo" />
        <Title>소셜 회원가입</Title>

        <FillForm onSubmit={onSubmit}>
          <InputField value={email} disabled />
          <InputField
            type="text"
            name="nickname"
            value={nickname}
            onChange={onChange}
            placeholder="닉네임"
            required
          />

          {error && <ErrorMessage>{error}</ErrorMessage>}

          <SubmitButton type="submit">소셜 회원가입 완료</SubmitButton>
        </FillForm>
      </FormWrapper>
    </SignUpContainer>
  );
}
