import React, { useState } from "react";
import styled from "styled-components";
import NameInput from "components/common/NameInput";
import PersonnelInput from "components/common/PersonnelInput";
import NumberInput from "components/common/NumberInput";
import TextArea from "components/common/TextArea";

export default function Main() {
  const [Give, setGive] = useState("");
  const GiveChange = (e) => setGive(e.target.value);

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
        은/는 노담을 약속 합니다!
      </Title>
      <Section>
        <PersonnelInput />
        <NameInput />
        <NumberInput />
        <TextArea />
      </Section>
      <Text>
        작성자<Data>{Give}</Data>(인)
      </Text>
    </Container>
  );
}

const Container = styled.div`
  width: 400px;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const Title = styled.p`
  width: 100%;
  color: black;
  font-size: 15px;
  font-weight: bold;
  text-align: center;
`;

const Input = styled.input`
  margin: 0 5px 0 10px;
  width: 60px;
  height: 30px;
  border-radius: 15px;
  border: none;
  color: white;
  background: #ff3c38;
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
  font-size: 16px;
  font-weight: bold;
  color: black;
`;

const Data = styled.span`
  width: 150px;
  text-align: center;
  font-weight: 400;
`;
