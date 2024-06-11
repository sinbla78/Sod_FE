import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };
  const handleMain = () => {
    navigate("/main");
  };
  return (
    <>
      <Header>
        <HeaderTitle onClick={handleMain}>메인페이지</HeaderTitle>
        <LogoutTitle onClick={handleLogin}>로그아웃</LogoutTitle>
      </Header>
      <Container>
        <Wrapper>
          <DiaryForm>
            <Title>일기</Title>
            <InputBox>
              <Input placeHolder="홍길동" width={120} />
              <Input placeHolder="19060927" width={240} />
              <Input placeHolder="맑음" width={360} />
            </InputBox>
            <Textarea placeholder="본문" maxLength={200} />
            <Button>업로드</Button>
          </DiaryForm>
        </Wrapper>
      </Container>
    </>
  );
};

export default MainPage;

const Header = styled.header`
  position: absolute;
  top: 0;
  z-index: 9999;
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

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  width: 120px;
  height: 40px;
  border-radius: 4px;
  color: white;
  background-color: black;
`;

const DiaryForm = styled.div`
  width: 920px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: flex-start;
  justify-content: center;
  padding: 20px;
  border: 1px solid black;
  border-radius: 4px;
  & > ${Button} {
    align-self: flex-end;
  }
`;

const Title = styled.span`
  font-size: 20px;
  font-weight: bold;
`;

const Input = styled.input`
  width: ${({ width }) => width && `${width}px`};
  height: 40px;
  border: 1px solid black;
  border-radius: 4px;
  padding: 2px;
  &::placholder {
    color: gray;
  }
`;

const InputBox = styled.div`
  display: flex;
  gap: 30px;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 80px;
  resize: none;
  border: 1px solid black;
  border-radius: 4px;
  padding: 2px;
`;
