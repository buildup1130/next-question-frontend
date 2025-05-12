import { useRouter } from "next/router";
import { BackIcon } from "@/utils/SvgProvider";

import {
  LoginContainer,
  FormWrapper,
  BackButton,
  Logo,
  UserID,
  Password,
  InputField,
  KeepLoginWrapper,
  KeepLoginCheckbox,
  KeepLoginLabel,
  ErrorMessage,
  LoginButton,
  LoginSubText,
  DividerWithText,
  GoogleLoginButtonWrapper,
  GoogleLoginButton,
  GoogleIcon,
} from "./Login.Styles";

export default function LoginUI({
  userId,
  password,
  onUsernameChange,
  onPasswordChange,
  onLogin,
  onSignUp,
  error,
  handleSocialLogin,
  keepLogin,
  onChangeKeepLogin,
}) {
  const router = useRouter();

  return (
    <LoginContainer>
      <BackButton onClick={() => router.push("/")}>
        <BackIcon />
      </BackButton>

      <FormWrapper>
        <Logo src="/image/Logo_Full.png" alt="logo" />

        <UserID>
          <InputField
            type="text"
            placeholder="아이디"
            value={userId}
            onChange={onUsernameChange}
            $hasValue={!!userId}
          />
        </UserID>

        <Password>
          <InputField
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={onPasswordChange}
          />
        </Password>

        <KeepLoginWrapper>
          <KeepLoginCheckbox
            type="checkbox"
            checked={keepLogin}
            onChange={onChangeKeepLogin}
            id="keepLogin"
          />
          <KeepLoginLabel htmlFor="keepLogin">로그인 상태 유지</KeepLoginLabel>
        </KeepLoginWrapper>

        {error && <ErrorMessage>{error}</ErrorMessage>}

        <LoginButton onClick={onLogin}>로그인</LoginButton>

        <LoginSubText>
          계정이 없으신가요? <span onClick={onSignUp}>회원가입</span>
        </LoginSubText>

        <DividerWithText>소셜 로그인</DividerWithText>

        <GoogleLoginButtonWrapper>
          <GoogleLoginButton onClick={handleSocialLogin}>
            <GoogleIcon src="/image/google-icon.png" alt="google" />
            Sign in with Google
          </GoogleLoginButton>
        </GoogleLoginButtonWrapper>
      </FormWrapper>
    </LoginContainer>
  );
}
