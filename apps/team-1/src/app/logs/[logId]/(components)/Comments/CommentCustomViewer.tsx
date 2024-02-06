import MarkdownPreview from "@uiw/react-markdown-preview";

interface commentCustomViewerProps {
  content: string;
}

const CommentCustomViewer = ({ content }: commentCustomViewerProps) => {
  return <MarkdownPreview source={content} />;
};

export default CommentCustomViewer;
