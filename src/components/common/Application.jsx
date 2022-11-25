import React, { useRef } from "react";
import styled from "styled-components";
import { ToastContainer } from "react-toastify";
import Content from "components/common/Content";
import Precautions from "components/common/Precautions";
import Instruction from "components/common/Instruction";
import Popup from "reactjs-popup";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";
import ClipboardCopy from "react-copy-to-clipboard";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Application() {
  const cardRef = useRef();
  const onDownloadBtn = () => {
    const card = cardRef.current;
    const filter = (card) => {
      return card.tagName !== "BUTTON";
    };
    domtoimage.toBlob(card, { filter: filter }).then((blob) => {
      saveAs(blob, "노담 서약서.jpg");
    });
  };

  const DownLoad = () => toast.success("이미지 다운로드가 완료되었습니다.");
  const Link = () => toast.success("링크 복사가 완료되었습니다.");
  const url = window.location.href;
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        closeOnClick
        pauseOnFocusLoss={false}
        draggable
      />
      <Container>
        <Div>
          <Section ref={cardRef} className="card">
            <Content />
          </Section>
          <Footer>
            <Btns>
              <Precautions />
              <Instruction />
              <Popup
                trigger={<OutBtn>가져가기</OutBtn>}
                position="top center"
                on="hover"
              >
                <Box>
                  <Btn
                    onClick={function () {
                      DownLoad();
                      onDownloadBtn();
                    }}
                  >
                    이미지 다운로드
                  </Btn>
                  <ClipboardCopy text={url} onCopy={() => url}>
                    <Btn onClick={Link}>링크 복사하기</Btn>
                  </ClipboardCopy>
                </Box>
              </Popup>
            </Btns>
          </Footer>
        </Div>
      </Container>
    </>
  );
}

const Div = styled.div`
  padding: 10px;
  margin: 10px;
  border: 5px solid #ff3c38;
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Section = styled.div`
  background: whitesmoke;
`;

const Footer = styled.div`
  margin: 0 auto;
  width: 100%;
`;

const Btns = styled.div`
  margin: 0 auto;
  width: 250px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const OutBtn = styled.button`
  margin-top: 10px;
  width: 100px;
  height: 30px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 300;
  color: white;
  background: #ff3c38;
  text-align: center;
  justify-content: center;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 10px;
  width: 150px;
  height: 100px;
  border: 5px solid #ff3c38;
  color: white;
  background: white;
`;

const Btn = styled.button`
  margin: 5px 0 5px 0;
  width: 120px;
  height: 30px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 300;
  color: white;
  background: #ff3c38;
  &:focus {
    outline: none;
  }
`;
