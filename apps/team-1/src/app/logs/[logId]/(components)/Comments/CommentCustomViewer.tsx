import MarkdownPreview from "@uiw/react-markdown-preview";
import "./style.css";

interface commentCustomViewerProps {
  content: string;
}

const CommentCustomViewer = ({ content }: commentCustomViewerProps) => {
  return <MarkdownPreview source={content} />;
};

export default CommentCustomViewer;
