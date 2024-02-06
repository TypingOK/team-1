import FloatingMenuItem from "./FloatingMenuItem";

const FloatingMenu = () => {
  return (
    <div className="sticky align-top hidden lg:inline-block top-[30px] text-left w-[200px]">
      <div className="flex justify-end pr-[40px]">
        <div className="grid gap-[20px]">
          <FloatingMenuItem
            label="팔로우"
            img="/icons/detail/Log_follow.svg"
            callback={() => true}
          />
          <FloatingMenuItem
            label="좋아요"
            img="/icons/detail/Log_like.svg"
            callback={() => true}
          />
          <FloatingMenuItem
            label="저장하기"
            img="/icons/detail/Log_save.svg"
            callback={() => true}
          />
          <FloatingMenuItem
            label="공유하기"
            img="/icons/detail/Log_share.svg"
            callback={() => true}
          />
          <FloatingMenuItem
            label="댓글"
            img="/icons/detail/Log_comment.svg"
            callback={() => true}
          />
          <div />
          <FloatingMenuItem
            label="이전글"
            img="/icons/detail/Log_back.svg"
            callback={() => true}
          />
          <FloatingMenuItem
            label="다음글"
            img="/icons/detail/Log_next.svg"
            callback={() => true}
          />
        </div>
      </div>
    </div>
  );
};

export default FloatingMenu;
