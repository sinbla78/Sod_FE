import styled from "styled-components";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const MainPage = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const handleDetail = (id) => {
    navigate(`/detail/${id}`);
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/feed", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
      .then(({ data }) => {
        setData(data);
      })
      .catch((e) => {
        alert(e);
      });
  }, []);

  return (
    <Text>
      <br />
      <StyledTable bordered hover>
        <thead>
          <tr>
            <th>이름</th>
            <th>일기 작성일</th>
            <th>날씨</th>
            <th>제목</th>
            <th>본문</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e) => (
            <tr key={e.feed_id} onClick={() => handleDetail(e.feed_id)}>
              <th>{e.name}</th>
              <th>{e.day}</th> {/* Update this key if needed */}
              <th>{e.weather}</th>
              <th>{e.title}</th>
              <th>{e.content}</th>
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </Text>
  );
};

export default MainPage;

const Text = styled.div`
  width: 1200px;
  height: auto;
  padding: 80px 0px;
`;

const StyledTable = styled(Table)`
  width: 125%;
  margin-top: 50px;
  margin-bottom: 50px;
  margin-left: 100px;

  &.table {
    background-color: white;

    thead {
      tr {
        th {
          background-color: #b0b0b0;
          color: #ffffff;
        }
      }
    }

    tbody {
      tr {
        &:hover {
          background-color: #fafad2;
        }
      }
    }
  }
`;
