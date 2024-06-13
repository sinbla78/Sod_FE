import styled from "styled-components";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const DetailPage = () => {
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/feed/details/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
      .then(({ data }) => setData(data))
      .catch((e) => alert(e));
  }, []);
  return (
    <Container>
      <Wrapper>
        <DiaryForm>
          <Title>일기</Title>
          <InputBox>
            <Input width={120} maxLength={10}>
              {data.name}
            </Input>
            <Input width={120} maxLength={10}>
              {data.day}
            </Input>
            <Input width={120} maxLength={10}>
              {data.weather}
            </Input>
            <Input width={240} maxLength={10}>
              {data.title}
            </Input>
          </InputBox>
          <Textarea maxLength={200}>{data.content}</Textarea>
        </DiaryForm>
      </Wrapper>
    </Container>
  );
};

export default DetailPage;

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
