import React from "react";
import styled from "styled-components";

export default function Header() {
  return (
    <Container>
      <Title>
        <Logo src="/images/schoolLogo.png" />
        프로젝트 신청서
        <Logo src="/images/schoolLogo.png" />
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
  color: white;
  padding: 0 5px 0 5px;
  font-size: 2.2rem;
  font-weight: 500;
  text-align: center;
`;

const Logo = styled.img`
  width: 50px;
  margin: 0 5px 0 5px;
`;
