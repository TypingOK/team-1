import React from "react";
import { Editor } from "@tiptap/react";

interface ToolBarProps {
  editor: Editor | null;
}

function ToolBar({ editor }: ToolBarProps) {
  if (!editor) return null;

  return (
    <div className="flex items-center justify-center gap-2 p-6 py-3 border-b-2 sm:gap-8">
      <div className="flex items-center justify-center gap-2">
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          className={editor.isActive("italic") ? "is-active" : ""}
        >
          기울기
        </button>
      </div>
      <div className="flex items-center justify-center gap-2"></div>

      <div className="flex items-center justify-center gap-2"></div>
    </div>
  );
}

export default ToolBar;
