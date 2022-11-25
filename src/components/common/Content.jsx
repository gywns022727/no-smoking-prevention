import React from "react";
import styled from "styled-components";
import Header from "components/common/Header";
import Main from "components/common/Main";

export default function Content() {
  return (
    <Container>
      <Header />
      <Main />
    </Container>
  );
}

const Container = styled.main`
  width: 400px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;
