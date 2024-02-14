import { Button } from "design-kit";

const Logout = () => {
  return (
    <div className="flex flex-col gap-[141px]">
      <p className="body-3-bold text-neutral-90">로그아웃</p>
      <div className="flex flex-col gap-[67px] justify-center item-center text-center">
        <p className="body-6 text-neutral-90">로그아웃 하시겠습니까?</p>
        <div className="flex gap-[15px]  item-center justify-center">
          <Button className="text-[16px] font-semibold w-[130px] h-[40px] p-[9px]">아니요</Button>
          <Button variant={"primary"} className="text-[16px] font-semibold w-[130px] h-[40px] p-[9px]">로그아웃</Button>
        </div>
      </div>
    </div>
  )
}

export default Logout;