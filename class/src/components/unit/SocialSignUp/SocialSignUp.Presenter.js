import {
  SignUpContainer,
  Label,
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
  if (!email) return <div>이메일 정보를 불러오는 중...</div>;

  return (
    <SignUpContainer>
      <h2>소셜 회원가입</h2>
      <form onSubmit={onSubmit}>
        <Label>이메일</Label>
        <InputField value={email} disabled />

        <Label>닉네임</Label>
        <InputField
          type="text"
          name="nickname"
          value={nickname}
          onChange={onChange}
          required
        />

        {error && <ErrorMessage>{error}</ErrorMessage>}

        <SubmitButton type="submit">소셜 회원가입 완료</SubmitButton>
      </form>
    </SignUpContainer>
  );
}
