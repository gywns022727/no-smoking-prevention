import React from "react";
import styled from "styled-components";
import Popup from "reactjs-popup";

export default function Instruction() {
  return (
    <Popup
      trigger={<InstructionsBtn>사용 방법</InstructionsBtn>}
      modal
      position="center center"
      contentStyle={contentStyle}
    >
      {(close) => (
        <Container>
          <Box>
            <MainTitle>사용 방법</MainTitle>
            <Line />
            <br />
            <div>
              <Text>&nbsp;&nbsp;- 주의사항을 꼭! 읽어주세요.</Text>
              <Text>&nbsp;&nbsp;- 작성일자를 선택해 주세요.</Text>
              <Text>&nbsp;&nbsp;- 학교명을 적어주세요.</Text>
              <Text>&nbsp;&nbsp;- 연락처를 적어주세요.</Text>
              <Text>&nbsp;&nbsp;- 자신의 다짐을 한 줄로 적어주세요.</Text>
              <Text>
                &nbsp;&nbsp;- 링크 복사하기를 클릭하면 현재 웹 사이트 URL이
                복사됩니다.
              </Text>
            </div>
            <Close
              onClick={() => {
                close();
              }}
            >
              닫기
            </Close>
          </Box>
        </Container>
      )}
    </Popup>
  );
}

const InstructionsBtn = styled.button`
  width: 100px;
  height: 30px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 300;
  color: white;
  background: #ff3c38;
  text-align: center;
`;

const contentStyle = {
  width: "100%",
  height: "100%",
  background: "rgba(0,0,0,.5)",
};

const Line = styled.hr`
  border: 1px solid white;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  position: fixed;
  z-index: 100;
  padding: 10px;
  width: 450px;
  height: 280px;
  border: 5px solid white;
  color: white;
  background: #ff3c38;
  @media screen and (max-width: 500px) {
    width: 320px;
    height: auto;
  }
`;

const MainTitle = styled.h1`
  color: white;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  padding-bottom: 10px;
`;

const Text = styled.p`
  font-size: 15px;
  font-weight: 300;
`;

const Close = styled.button`
  margin-top: 20px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 30px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
  color: #ff3c38;
  background: white;
`;
