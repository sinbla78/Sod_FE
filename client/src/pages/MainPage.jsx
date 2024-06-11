import styled from "styled-components";
// import { useState } from "react";
// import { LogoImg } from "../assets";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
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
      <Text>
        <Title>일기</Title>
        <br />
        <StyledTable bordered hover="true">
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
            <tr>
              <td>한우리</td>
              <td>2024.6.11</td>
              <td>비</td> {/* submit_date로 변경 */}
              <th>오늘은 왜 화요일일까</th>
              <th>오늘 벌써 화요일이 되었는데요! 너무 행복하네요!</th>
            </tr>
            <tr>
              <td>박우재</td>
              <td>2024.6.19</td>
              <td>비</td> {/* submit_date로 변경 */}
              <th>오늘은 왜 수요일일까</th>
              <th>오늘 벌써 수요일이 되었는데요! 너무 행복하네요!</th>
            </tr>
          </tbody>
        </StyledTable>
      </Text>
    </>
  );
};

export default MainPage;

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

const Title = styled.h1`
  font-size: 25px;
  width: 180px;
  height: 25px;
  font-size: 24px;
  color: black;
  margin: 0;
  text-align: center;
  justify-content: center;
  margin-top: 35px;
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

const Text = styled.div`
  width: 1200px;
  height: auto;
`;

const StyledTable = styled(Table)`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 30px;
  &.table {
    // Table 기본 스타일 정의

    background-color: white;

    // thead 스타일 정의
    thead {
      tr {
        th {
          background-color: gray; // 헤더 배경색 변경
          color: black; // 헤더 글자색 변경
        }
      }
    }

    // tbody 스타일 정의
    tbody {
      tr {
        &:hover {
          background-color: #b8fadd; // 행 호버 시 배경색 변경
        }
        td {
          color: black;
        }
        td:first-of-type {
          font-weight: 600;
        }
      }
    }
  }
`;
