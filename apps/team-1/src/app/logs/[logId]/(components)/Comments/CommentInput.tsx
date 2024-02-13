"use client";

import Placeholder from "@tiptap/extension-placeholder";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React, { Dispatch, SetStateAction, useEffect } from "react";
import { Markdown } from "tiptap-markdown";

interface commentInput {
  comment: string;
  setComment: Dispatch<SetStateAction<string>>;
}

const CommentInput = ({ setComment, comment }: commentInput) => {
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
        placeholder: "이 글에 대한 의견을 남겨주세요.",
      }),
    ],
    content: comment,
  });

  const result = editor?.storage.markdown.getMarkdown();

  useEffect(() => {
    setComment(result);
  }, [result]);

  return (
    <EditorContent
      editor={editor}
      className="p-[15px] inline-block w-full h-full overflow-y-scroll comment-scroll bg-neutral-0 rounded-[10px]"
    />
  );
};

export default CommentInput;
