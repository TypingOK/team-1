import {
  Button,
  DropDownMenuContent,
  DropdownMenu,
  DropdownMenuTrigger,
  Input,
} from "design-kit";

const DeleteAccount = () => {
  return (
    <div className="flex flex-col gap-[30px]">
      <p className="body-3-bold text-neutral-90">회원탈퇴</p>
      <div className="flex flex-col gap-[15px] body-6 text-neutral-70">
        <p>회원을 탈퇴하시겠습니까?</p>
        <p>탈퇴 시 삭제된 정보는 복구가 불가능합니다.</p>
        <p>
          불편하셨던 점이나 불만사항을 알려주시면 적극 반영해서
          <br />
          고객님의 불편함을 해결해드리도록 노력하겠습니다.
        </p>
      </div>
      <div className="flex flex-col gap-[30px] justify-center item-center">
        <div className="flex flex-col gap-[7px]">
          <p className="body-6">무엇이 불편하셨나요?</p>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="text-[12px] font-medium text-neutral-40 w-[656px] h-[46px] justify-between px-[15px] py-[14.5px]">
                무엇이 불편하셨나요?
                <img src="/icons/mypage/arrowDown_btn.svg" />
              </Button>
            </DropdownMenuTrigger>
            <DropDownMenuContent>디자인없음</DropDownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex flex-col gap-[7px] mb-[20px]">
          <p className="body-6">비밀번호 입력</p>
          <Input
            border={`full`}
            placeholder="현재 비밀번호를 입력해주세요."
            className="text-[12px] font-medium text-neutral-40 w-[656px] h-[46px] justify-between px-[15px] py-[14.5px]"
          />
        </div>

        <Button
          variant={"primary"}
          className="text-[16px] font-semibold w-[656px] h-[46px] p-[9px] item-center justify-center"
        >
          회원탈퇴하기
        </Button>
      </div>
    </div>
  );
};

export default DeleteAccount;
