"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Markdown } from "tiptap-markdown";
import Placeholder from "@tiptap/extension-placeholder";
import Image from "@tiptap/extension-image";
import ToolBar from "./CustomToolbar";
import CustomViewer from "../../[logId]/(components)/CustomViewer";
import "./style.css";
import { Badge, Button, ModalClose, ModalContent } from "design-kit";
import { useState } from "react";

const CustomEditor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Markdown.configure({
        html: false,
        tightLists: true,
        tightListClass: "tight",
        bulletListMarker: "*",
        linkify: true,
        breaks: false,
        transformPastedText: false,
        transformCopiedText: false,
      }),
      Placeholder.configure({
        placeholder: "l 내용 입력하기",
      }),
      Image,
    ],
    content: "",
  });

  const result = editor?.storage.markdown.getMarkdown();

  const [state, setState] = useState<string[]>([]);

  return (
    <>
      <ToolBar editor={editor} />
      <input
        placeholder="제목을 입력하세요"
        className="h-[54px] w-full border border-neutral-10 placeholder:text-neutral-50 my-[16px] rounded-[10px] py-[13px] px-[18px] body-4-bold"
      />
      <div className="flex min-h-[636px] rounded-[10px] border border-neutral-10">
        <EditorContent
          editor={editor}
          className="p-[20px] inline-block w-full"
        />
        <CustomViewer content={result || ""} />
      </div>
      <ModalContent className="w-[1050px] p-0 max-h-full">
        <div className="px-[80px] py-[60px]">
          <h1 className="body-2-bold mb-[60px]">세부 정보 설정</h1>
          <div className="flex gap-[25px]">
            <div className="w-[333px]">
              <p className="body-5-bold">썸네일 편집</p>
            </div>
            <div className="border-l border-neutral-5" />
            <div className="w-[500px] grid gap-[25px]">
              <div className="grid gap-[10px]">
                <p className="body-5-bold">태그</p>
                <div className="bg-[#F5F8FF] min-h-[86px] rounded-[10px] p-[12px]"></div>
              </div>
              <div className="grid gap-[10px]">
                <p className="body-5-bold">설정</p>
                <div className="bg-[#F5F8FF] min-h-[160px] rounded-[10px] px-[21px] py-[13px]">
                  <div className="grid gap-[20px]">
                    <div className="grid gap-[8px]">
                      <p className="body-6-bold text-neutral-70">공개</p>
                      <div className="flex gap-[10px]">
                        <Badge variant={"primary"} className="cursor-pointer">
                          전체공개
                        </Badge>
                        <Badge
                          variant={"outlinePrimary"}
                          className="cursor-pointer"
                        >
                          비공개
                        </Badge>
                      </div>
                    </div>
                    <div className="grid gap-[8px]">
                      <p className="body-6-bold text-neutral-70">시리즈</p>
                      <div className="flex gap-[10px]">
                        <Badge variant={"primary"} className="cursor-pointer">
                          개발일지
                        </Badge>
                        <Badge
                          variant={"outlinePrimary"}
                          className="cursor-pointer"
                        >
                          선택안함
                        </Badge>
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
                onClick={() => {
                  console.log("확인");
                }}
              >
                업로드
              </Button>
            </ModalClose>
          </div>
        </div>
      </ModalContent>
    </>
  );
};

export default CustomEditor;
