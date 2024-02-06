"use client";

import { commentsExpandTypes } from "@/types";
import CommentInputContainer from "./CommentInputContainer";
import CommentContentsContainer from "./CommentContentsContainer";

interface commentContainerProps {
  commentData: commentsExpandTypes[];
}

const CommentContainer = ({ commentData }: commentContainerProps) => {
  return (
    <div className="max-w-[800px] m-auto">
      <CommentInputContainer />
      <CommentContentsContainer commentData={commentData} />
    </div>
  );
};

export default CommentContainer;
