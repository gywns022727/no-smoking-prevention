import React from "react";
import styled from "styled-components";
import CheckBox from "components/common/CheckBox";

export default function TextArea() {
  return (
    <Container>
      <CheckBox />
      <Title>설명</Title>
      <Area maxLength={"30"} placeholder="간단한 설명을 적어주세요"></Area>
    </Container>
  );
}

const Container = styled.div`
  width: 400px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.p`
  width: 30px;
  padding-right: 20px;
  color: white;
  font-size: 15px;
  font-weight: 300;
`;

const Area = styled.textarea`
  width: 200px;
  height: 80px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 400;
  color: white;
  background: #4679d6;
  text-align: center;
  line-height: 40px;
  resize: none;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #eee;
    opacity: 0.8;
    font-size: 12px;
    font-weight: 300;
  }
`;
