"use client";

import { Button, Select, SelectContent, SelectGroup, SelectIcon, SelectItem, SelectTrigger, SelectValue } from "design-kit";
import { useState } from "react";
import { useGetTargetViewLogs } from "@/hooks/queries/useGetMyViewLogs";
import { useSearchParams } from "next/navigation";
import { pb } from "@/utils/api";
import { ExpandLogTypes, userTypes } from "@/types";

const MyViewsLog = () => {
  const userData = pb.authStore.model as userTypes;
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const { data } = useGetTargetViewLogs(page, userData?.id, page, 30);
  console.log(data);

  const [isDelete, setIsDelete] = useState<boolean>(false);
  const [isAllSelect, setIsAllSelect] = useState<boolean>(false);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [directState, setDirectState] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  // const deleteCommentsMutation = useDeleteLikesLogs(userData?.id, selectedItems);

  const handleisDelete = () => {
    setIsDelete(!isDelete);
    setSelectedItems([]);
    setIsAllSelect(false);
  };

  const handleDelete = async () => {
    if (selectedItems.length > 0) {
      // await deleteCommentsMutation.mutateAsync();
      setIsAllSelect(false);
    }
    setIsDelete(false);
  };

  const handleSelectAll = () => {
    setIsAllSelect(!isAllSelect);
    if (!isAllSelect) {
      const allItemIds = data?.items.flatMap(item => item.expand?.logId.map(log => log.id)) || [];
      setSelectedItems(isAllSelect ? [] : allItemIds.filter(id => id !== undefined) as string[]);
    } else {
      setSelectedItems([]);
    }
    console.log(selectedItems);
  };

  const closeModal = () => {
    setIsModalOpen(!isModalOpen);
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


  const formatDate = (dateString: string) => {
    const formattedDate = new Date(dateString).toLocaleDateString("ko-KR");
    return formattedDate.replace(/\//g, ".")
  };

  return (
    <div className="flex flex-col gap-[70px]">
      {data && data?.items.length != 0 ? <div className="flex justify-between">
        <Select>
          <SelectTrigger
            className="flex w-[126px] h-[40px] rounded-[20px] p-[9px] pl-[15px] pr-[15px] gap-[20px] border-stroke-10 item-center justify-between"
          >
            <SelectValue placeholder="정렬방식" className="text-[16px] font-normal flex items-center" />
            <SelectIcon className="h-full flex items-center">
              {directState
                ? <img src="/icons/mypage/dropdowned_btn.svg" />
                : <img src="/icons/mypage/dropdown_btn.svg" />
              }
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
            <Button popupSize={"small"} onClick={handleSelectAll} className="w-[135px] h-[40px] text-[16px] font-semibold border-neutral-20">
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
        : <div className="flex flex-col item-center justify-center pt-[232px] gap-[18px]">
          <img src="/icons/mypage/waring.svg" className="h-[24px]" />
          <p className="text-center body-5-bold">관심 로그가 없습니다</p>
        </div>
      }
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-[#000000] bg-opacity-40 flex items-center justify-center z-10">
          <div className="fixed top-1/2 left-1/2 w-[331.5px] h-[167.41px] bg-neutral-0 rounded-[10px] flex flex-col justify-between">
            <div className="p-[30.75px] flex flex-col gap-[18px]">
              <p className="body-6-bold text-neutral-100 text-center">삭제하기</p>
              <p className="body-7 text-neutral-100 text-center">관심 로그에서 삭제하시겠습니까?</p>
            </div>
            <div className="flex justify-end">
              <Button
                onClick={closeModal}
                className="h-[45px] w-[165.75px] text-[16px] font-semibold text-primary-100 bg-primary-5 border-none rounded-none"
                style={{ borderBottomLeftRadius: '10px' }}
              >
                취소
              </Button>
              <Button
                variant={"primary"}
                onClick={() => {
                  closeModal();
                  handleDelete();
                }}
                className="h-[45px] w-[165.75px] text-[16px] font-semibold rounded-none"
                style={{ borderBottomRightRadius: '10px' }}
              >
                확인
              </Button>
            </div>
          </div>
        </div>
      )}
      {data && data.items.map(item => (
        <div key={item.id} className="grid grid-cols-2 gap-x-[52px] gap-y-[30px]">
          {item.expand?.logId.map((log: ExpandLogTypes) => (
            <div key={log.id} className="flex flex-col gap-[10px]">
              <div className="relative">
                <img className="w-[302px] h-[158px] rounded-[10px] object-contain" src={log.thumbnail} alt="썸네일 없음" />
                {isDelete && (
                  <button
                    key={log.id}
                    onClick={() => handleToggleSelectItem(log.id)}
                    className="absolute m-[2px] right-[10px] top-[10px]"
                  >
                    {selectedItems.includes(log.id)
                      ? <img src="/icons/mypage/check.svg" className="min-w-[23.96px] flex-shrink-0" />
                      : <img src="/icons/mypage/non_check.svg" className="min-w-[23.96px] flex-shrink-0" />}
                  </button>
                )}
              </div>
              <p className="body-7-bold text-neutral-50">{log.series ? log.series : "없음"}</p>
              <p className="body-6-bold text-neutral-90">{log.title}</p>
              <div className="flex gap-[7px]">
                <span className="body-7 text-neutral-50">{formatDate(log.created)}</span>
                <span className="body-7 text-stroke-10">|</span>
                <img src="/icons/mypage/heart_full.svg"></img>
                <span className="body-7 text-neutral-50">{log.likes}</span>
                <span className="body-7 text-stroke-10">|</span>
                <img src="/icons/mypage/eyes_full.svg"></img>
                <span className="body-7 text-neutral-50">{log.views}</span>
              </div>
              <div className="flex gap-[5px] items-center">
                <div className="w-[24px] h-[24px]">
                  <img src={`https://nf01uyzvha.execute-api.ap-northeast-2.amazonaws.com/api/files/_pb_users_auth_/${log.expand?.userId.id}/${log.expand?.userId.profileImage}`}></img>
                </div>
                <span className="body-7 text-neutral-30">{log.expand?.userId.username}</span>
              </div>
            </div>
          ))}


        </div>
      ))}
    </div>
  )
}
export default MyViewsLog;