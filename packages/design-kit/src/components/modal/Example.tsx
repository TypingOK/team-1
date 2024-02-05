import {
  ModalRoot,
  ModalTrigger,
  ModalContent,
  ModalClose,
  ModalDescription,
  ModalTitle,
  ModalButtons,
} from ".";
import { Button } from "../button";

const ModalExample = () => {
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
            <ModalClose className="flex-1">
              <Button className="w-full rounded-r-none rounded-tl-none">
                취소
              </Button>
            </ModalClose>
            <ModalClose className="flex-1">
              <Button
                variant={"primary"}
                className="w-full rounded-l-none rounded-tr-none"
              >
                확인
              </Button>
            </ModalClose>
          </ModalButtons>
        </ModalContent>
      </ModalRoot>
    </>
  );
};

export default ModalExample;
