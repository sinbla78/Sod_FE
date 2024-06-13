import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleMain = () => {
    navigate("/main");
  };

  const handleUpload = () => {
    navigate("/upload");
  };

  const handleLogin = () => {
    localStorage.clear();
    alert("로그아웃에 성공했습니다.");
    navigate("/login");
  };

  return (
    <HeaderBlock>
      <RouterBlock>
        <HeaderTitle onClick={handleMain}>메인페이지</HeaderTitle>
        <HeaderTitle onClick={handleUpload}>일기 업로드</HeaderTitle>
      </RouterBlock>
      <LogoutTitle onClick={handleLogin}>로그아웃</LogoutTitle>
    </HeaderBlock>
  );
};

const HeaderBlock = styled.header`
  position: absolute;
  top: 0;
  width: 100vw;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-color: #ffffff;
  box-shadow: 0 2px 40px rgba(0, 0, 0, 0.1);
`;

const HeaderTitle = styled.h1`
  font-size: 25px;
  width: 180px;
  height: 25px;
  font-size: 24px;
  color: black;
  margin: 0;
  text-align: center;
  justify-content: center;
  cursor: pointer;
`;

const RouterBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;
const LogoutTitle = styled.h1`
  width: 180px;
  height: 25px;
  font-size: 24px;
  color: black;
  margin: 0;
  text-align: center;
  justify-content: center;
`;

export default Header;
