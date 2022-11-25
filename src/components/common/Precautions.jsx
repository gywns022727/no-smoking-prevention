import React from "react";
import styled from "styled-components";
import Popup from "reactjs-popup";

const contentStyle = {
  width: "100%",
  height: "100%",
  background: "rgba(0,0,0,.5)",
};

export default function Precautions() {
  return (
    <Popup
      trigger={<PrecautionsBtn>주의사항</PrecautionsBtn>}
      modal
      contentStyle={contentStyle}
    >
      {(close) => (
        <Box>
          <MainTitle>
            이건 꼭 지켜주세요!<Warning>&nbsp;(제작자의 경험담 입니다)</Warning>
          </MainTitle>
          <Line />
          <br />
          <div>
            <Title>담배는 몸에 좋지 않아요!</Title>
            <Text>&nbsp;&nbsp;- 이거는 말하지 않아도 다들 알죠?!</Text>
            <br />
            <Title>궁금해도 꾹 참아 봐요!</Title>
            <Text>&nbsp;&nbsp;- 마지막까지 참는 사람이 승자라구요!</Text>
            <br />
            <Title>한 번 빠지면 나올 수 없어요!</Title>
            <Text>
              &nbsp;&nbsp;- 처음에는 괜찮을 수 있지만 점점 중독되고 있다구요!
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
      )}
    </Popup>
  );
}

const PrecautionsBtn = styled.button`
  margin-right: 5px;
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

const Line = styled.hr`
  border: 1px solid white;
`;

const Box = styled.div`
  position: fixed;
  z-index: 100;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
  width: 500px;
  height: 325px;
  border: 5px solid white;
  color: white;
  background: #ff3c38;
  @media screen and (max-width: 700px) {
    width: 320px;
    height: auto;
  }
`;

const MainTitle = styled.h1`
  color: white;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  padding-bottom: 10px;
  @media screen and (max-width: 700px) {
    font-size: 18px;
  }
`;

const Warning = styled.span`
  font-size: 16px;
  font-weight: 300;
`;

const Title = styled.h3`
  font-size: 15px;
  font-weight: bold;
  color: white;
  @media screen and (max-width: 700px) {
    font-size: 14px;
  }
`;

const Text = styled.p`
  font-size: 15px;
  font-weight: 300;
  @media screen and (max-width: 700px) {
    font-size: 13px;
  }
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
