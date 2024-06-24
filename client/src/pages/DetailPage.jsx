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
  }, [id]);

  return (
    <Container>
      <Wrapper>
        <DiaryForm>
          <Title>일기</Title>
          <InputBox>
            <Input
              width={120}
              maxLength={10}
              value={data.name || ""}
              readOnly
            />
            <Input width={120} maxLength={10} value={data.day || ""} readOnly />
            <Input
              width={120}
              maxLength={10}
              value={data.weather || ""}
              readOnly
            />
            <Input
              width={240}
              maxLength={10}
              value={data.title || ""}
              readOnly
            />
          </InputBox>
          <Textarea maxLength={1200} value={data.content || ""} readOnly />
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

const Input = styled.input`
  width: ${({ width }) => width && `${width}px`};
  height: 40px;
  border: 1px solid black;
  border-radius: 4px;
  padding: 2px;
  background-color: #f9f9f9;
`;

const InputBox = styled.div`
  display: flex;
  gap: 30px;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 150px; /* 필요에 따라 높이 조절 */
  resize: none;
  border: 1px solid black;
  border-radius: 4px;
  padding: 2px;
  background-color: #f9f9f9;
  overflow: auto; /* 내용이 초과될 경우 스크롤 생성 */
`;
