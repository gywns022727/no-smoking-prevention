import React, { useState } from "react";
import styled from "styled-components";
import CheckBox from "components/common/CheckBox";
import { useForm } from "react-hook-form";

export default function NumberInput() {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleNumber = (e) => {
    let { value } = e.target;

    if (value.length === 11) {
      value = value.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3");
    } else if (value.length === 13) {
      value = value
        .replace(/-/g, "")
        .replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3");
    }

    setPhoneNumber(value);
  };
  const { register } = useForm();

  return (
    <Container>
      <CheckBox />
      <Title> 번호</Title>
      <Input
        type="text"
        name="phoneNumber"
        minLength={13}
        maxLength={13}
        value={phoneNumber}
        placeholder="PM의 번호를 적어주세요"
        autoComplete={"off"}
        {...register("phoneNumber", {
          onChange: (e) => {
            handleNumber(e);
          },
        })}
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
