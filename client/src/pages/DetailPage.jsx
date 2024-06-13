import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const DetailPage = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };
  const handleUpload = () => {
    navigate("/upload");
  };
  return (
    <>
      <Header>
        <HeaderTitle onClick={handleUpload}>일기 업로드</HeaderTitle>
        <LogoutTitle onClick={handleLogin}>로그아웃</LogoutTitle>
      </Header>

      <Container>
        <Wrapper>
          <DiaryForm>
            <Title>일기</Title>
            <InputBox>
              <Input width={120} maxLength={10}>
                한우리
              </Input>
              <Input width={120} maxLength={10}>
                2024.06.11
              </Input>
              <Input width={120} maxLength={10}>
                맑음
              </Input>
              <Input width={240} maxLength={10}>
                오늘은 왜 수요일일까?
              </Input>
            </InputBox>
            <Textarea maxLength={200}>
              {" "}
              오늘 벌써 화요일이 되었는데요! 너무 행복하네요!{" "}
            </Textarea>
          </DiaryForm>
        </Wrapper>
      </Container>
    </>
  );
};

export default DetailPage;

const Header = styled.header`
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
`;

const Title = styled.span`
  font-size: 20px;
  font-weight: bold;
`;

const Input = styled.div`
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

const Textarea = styled.div`
  width: 100%;
  height: 80px;
  resize: none;
  border: 1px solid black;
  border-radius: 4px;
  padding: 2px;
`;
