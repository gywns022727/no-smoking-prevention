import React from "react";
import styled from "styled-components";
import nodam from "../../images/nodam.png";

export default function Header() {
  return (
    <Container>
      <Title>
        <Logo src={nodam} />
        노담 서약서
        <Logo src={nodam} />
      </Title>
    </Container>
  );
}

const Container = styled.header`
  width: 100%;
`;

const Title = styled.h1`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ff3c38;
  font-size: 2.2rem;
  font-weight: 500;
  text-align: center;
`;

const Logo = styled.img`
  width: 50px;
  margin: 0 5px 0 5px;
`;
