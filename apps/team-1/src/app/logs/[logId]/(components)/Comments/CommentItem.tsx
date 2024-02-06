"use client";

import { commentsExpandTypes } from "@/types";
import CommentProfileCard from "./CommentProfileCard";
import CommentCustomViewer from "./CommentCustomViewer";
import { useState } from "react";
import ReplyCommentContainer from "./ReplyCommentContainer";

interface commentItemProps {
  commentData: commentsExpandTypes;
}

const CommentItem = ({ commentData }: commentItemProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handelReplyCommentToggle = () => setIsOpen(prev => !prev);

  return (
    <div>
      <div className="p-[15px] border-b border-neutral-20">
        <CommentProfileCard
          userId={commentData.expand.userId.id}
          profileImage={commentData.expand.userId.profileImage}
          username={commentData.expand.userId.username}
          createdAt={commentData.expand.userId.created}
        />
        <CommentCustomViewer content={commentData.content} />
      </div>
      <div
        className="cursor-pointer p-[20px] body-7-bold text-neutral-50"
        onClick={handelReplyCommentToggle}
      >
        {isOpen ? (
          <div className="flex items-center gap-[10px]">
            <div className="w-[18px] h-[18px]">
              <img src="/icons/detail/Minus.svg" />
            </div>
            <span>숨기기</span>
          </div>
        ) : commentData.replyComments.length ? (
          <div className="flex items-center gap-[10px]">
            <div className="w-[18px] h-[18px]">
              <img src="/icons/detail/Plus.svg" />
            </div>
            <span>{commentData.replyComments.length}개의 답글</span>
          </div>
        ) : (
          <div className="flex items-center gap-[10px]">
            <div className="w-[18px] h-[18px]">
              <img src="/icons/detail/Plus.svg" />
            </div>
            <span>답글 작성하기</span>
          </div>
        )}
      </div>
      {isOpen && (
        <ReplyCommentContainer replyComments={commentData.replyComments} />
      )}
    </div>
  );
};

export default CommentItem;
