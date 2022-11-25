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
            <hr />
            <br />
            <div>
              <Text>&nbsp;&nbsp;- 주의사항을 꼭! 읽어주세요.</Text>
              <Text>&nbsp;&nbsp;- 이름에는 프로젝트 이름을 입력해주세요.</Text>
              <Text>
                &nbsp;&nbsp;- 인원에는 프로젝트 총인원수를 입력해주세요.
              </Text>
              <Text>
                &nbsp;&nbsp;- 번호에는 PM(Project Management)의 번호를
                입력해주세요.
              </Text>
              <Text>
                &nbsp;&nbsp;- 설명에는 프로젝트에 관한 간단한 설명을
                입력해주세요.
              </Text>
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
  background: #4679d6;
  text-align: center;
`;

const contentStyle = {
  width: "100%",
  height: "100%",
  background: "rgba(0,0,0,.5)",
};

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
  height: 250px;
  border: 5px solid white;
  color: white;
  background: #4679d6;
  @media screen and (max-width: 500px) {
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
  font-weight: 300;
  color: white;
  background: #7897d1;
`;
