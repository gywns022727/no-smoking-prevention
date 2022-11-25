import React from "react";
import styled from "styled-components";
import CheckBox from "components/common/CheckBox";

export default function PersonnelSelect() {
  return (
    <Container>
      <CheckBox />
      <Title>인원</Title>
      <Input
        type={"text"}
        placeholder="참여 인원을 적어주세요"
        autoComplete={"off"}
      />
    </Container>
  );
}

const Container = styled.div`
  width: 400px;
  height: 30px;
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

const Input = styled.input`
  width: 200px;
  height: 30px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 400;
  color: white;
  background: #4679d6;
  text-align: center;
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
