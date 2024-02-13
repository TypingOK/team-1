"use client";

import { commentsExpandTypes } from "@/types";
import CommentInputContainer from "./CommentInputContainer";
import CommentContentsContainer from "./CommentContentsContainer";

interface commentContainerProps {
  commentData: commentsExpandTypes[];
  owner: string;
}

const CommentContainer = ({ commentData, owner }: commentContainerProps) => {
  return (
    <div className="max-w-[800px] m-auto">
      <CommentInputContainer />
      <CommentContentsContainer commentData={commentData} owner={owner} />
    </div>
  );
};

export default CommentContainer;
