import {
  LoginContainer,
  Password,
  SignUpButton,
  UserID,
  LoginButton,
  ButtonWrapper,
  InputField,
  ErrorMessageWrapper,
  ErrorMessage,
} from "./Login.Styles";

export default function LoginUI({
  userId,
  password,
  onUsernameChange,
  onPasswordChange,
  onLogin,
  onSignUp,
  error,
}) {
  return (
    <LoginContainer>
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

      <ButtonWrapper>
        <LoginButton onClick={onLogin}>로그인</LoginButton>
        <SignUpButton onClick={onSignUp}>회원가입</SignUpButton>
      </ButtonWrapper>
    </LoginContainer>
  );
}
