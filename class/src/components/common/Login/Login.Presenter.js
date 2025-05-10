import { useRouter } from "next/router";
import {
  LoginContainer,
  Password,
  UserID,
  LoginButton,
  InputField,
  ErrorMessageWrapper,
  ErrorMessage,
  GoogleLoginButtonWrapper,
  GoogleLoginButton,
  GoogleIcon,
  Logo,
  BackButton,
  LoginTitle,
  LoginSubText,
  DividerWithText,
  FormWrapper,
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
}) {
  const router = useRouter();

  return (
    <LoginContainer>
      <BackButton onClick={() => router.push("/")}>
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

        <UserID>
          <InputField
            type="text"
            placeholder="아이디"
            value={userId}
            onChange={onUsernameChange}
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

        <ErrorMessageWrapper>
          {error && <ErrorMessage>{error}</ErrorMessage>}
        </ErrorMessageWrapper>

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
