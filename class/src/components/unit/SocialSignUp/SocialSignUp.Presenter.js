import { useRouter } from "next/router";
import { BackIcon } from "@/utils/SvgProvider";

import {
  SignUpContainer,
  BackButton,
  FormWrapper,
  Logo,
  FillForm,
  InputField,
  InputFieldSmallPlaceholder,
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
      <BackButton onClick={() => router.push("/Login")}>
        <BackIcon />
      </BackButton>

      <FormWrapper>
        <Logo src="/image/Logo_Full.png" alt="logo" />

        <FillForm onSubmit={onSubmit}>
          <InputField
            type="email"
            name="email"
            value={email}
            readOnly
            placeholder="이메일"
          />

          <InputFieldSmallPlaceholder
            type="text"
            name="nickname"
            value={nickname}
            onChange={onChange}
            placeholder="닉네임"
          />

          {error && <ErrorMessage>{error}</ErrorMessage>}

          <SubmitButton type="submit">소셜 회원가입 완료</SubmitButton>
        </FillForm>
      </FormWrapper>
    </SignUpContainer>
  );
}
