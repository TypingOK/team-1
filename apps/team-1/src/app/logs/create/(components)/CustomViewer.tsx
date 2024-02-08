"use client";

import MarkdownPreview from "@uiw/react-markdown-preview";

interface customViewerProps {
  content: string;
}

const CustomViewer = ({ content }: customViewerProps) => {
  return (
    <div className="inline-block w-full text-left p-[20px] bg-neutral-10 rounded-r-[10px]">
      <div className="w-full">
        <MarkdownPreview source={content} />
      </div>
    </div>
  );
};

export default CustomViewer;
