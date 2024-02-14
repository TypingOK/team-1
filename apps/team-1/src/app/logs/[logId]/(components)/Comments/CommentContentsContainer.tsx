import { commentsExpandTypes } from "@/types";
import CommentItem from "./CommentItem";

interface commentContentsContainerProps {
  commentData: commentsExpandTypes[];
  owner: string;
}

const CommentContentsContainer = ({
  commentData,
  owner,
}: commentContentsContainerProps) => {
  return (
    <div className="mt-[20px]">
      {commentData?.map(item => (
        <CommentItem key={item.id} commentData={item} owner={owner} />
      ))}
    </div>
  );
};

export default CommentContentsContainer;
