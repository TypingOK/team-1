"use client";

import { useSearchParams } from "next/navigation";
import { pb } from "@/utils/api";
import { userTypes } from "@/types";
import { useGetTargetComments } from "@/hooks/queries/useGetMyComments";
import useDeleteComments from "@/hooks/queries/useDeleteComments";
import { useState } from "react";
import {
  Button,
  Select,
  SelectContent,
  SelectGroup,
  SelectIcon,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "design-kit";

const MyComments = () => {
  const [isDelete, setIsDelete] = useState<boolean>(false);
  const [isAllSelect, setIsAllSelect] = useState<boolean>(false);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [directState, setDirectState] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

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

  // const handleDirectState = () => {
  //   setDirectState(!directState);
  //   console.log(directState);
  // }

  const closeModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="flex flex-col gap-[70px]">
      {data && data?.items.length !== 0 ? (
        <div className="flex justify-between">
          <Select>
            <SelectTrigger className="flex w-[126px] h-[40px] rounded-[20px] p-[9px] pl-[15px] pr-[15px] gap-[20px] border-stroke-10 item-center justify-between">
              <SelectValue
                placeholder="정렬방식"
                className="text-[16px] font-normal flex items-center"
              />
              <SelectIcon className="h-full flex items-center">
                {directState ? (
                  <img src="/icons/mypage/dropdowned_btn.svg" />
                ) : (
                  <img src="/icons/mypage/dropdown_btn.svg" />
                )}
              </SelectIcon>
            </SelectTrigger>
            <SelectContent className="w-[126px] h-[116px] border-stroke-10 p-[9px] rounded-[20px] bg-neutral-0 z-10">
              <SelectGroup className="flex flex-col gap-[10px] px-[6px]">
                <SelectItem value="최신순">최신순</SelectItem>
                <SelectItem value="인기순">인기순</SelectItem>
                <SelectItem value="시리즈순">시리즈순</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          {isDelete ? (
            <div className="flex gap-[10px]">
              <Button
                popupSize={"small"}
                onClick={handleSelectAll}
                className="w-[135px] h-[40px] text-[16px] font-semibold border-neutral-20"
              >
                {isAllSelect ? "전체해제" : "전체선택"}
              </Button>
              <Button
                variant={"primary"}
                popupSize={"small"}
                onClick={() => closeModal()}
                className="w-[108px] h-[40px] text-[16px] font-semibold"
              >
                삭제
              </Button>
            </div>
          ) : (
            <Button
              variant={"primary"}
              popupSize={"small"}
              onClick={handleisDelete}
              className="w-[108px] h-[40px] text-[16px] font-semibold"
            >
              선택
            </Button>
          )}
        </div>
      ) : (
        <div className="flex flex-col item-center justify-center pt-[232px] gap-[18px]">
          <img src="/icons/mypage/waring.svg" className="h-[24px]" />
          <p className="text-center body-5-bold">내가 쓴 댓글이 없습니다</p>
        </div>
      )}
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-[#000000] bg-opacity-40 flex items-center justify-center">
          <div className="fixed top-1/2 left-1/2 w-[331.5px] h-[167.41px] bg-neutral-0 rounded-[10px] flex flex-col justify-between">
            <div className="p-[30.75px] flex flex-col gap-[18px]">
              <p className="body-6-bold text-neutral-100 text-center">
                삭제하기
              </p>
              <p className="body-7 text-neutral-100 text-center">
                이 댓글을 삭제하시겠습니까?
              </p>
            </div>
            <div className="flex justify-end">
              <Button
                onClick={closeModal}
                className="h-[45px] w-[165.75px] text-[16px] font-semibold text-primary-100 bg-primary-5 border-none rounded-none"
                style={{ borderBottomLeftRadius: "10px" }}
              >
                취소
              </Button>
              <Button
                variant={"primary"}
                onClick={() => {
                  handleDelete();
                  closeModal();
                }}
                className="h-[45px] w-[165.75px] text-[16px] font-semibold rounded-none"
                style={{ borderBottomRightRadius: "10px" }}
              >
                확인
              </Button>
            </div>
          </div>
        </div>
      )}
      <div className="flex flex-col gap-[40px]">
        {data &&
          data?.items.map(item => (
            <div
              key={item.id}
              className="w-[656px] h-[152px] border-b border-stroke-10 flex flex-col"
            >
              <div className="px-[15px] py-[10px] flex flex-col flex-grow gap-[10px]">
                <div className="flex justify-between gap-[5px]">
                  <p className="body-5 text-neutral-100 line-clamp-2">
                    {item.content}
                  </p>
                  {isDelete && (
                    <button
                      key={item.id}
                      onClick={() => handleToggleSelectItem(item.id)}
                    >
                      {selectedItems.includes(item.id) ? (
                        <img
                          src="/icons/mypage/check.svg"
                          className="min-w-[23.96px] flex-shrink-0"
                        />
                      ) : (
                        <img
                          src="/icons/mypage/non_check.svg"
                          className="min-w-[23.96px] flex-shrink-0"
                        />
                      )}
                    </button>
                  )}
                </div>
                <p className="flex items-center body-5 text-neutral-50">
                  {formatDate(item.updated)}
                </p>
              </div>
              <div className="flex items-center px-[16px] py-[10px] justify-between">
                <span className="body-7-bold text-neutral-50">
                  {item.expand?.logId.title}에 남긴 댓글
                </span>
                <button className="body-7-bold text-neutral-50">
                  {item.replies.length}개의 답글
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MyComments;
