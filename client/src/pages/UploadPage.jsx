import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import useInput from "../hooks/useInput";
import axios from "axios";

const UploadPage = () => {
  const navigate = useNavigate();

  const { form, onChange } = useInput({
    title: "",
    content: "",
    weather: "",
    day: "",
    name: "",
  });

  // 입력 필드가 하나라도 비어 있는지 확인하는 함수
  const isFormEmpty = () => {
    return (
      !form.name || !form.day || !form.weather || !form.title || !form.content
    );
  };

  // 욕설 검사 함수
  const hasProfanity = (text) => {
    const profanityList = ["씨발", "개새끼", "병신"]; // 욕설 리스트 예시
    for (let profanity of profanityList) {
      if (text.includes(profanity)) {
        return true; // 욕설이 포함된 경우 true 반환
      }
    }
    return false;
  };

  const handleUpload = () => {
    // 입력 필드가 하나라도 비어 있으면 업로드를 막음
    if (isFormEmpty()) {
      alert("모든 항목을 입력해주세요.");
      return;
    }

    // 모든 입력 필드에 대해 욕설 검사 수행
    if (
      hasProfanity(form.name) ||
      hasProfanity(form.day) ||
      hasProfanity(form.weather) ||
      hasProfanity(form.title) ||
      hasProfanity(form.content)
    ) {
      alert("입력 내용에 욕설이 포함되어 있습니다. 다시 확인해주세요.");
      return; // 욕설이 포함된 경우 업로드를 막습니다.
    }

    axios
      .post("http://localhost:8080/feed", form, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
      .then(() => {
        alert("업로드에 성공하였습니다.");
        navigate("/main");
      })
      .catch((error) => {
        alert("업로드 중 오류가 발생하였습니다. 다시 시도해주세요.");
        console.error("Upload error:", error);
      });
  };

  return (
    <>
      <Container>
        <Wrapper>
          <DiaryForm>
            <Title>일기</Title>
            <InputBox>
              <Input
                name="name"
                placeholder="홍길동"
                width={120}
                maxLength={10}
                value={form.name}
                onChange={onChange}
              />
              <Input
                name="day"
                placeholder="19060927"
                width={120}
                maxLength={10}
                value={form.day}
                onChange={onChange}
              />
              <Input
                name="weather"
                placeholder="맑음"
                width={120}
                maxLength={10}
                value={form.weather}
                onChange={onChange}
              />
              <Input
                name="title"
                placeholder="제목"
                width={240}
                maxLength={10}
                value={form.title}
                onChange={onChange}
              />
            </InputBox>
            <Textarea
              name="content"
              placeholder="본문"
              maxLength={1200}
              value={form.content}
              onChange={onChange}
            />
            <Button onClick={handleUpload}>업로드</Button>
          </DiaryForm>
        </Wrapper>
      </Container>
    </>
  );
};

export default UploadPage;

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
