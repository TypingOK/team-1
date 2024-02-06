"use client";

import { useSearchParams } from "next/navigation";
import { pb } from "@/utils/api";
import { userTypes } from "@/types";
import { useGetTargetComments } from "@/hooks/queries/useGetMyComments";
import useDeleteComments from "@/hooks/queries/useDeleteComments";
import { useState } from "react";
import { Button } from "design-kit";

const myComments = () => {
  const [isDelete, setIsDelete] = useState(false);
  const [isAllSelect, setIsAllSelect] = useState(false);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const userData = pb.authStore.model as userTypes;
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const { data } = useGetTargetComments(page, userData?.id, page, 30);

  const deleteCommentsMutation = useDeleteComments(selectedItems);

  const handleDelete = async () => {
    if (selectedItems.length > 0) {
      await deleteCommentsMutation.mutateAsync();
      setIsAllSelect(false);
    }
    setIsDelete(false);
  };

  const handleisDelete = () => {
    setIsDelete(!isDelete);
    setSelectedItems([]);
    setIsAllSelect(false);
  };

  const handleToggleSelectItem = (itemId: string) => {
    setSelectedItems(prevSelectedItems => {
      if (prevSelectedItems.includes(itemId)) {
        return prevSelectedItems.filter(id => id !== itemId);
      } else {
        return [...prevSelectedItems, itemId];
      }
    });
    setIsAllSelect(false);
    console.log(selectedItems);
  };

  const handleSelectAll = () => {
    setIsAllSelect(!isAllSelect);
    if (!isAllSelect) {
      const allItemIds = data?.items.map(item => item.id) || [];
      setSelectedItems(allItemIds);
    } else {
      setSelectedItems([]);
    }
    console.log(selectedItems);
  };

  const formatDate = (dateString: string) => {
    const formattedDate = new Date(dateString).toLocaleDateString("ko-KR");
    return formattedDate.replace(/\//g, ".");
  };

  return (
    <div>
      {isDelete ? (
        <div>
          <Button popupSize={"small"} onClick={handleSelectAll}>
            {isAllSelect ? "전체해제" : "전체선택"}
          </Button>
          <Button
            variant={"primary"}
            popupSize={"small"}
            onClick={() => handleDelete()}
          >
            삭제
          </Button>
        </div>
      ) : (
        <Button
          variant={"primary"}
          popupSize={"small"}
          onClick={handleisDelete}
        >
          선택
        </Button>
      )}
      {data?.items.map(item => (
        <div key={item.id}>
          <span>{item.content}</span>
          {isDelete && (
            <button
              key={item.id}
              onClick={() => handleToggleSelectItem(item.id)}
            >
              {selectedItems.includes(item.id) ? "✅" : "☑️"}
            </button>
          )}
          <p>{formatDate(item.updated)}</p>
          <span>{item.expand?.logId.content}에 남긴 댓글</span>
          <button>{item.replies.length}개의 답글</button>
          <hr />
        </div>
      ))}
      <p>{selectedItems}</p>
    </div>
  );
};

export default myComments;
