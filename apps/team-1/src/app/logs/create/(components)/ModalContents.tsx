"use client";

import { createLog } from "@/recoil/createLogState";
import {
  handleGetUserData,
  handleLogCreate,
  handleLogsTagsMapCreate,
  handleTagCreate,
  handleTagGetByTitle,
} from "@/utils/api";
import { Badge, Button, ModalClose, ModalContent } from "design-kit";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { useRouter } from "next/navigation";

const ModalContents = () => {
  const [isWrite, setIsWrite] = useState<boolean>(false);
  const [tags, setTags] = useState<string[]>([]);
  const [selectedSeries, setSelectedSeries] = useState<string>("선택안함");
  const [isPrivate, setIsPrivate] = useState<boolean>(false);
  const [logData] = useRecoilState(createLog);
  const userData = handleGetUserData();
  const router = useRouter();

  const series = ["개발일지", "정보공유", "회고록", "튜토리얼", "취업"];

  const handleUpload = async () => {
    if (userData !== null) {
      const logRes = await handleLogCreate({
        ...logData,
        userId: userData.id,
        tags: tags.join(","),
        thumbnail: logData?.images[0] ? logData?.images[0] : logData.thumbnail,
        private: isPrivate,
      });

      const tagsRes = await Promise.all(
        tags.map(item => handleTagGetByTitle(item)),
      );

      await Promise.all(
        tagsRes.map(item =>
          handleLogsTagsMapCreate({ logId: logRes.id, tagId: item.id }),
        ),
      );

      router.replace(`/logs/create/complete?logId=${logRes.id}`);
    }
  };

  const handleSeriesClick = (target: string) => {
    setSelectedSeries(target);
  };

  if (userData === null) return <div>Error</div>;

  return (
    <ModalContent
      className="w-[1050px] p-0 max-h-full"
      onMouseDown={() => setIsWrite(false)}
    >
      <div className="px-[80px] py-[60px]">
        <h1 className="body-2-bold mb-[60px]">세부 정보 설정</h1>
        <div className="flex gap-[25px]">
          <div className="w-[333px] flex flex-col gap-[10px]">
            <p className="body-5-bold">썸네일 편집</p>
            <div className="rounded-[10px] w-full h-[40px] bg-[#F8F8F9] flex gap-[10px] justify-center items-center">
              <div className="flex gap-[16px] body-7-bold text-neutral-50">
                <div className="flex gap-[5px] items-center">
                  <p>본문</p>
                  <img
                    src="/icons/create/barDropdown.svg"
                    width="8px"
                    height="8px"
                  />
                </div>
                <div className="flex gap-[5px] items-center">
                  <p>나눔고딕</p>
                  <img
                    src="/icons/create/barDropdown.svg"
                    width="8px"
                    height="8px"
                  />
                </div>
                <div className="flex gap-[5px] items-center">
                  <p>16</p>
                  <img
                    src="/icons/create/barDropdown.svg"
                    width="8px"
                    height="8px"
                  />
                </div>
              </div>
              <div className="text-neutral-10">ㅣ</div>
              <div className="flex gap-[10px]">
                <img src="/icons/create/Bold.svg" width="18px" height="18px" />
                <img
                  src="/icons/create/Italic.svg"
                  width="18px"
                  height="18px"
                />
                <img
                  src="/icons/create/Underline.svg"
                  width="18px"
                  height="18px"
                />
                <img
                  src="/icons/create/Cancle.svg"
                  width="18px"
                  height="18px"
                />
              </div>
            </div>
            <div className="bg-[#F5F8FF] w-full h-[175px] rounded-[10px] flex justify-center items-center">
              <img
                src="/icons/create/addImage.svg"
                width="24px"
                height="24px"
              />
            </div>
            <div className="flex gap-[25px] justify-center items-center w-full h-[44px] border rounded-[10px] border-neutral-20 body-7-bold text-neutral-40">
              <div className="flex gap-[3px] items-center">
                <img
                  src="/icons/create/select.svg"
                  width="18px"
                  height="18px"
                />
                <p>콘텐츠에서 선택</p>
              </div>
              <div className="text-neutral-10">ㅣ</div>
              <div className="flex gap-[3px] items-center">
                <img
                  src="/icons/create/addText.svg"
                  width="18px"
                  height="18px"
                />
                <p>텍스트 추가</p>
              </div>
            </div>
            <div className="flex justify-center caption-4 text-neutral-40">
              TEXT
            </div>
          </div>
          <div className="border-l border-neutral-5" />
          <div className="w-[500px] grid gap-[25px]">
            <div className="grid gap-[10px]">
              <p className="body-5-bold">태그</p>
              <div className="bg-[#F5F8FF] min-h-[86px] rounded-[10px] p-[12px] flex flex-wrap gap-[10px]">
                {tags.map(item => (
                  <Badge
                    variant={"outlinePrimary"}
                    className="h-[20px]"
                    editMode={true}
                    onClick={() => {
                      const index = tags.indexOf(item);

                      setTags(prev => [
                        ...prev.slice(0, index),
                        ...prev.slice(index + 1),
                      ]);
                    }}
                    key={item}
                  >
                    {item}
                  </Badge>
                ))}
                <div className="inline-block h-[20px]">
                  {isWrite ? (
                    <input
                      type="text"
                      className="align-top outline-none border-none caption-4 w-[115px] text-[#999999] h-[20px] py-[2px] px-[10px] bg-neutral-0 rounded-[50px]"
                      autoFocus
                      onKeyUp={(
                        event: React.KeyboardEvent<HTMLInputElement>,
                      ) => {
                        if (event.code === "Enter") {
                          const tag = event.currentTarget.value.replace(
                            /\s+/g,
                            "",
                          );

                          if (!tags.includes(tag) && tag !== "")
                            setTags(prev => [...prev, tag]);

                          handleTagCreate({ tagTitle: tag });

                          setIsWrite(prev => !prev);
                        }
                      }}
                    />
                  ) : (
                    <button
                      onClick={() => setIsWrite(prev => !prev)}
                      className="flex caption-4 gap-[6px] text-[#999999] w-[115px] items-center py-[2px] px-[10px] bg-neutral-0 rounded-[50px]"
                    >
                      <img src="/icons/create/tagAdd.svg" />
                      <span>텍스트 추가하기</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
            <div className="grid gap-[10px]">
              <p className="body-5-bold">설정</p>
              <div className="bg-[#F5F8FF] min-h-[160px] rounded-[10px] px-[21px] py-[13px]">
                <div className="grid gap-[20px]">
                  <div className="grid gap-[8px]">
                    <p className="body-6-bold text-neutral-70">공개</p>
                    <div className="flex gap-[10px]">
                      <Badge
                        variant={isPrivate ? "outlinePrimary" : "primary"}
                        className="cursor-pointer"
                        onClick={() => setIsPrivate(prev => !prev)}
                      >
                        전체공개
                      </Badge>
                      <Badge
                        variant={isPrivate ? "primary" : "outlinePrimary"}
                        className="cursor-pointer"
                        onClick={() => setIsPrivate(prev => !prev)}
                      >
                        비공개
                      </Badge>
                    </div>
                  </div>
                  <div className="grid gap-[8px]">
                    <p className="body-6-bold text-neutral-70">시리즈</p>
                    <div className="flex gap-[10px]">
                      <Badge
                        variant={
                          selectedSeries === "선택안함"
                            ? "primary"
                            : "outlinePrimary"
                        }
                        className="cursor-pointer"
                        onClick={() => handleSeriesClick("선택안함")}
                      >
                        선택안함
                      </Badge>
                      {series.map(item => (
                        <Badge
                          key={item}
                          variant={
                            selectedSeries === item
                              ? "primary"
                              : "outlinePrimary"
                          }
                          className="cursor-pointer"
                          onClick={() => handleSeriesClick(item)}
                        >
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-[20px] mt-[50px] justify-center">
          <ModalClose asChild>
            <Button
              popupSize={"small"}
              variant={"outlinePrimary"}
              className="w-[165px] h-[45px] bg-primary-5 hover:bg-primary-10 active:bg-neutral-100"
            >
              닫기
            </Button>
          </ModalClose>
          <ModalClose asChild>
            <Button
              popupSize={"small"}
              variant={"primary"}
              className="w-[165px] h-[45px]"
              onClick={handleUpload}
            >
              업로드
            </Button>
          </ModalClose>
        </div>
      </div>
    </ModalContent>
  );
};

export default ModalContents;
