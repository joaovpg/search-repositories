import ReactMarkdown, { type Options } from "react-markdown";
import remarkGfm from "remark-gfm";
import "github-markdown-css/github-markdown.css";

function Markdown({ children }: Readonly<Options>) {
  return (
    <article className="p-4 markdown-body rounded-lg">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{children}</ReactMarkdown>
    </article>
  );
}

export default Markdown;
