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
          <hr />
          <br />
          <div>
            <Title>커뮤니케이션은 아주 중요해요!</Title>
            <Text>
              &nbsp;&nbsp;- 팀원이 연락하면 가능한 한 빨리 답변해 주세요.
            </Text>
            <Text>
              &nbsp;&nbsp;- 만약 시간이 모자란다면 빨리 이야기해주세요.
            </Text>
            <Text>
              &nbsp;&nbsp;- 프로젝트를 진행할 때 일정 공유 업무공유 등
              프로젝트와 관련된 것들은 바로바로 공유해주세요.
            </Text>
            <br />
            <Title>서로를 존중해주세요!</Title>
            <Text>
              &nbsp;&nbsp;- 서로를 존중하지 않는다면 그 프로젝트는 중단될
              거에요.
            </Text>
            <Text>
              &nbsp;&nbsp;- 회의할 때 이야기를 할 때 항상 듣는 사람의 기분을
              생각하며 말해주세요.
            </Text>
            <br />
            <Title>공 과사는 확실히 구분해주세요!</Title>
            <Text>
              &nbsp;&nbsp;- 사적인 감정을 공적인 일까지 가져가지 말아주세요.
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
  background: #4679d6;
  text-align: center;
`;

const Box = styled.div`
  position: fixed;
  z-index: 100;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
  width: 700px;
  height: 380px;
  border: 5px solid white;
  color: white;
  background: #4679d6;
  @media screen and (max-width: 700px) {
    width: 320px;
    height: auto;
  }
`;

const MainTitle = styled.h1`
  color: #8ce3e9;
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
  font-weight: 400;
  color: #8ce3e9;
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
  font-weight: 300;
  color: white;
  background: #7897d1;
`;
