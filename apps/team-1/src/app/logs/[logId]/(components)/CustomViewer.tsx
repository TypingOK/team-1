import MarkdownPreview from "@uiw/react-markdown-preview";

interface customViewerProps {
  content: string;
}

const CustomViewer = ({ content }: customViewerProps) => {
  return (
    <div className="inline-block w-full md:w-[calc(100%-280px)] max-w-[800px] text-left">
      <div className="w-full">
        <MarkdownPreview className="js-toc-content" source={content} />
      </div>
    </div>
  );
};

export default CustomViewer;
