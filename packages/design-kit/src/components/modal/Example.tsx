import { useState } from "react";
import {
  ModalRoot,
  ModalTrigger,
  ModalContent,
  ModalDescription,
  ModalTitle,
  ModalButtons,
} from ".";
import { Button } from "../button";
// 모달을 사용하기 위해서는 ModalRoot로 감싸주어야 합니다.
// ModalTrigger를 사용하면 모달을 띄울 트리거를 설정하게 됩니다.
// ModalContent는 모달 안에 뜰 내용들을 정리하게 됩니다.
// ModalButtons는 확인과 취소 버튼이 아래 떠야 한다면 사용하면 됩니다. -> 기본적으로 취소 버튼은 만들어져 있으며 children으로 확인 버튼을 넣어주면 됩니다.
// Title과 Description이 필요한 경우 넣어주면 됩니다.
// 그 이외에 별도로 필요한 내용들은 알아서 children으로 넣어주면 됩니다.
const ModalExample = () => {
  const [state, setState] = useState(false);
  console.log(state);
  return (
    <>
      <ModalRoot>
        <ModalTrigger asChild>
          <Button popupSize={"small"}>모달 테스트 버튼</Button>
        </ModalTrigger>
        <ModalContent className="w-1/2">
          <ModalTitle>test</ModalTitle>
          <ModalDescription>설명</ModalDescription>
          <ModalButtons>
            <Button
              variant={"primary"}
              className="w-full rounded-l-none rounded-tr-none"
              onClick={() => {
                setState(prev => !prev);
              }}
            >
              확인
            </Button>
          </ModalButtons>
        </ModalContent>
      </ModalRoot>
    </>
  );
};

export default ModalExample;
