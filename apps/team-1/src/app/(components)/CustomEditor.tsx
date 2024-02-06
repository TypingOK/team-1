"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Markdown } from "tiptap-markdown";
import ToolBar from "./CustomToolbar";
import CustomViewer from "../logs/[logId]/(components)/CustomViewer";

Markdown.configure({
  html: false,
  tightLists: true,
  tightListClass: "tight",
  bulletListMarker: "*",
  linkify: false,
  breaks: false,
  transformPastedText: false,
  transformCopiedText: false,
});

const CustomEditor = () => {
  const editor = useEditor({
    extensions: [StarterKit, Markdown],
    content: "# 1 Hello World! 🌎️",
    enableInputRules: false,
  });

  const result = editor?.getText();

  return (
    <>
      <ToolBar editor={editor} />
      <EditorContent editor={editor} />
      <div className="p-[30px]">
        <CustomViewer content={result || ""} />
      </div>
    </>
  );
};

export default CustomEditor;
