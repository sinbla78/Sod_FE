import AuthHeader from "@/components/header/AuthHeader";
import styled from "styled-components";
import { useState } from "react";

const SignupPage = () => {
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSignupFormSubmit = (e) => {
    e.preventDefault();

    console.log("Nickname:", nickname);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);

    window.location.href = "/login";
  };

  return (
    <div>
      <AuthHeader />
      <SignupBox>
        <SignupInner>
          <h1>회원가입</h1>
          <SignupForm onSubmit={handleSignupFormSubmit}>
            <InputField
              type="text"
              placeholder="닉네임"
              value={nickname}
              onChange={handleNicknameChange}
            />
            <InputField
              type="email"
              placeholder="이메일"
              value={email}
              onChange={handleEmailChange}
            />
            <InputField
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={handlePasswordChange}
            />
            <InputField
              type="password"
              placeholder="비밀번호 확인"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
            <SignupButton type="submit">회원가입</SignupButton>
          </SignupForm>
        </SignupInner>
      </SignupBox>
    </div>
  );
};

export default SignupPage;

const SignupBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;

const SignupInner = styled.div`
  text-align: center;
`;

const SignupForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
`;

const InputField = styled.input`
  width: 303px;
  height: 30px;
  border-radius: 5px;
  padding: 5px;
  border: 1px solid #ccc;
`;

const SignupButton = styled.button`
  background-color: #f5ddd6;
  color: black;
  max-width: 303px;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
`;