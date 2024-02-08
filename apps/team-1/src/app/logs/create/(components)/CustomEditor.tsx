"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Markdown } from "tiptap-markdown";
import Placeholder from "@tiptap/extension-placeholder";
import Image from "@tiptap/extension-image";
import ToolBar from "./CustomToolbar";
import "./style.css";
import CustomViewer from "./CustomViewer";
import ModalContents from "./ModalContents";
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
  const [title, setTitle] = useState<string>("");

  const result = editor?.storage.markdown.getMarkdown();

  return (
    <>
      <ToolBar content={result || ""} title={title} editor={editor} />
      <input
        placeholder="제목을 입력하세요"
        className="h-[54px] w-full border border-neutral-10 placeholder:text-neutral-50 my-[16px] rounded-[10px] py-[13px] px-[18px] body-4-bold"
        value={title}
        onChange={event => setTitle(event.target.value)}
      />
      <div className="flex min-h-[636px] rounded-[10px] border border-neutral-10">
        <EditorContent
          editor={editor}
          className="p-[20px] inline-block w-full"
        />
        <CustomViewer content={result || ""} />
      </div>
      <ModalContents />
    </>
  );
};

export default CustomEditor;
