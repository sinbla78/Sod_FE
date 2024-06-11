import styled from "styled-components";
import { useState } from "react";
import { LogoImg } from "../assets";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [id, setID] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setID(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginFormSubmit = (e) => {
    e.preventDefault();

    console.log("ID:", id);
    console.log("Password:", password);

    window.location.href = "/main";
  };
  const handleSignupFormSubmit = () => {
    navigate("/signup");
  };
  return (
    <div>
      <LoginBox>
        <LoginInner>
          <br />
          <Logo src={LogoImg} alt="No Image" /> <br />
          <h1>로그인</h1>
          <LoginForm onSubmit={handleLoginFormSubmit}>
            <InputField
              type="id"
              placeholder="아이디"
              value={id}
              onChange={handleEmailChange}
            />
            <InputField
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={handlePasswordChange}
            />
            <LoginButton type="submit">로그인</LoginButton>
            <GoSignUp onClick={handleSignupFormSubmit}>
              회원가입 하러가기
            </GoSignUp>
          </LoginForm>
        </LoginInner>
      </LoginBox>
    </div>
  );
};

export default LoginPage;

const LoginBox = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
`;

const LoginInner = styled.div`
  align-items: center;
  text-align: center;
  border: 1px solid black;
  border-radius: 25px;
  height: 50%;
  margin-top: 10%;
  padding: 0 10%;
`;

const LoginForm = styled.form`
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

const LoginButton = styled.button`
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

const GoSignUp = styled.span`
  text-decoration: underline;
  color: blue;
  cursor: pointer;
`;
