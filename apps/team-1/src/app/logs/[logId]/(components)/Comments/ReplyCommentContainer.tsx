import { replyCommentsTypes } from "@/types";
import CommentProfileCard from "./CommentProfileCard";
import CommentCustomViewer from "./CommentCustomViewer";

interface replyCommentContainerProps {
  replyComments?: replyCommentsTypes[];
}

const ReplyCommentContainer = ({
  replyComments,
}: replyCommentContainerProps) => {
  return (
    <div>
      <div className="px-[15px] pb-[15px]">
        {replyComments?.map(item => (
          <div key={item.id} className="p-[15px] border-b border-neutral-20">
            <CommentProfileCard
              userId={item.expand.userId.id}
              profileImage={item.expand.userId.profileImage}
              username={item.expand.userId.username}
              createdAt={item.expand.userId.created}
            />
            <CommentCustomViewer content={item.content} />
          </div>
        ))}
      </div>
      <div>
        <div>
          <span>답글</span>
          <input className="border" />
        </div>
      </div>
    </div>
  );
};

export default ReplyCommentContainer;
