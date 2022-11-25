import React from "react";
import styled from "styled-components";

export default function CheckBox() {
  return <Check type={"checkbox"} defaultChecked={true} />;
}

const Check = styled.input`
  margin-right: 10px;
  width: 20px;
  height: 20px;
  border: none;
  background: #4679d6;
  &:focus {
    outline: none;
  }
`;
