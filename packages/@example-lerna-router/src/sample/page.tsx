import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const codeString = `import { Router } from "lerna-router";

const app = new Router();

app.page("/sample-page", null, () => <h1>Page content</h1>);`;

export default function Page() {
  return (
    <div>
      <SyntaxHighlighter language="tsx" style={atomDark}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
}
