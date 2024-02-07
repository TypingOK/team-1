"use client";

import React, { ChangeEvent, useCallback, useRef } from "react";
import { Editor } from "@tiptap/react";
import { Button, ModalTrigger } from "design-kit";
import { handleUploadImage } from "@/utils/api";
import { API_SERVER } from "@/constants";

interface ToolBarProps {
  editor: Editor | null;
}

function ToolBar({ editor }: ToolBarProps) {
  const selectFile = useRef<HTMLInputElement>(null);

  if (!editor) return null;

  const addImage = async () => {
    if (selectFile.current) selectFile.current.click();
  };

  const handleUploadFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const formData = new FormData();

    if (event.target.files !== null) {
      formData.append("images", event.target.files[0]);
    }

    const res = await handleUploadImage(formData);

    editor
      .chain()
      .focus()
      .setImage({
        src: `${API_SERVER}/api/files/${res.collectionName}/${res.id}/${res.images}`,
      })
      .run();
  };

  return (
    <>
      <div className="grid grid-cols-[auto_244px] rounded-[10px] body-7-bold text-neutral-50 gap-[16px]">
        <div className="bg-[#F8F8F9] px-[20px] py-[6px] rounded-[10px] w-full flex items-center ">
          <div className="flex gap-[20px]">
            <button onClick={addImage} className="flex flex-col items-center">
              <img src="/icons/create/image.svg" width="18px" height="18px" />
              <p>이미지</p>
            </button>
            <button
              onClick={() => editor.chain().focus().toggleBlockquote().run()}
              disabled={!editor.can().chain().focus().toggleBlockquote().run()}
              className="flex flex-col items-center"
            >
              <img src="/icons/create/quote.svg" width="18px" height="18px" />
              <p>인용구</p>
            </button>
            <button
              onClick={() => editor.chain().focus().setHorizontalRule().run()}
              disabled={!editor.can().chain().focus().setHorizontalRule().run()}
              className="flex flex-col items-center"
            >
              <img src="/icons/create/line.svg" width="18px" height="18px" />
              <p>구분선</p>
            </button>
            <button
              onClick={() => editor.chain().focus().setHorizontalRule().run()}
              disabled={!editor.can().chain().focus().setHorizontalRule().run()}
              className="flex flex-col items-center"
            >
              <img src="/icons/create/link.svg" width="18px" height="18px" />
              <p>링크</p>
            </button>
            <button
              onClick={() => editor.chain().focus().toggleCodeBlock().run()}
              disabled={!editor.can().chain().focus().toggleCodeBlock().run()}
              className="flex flex-col items-center"
            >
              <img src="/icons/create/code.svg" width="18px" height="18px" />
              <p>코드</p>
            </button>
          </div>
        </div>
        <ModalTrigger asChild>
          <Button
            variant={"primary"}
            className="h-[53px] w-[244px] flex gap-[10px]"
          >
            <img src="/icons/create/publish.svg" />
            <span>발행하기</span>
          </Button>
        </ModalTrigger>
        <div className="flex gap-[16px]">
          <div className="bg-[#F8F8F9] px-[18px] py-[8px] h-[40px] rounded-[10px] w-full flex items-center gap-[8px]">
            <button
              onClick={() => editor.chain().focus().toggleBold().run()}
              disabled={!editor.can().chain().focus().toggleBold().run()}
              className="flex flex-col items-center"
            >
              <img src="/icons/create/Bold.svg" width="18px" height="18px" />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleItalic().run()}
              disabled={!editor.can().chain().focus().toggleItalic().run()}
              className="flex flex-col items-center"
            >
              <img src="/icons/create/Italic.svg" width="18px" height="18px" />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleStrike().run()}
              disabled={!editor.can().chain().focus().toggleStrike().run()}
              className="flex flex-col items-center"
            >
              <img src="/icons/create/Cancle.svg" width="18px" height="18px" />
            </button>
            <div className="border-l border-neutral-10 h-[16px]" />
            <button
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 1 }).run()
              }
              disabled={
                !editor.can().chain().focus().toggleHeading({ level: 1 }).run()
              }
              className="flex flex-col items-center"
            >
              <img src="/icons/create/H1.svg" width="18px" height="18px" />
            </button>
            <button
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 2 }).run()
              }
              disabled={
                !editor.can().chain().focus().toggleHeading({ level: 2 }).run()
              }
              className="flex flex-col items-center"
            >
              <img src="/icons/create/H2.svg" width="18px" height="18px" />
            </button>
            <button
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 3 }).run()
              }
              disabled={
                !editor.can().chain().focus().toggleHeading({ level: 3 }).run()
              }
              className="flex flex-col items-center"
            >
              <img src="/icons/create/H3.svg" width="18px" height="18px" />
            </button>
            <button
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 4 }).run()
              }
              disabled={
                !editor.can().chain().focus().toggleHeading({ level: 4 }).run()
              }
              className="flex flex-col items-center"
            >
              <img src="/icons/create/H4.svg" width="18px" height="18px" />
            </button>
          </div>
        </div>
        <div className="flex border border-neutral-10 rounded-[10px] text-neutral-70 gap-[23px] justify-center items-center">
          <button className="flex gap-[5px]">
            <img src="/icons/create/save.svg" width="18px" height="18px" />
            <span>임시저장</span>
          </button>
          <div className="border-l border-neutral-10 h-[16px]" />
          <button className="flex gap-[5px]">
            <img src="/icons/create/view.svg" width="18px" height="18px" />
            <span>미리보기</span>
          </button>
        </div>
      </div>
      <input
        ref={selectFile}
        type="file"
        className="hidden"
        accept="image/*"
        onChange={handleUploadFile}
      />
    </>
  );
}

export default ToolBar;
