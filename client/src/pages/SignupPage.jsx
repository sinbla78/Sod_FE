import styled from "styled-components";
import { useState } from "react";
import { LogoImg } from "../assets";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const [id, setID] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleNicknameChange = (e) => {
    setID(e.target.value);
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
    if (password === confirmPassword) {
      axios
        .post("http://localhost:8080/user", {
          account_id: id,
          password,
          email,
        })
        .then(() => {
          navigate("/login");
        })
        .catch((e) => {
          alert(e);
        });
    } else {
      alert("비밀번호가 일치하지 않습니다");
    }
  };

  return (
    <div>
      {/* <AuthHzeader /> */}
      <SignupBox>
        <SignupInner>
          <Logo src={LogoImg} />
          <h1>회원가입</h1>
          <SignupForm onSubmit={handleSignupFormSubmit}>
            <InputField
              type="text"
              placeholder="아이디"
              value={id}
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
  align-items: center;
  text-align: center;
  border: 1px solid black;
  border-radius: 25px;
  height: 70%;
  margin-top: 10%;
  padding: 0 10%;
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
  background-color: black;
  color: white;
  max-width: 303px;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
`;

const Logo = styled.img`
  width: 200px;
  height: auto;
`;
