import { Button, TabContent, TabList, TabRoot, TabTrigger } from "design-kit";
import "./style.css";
import dynamic from "next/dynamic";
import { useState } from "react";
import { handleGetUserData } from "@/utils/api";
import { useParams } from "next/navigation";
import CommentCustomViewer from "./CommentCustomViewer";
import useCreateComment from "@/hooks/queries/useCreateComment";
import useCreateReply from "@/hooks/queries/useCreateReply";

const CustomEditor = dynamic(() => import("./CommentInput"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

interface commentInputContainerProps {
  mode?: "comment" | "reply";
  commentsId?: string;
}

const CommentInputContainer = ({
  mode = "comment",
  commentsId = "",
}: commentInputContainerProps) => {
  const [comment, setComment] = useState<string>("");
  const userData = handleGetUserData();
  const params = useParams<{ logId: string }>();
  const handleCommentSubmit = useCreateComment({
    userId: userData?.id,
    logId: params.logId,
    content: comment,
  });
  const handleReplySubmit = useCreateReply({
    userId: userData?.id,
    logId: params.logId,
    content: comment,
    commentsId,
  });

  const handleCommentsSubmit = async () => {
    if (userData) {
      if (mode === "comment") await handleCommentSubmit.mutateAsync();
      if (mode === "reply") await handleReplySubmit.mutateAsync();
      setComment("");
    }
  };

  return (
    <TabRoot defaultValue="댓글 작성">
      <div className="grid gap-[20px]">
        <div className="flex justify-between">
          <div>
            <TabList className="flex gap-[10px]">
              <TabTrigger className="w-[100px]" value="댓글 작성">
                댓글 작성
              </TabTrigger>
              <TabTrigger className="w-[100px]" value="미리보기">
                미리보기
              </TabTrigger>
            </TabList>
          </div>
          <div className="rounded-[10px] w-[330px] h-[40px] bg-[#F8F8F9] flex gap-[10px] justify-center items-center">
            <div className="flex gap-[16px] body-7-bold text-neutral-50">
              <div className="flex gap-[5px] items-center">
                <p>본문</p>
                <img
                  src="/icons/create/barDropdown.svg"
                  width="8px"
                  height="8px"
                />
              </div>
              <div className="flex gap-[5px] items-center">
                <p>나눔고딕</p>
                <img
                  src="/icons/create/barDropdown.svg"
                  width="8px"
                  height="8px"
                />
              </div>
              <div className="flex gap-[5px] items-center">
                <p>16</p>
                <img
                  src="/icons/create/barDropdown.svg"
                  width="8px"
                  height="8px"
                />
              </div>
            </div>
            <div className="text-neutral-10">ㅣ</div>
            <div className="flex gap-[10px]">
              <img src="/icons/create/Bold.svg" width="18px" height="18px" />
              <img src="/icons/create/Italic.svg" width="18px" height="18px" />
              <img
                src="/icons/create/Underline.svg"
                width="18px"
                height="18px"
              />
              <img src="/icons/create/Cancle.svg" width="18px" height="18px" />
            </div>
          </div>
        </div>
        <div className="bg-neutral-0 rounded-[10px]">
          <TabContent
            value="댓글 작성"
            className="border border-neutral-20 rounded-[10px] h-[170px]"
          >
            <CustomEditor comment={comment} setComment={setComment} />
          </TabContent>
          <TabContent
            value="미리보기"
            className="border border-neutral-20 rounded-[10px] h-[170px]"
          >
            <div className="p-[15px] overflow-y-scroll comment-scroll max-h-[168px]">
              <CommentCustomViewer content={comment} />
            </div>
          </TabContent>
        </div>
        <div className="flex justify-between items-center">
          <p className="body-6 text-neutral-50">마크다운 형식이 지원됩니다.</p>
          <div className="flex gap-[10px]">
            <Button
              className="w-[108px] h-[40px] text-base font-semibold text-neutral-70 p-0"
              onClick={() => setComment("")}
            >
              취소
            </Button>
            <Button
              variant={"primary"}
              className="w-[108px] h-[40px] text-base font-semibold p-0"
              onClick={handleCommentsSubmit}
            >
              댓글 게시
            </Button>
          </div>
        </div>
      </div>
    </TabRoot>
  );
};

export default CommentInputContainer;
