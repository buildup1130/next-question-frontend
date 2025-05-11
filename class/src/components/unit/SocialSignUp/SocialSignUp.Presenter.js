import { useRouter } from "next/router";
import { BackIcon } from "@/utils/SvgProvider";

import {
  SignUpContainer,
  BackButton,
  FormWrapper,
  Logo,
  FillForm,
  InputField,
  ErrorMessage,
  SubmitButton,
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
      <BackButton onClick={() => router.push("/")}>
        <BackIcon />
      </BackButton>

      <FormWrapper>
        <Logo src="/image/Logo.png" alt="logo" />

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
