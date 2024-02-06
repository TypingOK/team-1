import { commentsExpandTypes } from "@/types";
import CommentItem from "./CommentItem";

interface commentContentsContainerProps {
  commentData: commentsExpandTypes[];
}

const CommentContentsContainer = ({
  commentData,
}: commentContentsContainerProps) => {
  return (
    <div className="mt-[20px]">
      {commentData?.map(item => (
        <CommentItem key={item.id} commentData={item} />
      ))}
    </div>
  );
};

export default CommentContentsContainer;
