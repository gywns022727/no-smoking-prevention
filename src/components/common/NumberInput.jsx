import React, { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import check from "../../images/check.png";

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
      <img src={check} alt="" />
      <Title>연락처</Title>
      <Input
        type="text"
        name="phoneNumber"
        minLength={13}
        maxLength={13}
        value={phoneNumber}
        placeholder="숫자만 입력해 주세요"
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
  > img {
    width: 24px;
    margin-right: 10px;
  }
`;

const Title = styled.p`
  width: 45px;
  color: black;
  margin-right: 10px;
  font-size: 15px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 200px;
  height: 30px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 400;
  color: white;
  background: #ff3c38;
  text-align: center;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #eee;
    font-size: 12px;
    font-weight: 300;
  }
`;
