import { replyCommentsTypes } from "@/types";
import CommentProfileCard from "./CommentProfileCard";
import CommentCustomViewer from "./CommentCustomViewer";
import CommentInputContainer from "./CommentInputContainer";
import { formatDate } from "@/utils/common/formatDate";

interface replyCommentContainerProps {
  replyComments?: replyCommentsTypes[];
  owner: string;
  commentsId: string;
}

const ReplyCommentContainer = ({
  replyComments,
  owner,
  commentsId,
}: replyCommentContainerProps) => {
  return (
    <div className="bg-neutral-5 rounded-b-[10px]">
      <div className="px-[15px] pb-[15px]">
        {replyComments?.map(item => (
          <div key={item.id} className="p-[15px] border-b border-neutral-20">
            <CommentProfileCard
              userId={item.expand.userId.id}
              profileImage={item.expand.userId.profileImage}
              username={item.expand.userId.username}
              createdAt={formatDate(item.created)}
              owner={owner}
            />
            <CommentCustomViewer content={item.content} />
          </div>
        ))}
      </div>
      <div className="p-[15px] pt-0">
        <CommentInputContainer mode="reply" commentsId={commentsId} />
      </div>
    </div>
  );
};

export default ReplyCommentContainer;
