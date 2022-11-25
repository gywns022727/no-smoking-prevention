import React, { useState } from "react";
import styled from "styled-components";
import NameInput from "components/common/NameInput";
import PersonnelInput from "components/common/PersonnelInput";
import NumberInput from "components/common/NumberInput";
import TextArea from "components/common/TextArea";

export default function Main() {
  const [Give, setGive] = useState("");
  const [Take, setTake] = useState("");
  const GiveChange = (e) => setGive(e.target.value);
  const TakeChange = (e) => setTake(e.target.value);

  return (
    <Container>
      <Title>
        <Input
          type={"text"}
          name="Give"
          value={Give}
          maxLength={3}
          onChange={GiveChange}
          autoComplete={"off"}
        />
        이/가
        <Input
          type={"text"}
          name="Give"
          value={Take}
          maxLength={3}
          onChange={TakeChange}
          autoComplete={"off"}
        />
        에게 프로젝트를 신청합니다.
      </Title>
      <Section>
        <NameInput />
        <PersonnelInput />
        <NumberInput />
        <TextArea />
      </Section>
      <Text>
        신청하는 사람<Data>{Give}</Data>(인)
      </Text>
      <Text>
        신청받는 사람<Data>{Take}</Data>(인)
      </Text>
    </Container>
  );
}

const Container = styled.div`
  width: 400px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const Title = styled.p`
  width: 100%;
  color: white;
  font-size: 15px;
  font-weight: 300;
  text-align: center;
`;

const Input = styled.input`
  margin: 0 5px 0 10px;
  width: 60px;
  height: 30px;
  border-radius: 15px;
  border: none;
  color: white;
  background: #4679d6;
  text-align: center;
  &:focus {
    outline: none;
  }
  &::placeholder {
    padding: 5px;
  }
`;

const Section = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Text = styled.p`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 5px;
  text-align: center;
  font-style: 12px;
  font-weight: 300;
  color: white;
`;

const Data = styled.span`
  width: 150px;
  text-align: center;
  font-weight: 400;
`;
