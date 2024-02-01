import Markdown from "@uiw/react-md-editor";

interface customViewerProps {
  content: string;
}

const CustomViewer = ({ content }: customViewerProps) => {
  return (
    <div className="inline-block w-full md:w-[calc(100%-280px)] max-w-[800px] text-left">
      <div className="w-full">
        <Markdown.Markdown className="js-toc-content" source={content} />
      </div>
    </div>
  );
};

export default CustomViewer;
