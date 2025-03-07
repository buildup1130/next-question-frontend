import {
  LoginContainer,
  Password,
  SignUpButton,
  UserID,
  LoginButton,
  ButtonWrapper,
  InputField,
} from "./Login.Styles";

export default function LoginUI({
  userID,
  password,
  onUsernameChange,
  onPasswordChange,
  onLogin,
  onSignUp, // 회원가입 버튼 클릭 시 실행될 함수
}) {
  return (
    <LoginContainer>
      <UserID>
        <InputField
          type="text"
          placeholder="아이디"
          value={userID}
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
      <ButtonWrapper>
        <LoginButton onClick={onLogin}>로그인</LoginButton>
        <SignUpButton onClick={onSignUp}>회원가입</SignUpButton>{" "}
      </ButtonWrapper>
    </LoginContainer>
  );
}
