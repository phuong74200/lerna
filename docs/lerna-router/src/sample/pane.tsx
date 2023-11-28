import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const codeString = `import { Router } from "lerna-router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const app = new Router();

app.pane("/sample-pane", null, () => (
    <div
      style={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        top: 0,
        left: 0,
        backdropFilter: "blur(4px)",
        background: "rgba(0,0,0,0.5)",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%,-50%)",
        }}
      >
        <SyntaxHighlighter language="tsx" style={atomDark}>
          {codeString}
        </SyntaxHighlighter>
      </div>
    </div>
));

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <app.RouterProvider />
  </StrictMode>,
);`;

export default function Pane() {
  return (
    <div
      style={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        top: 0,
        left: 0,
        backdropFilter: "blur(4px)",
        background: "rgba(0,0,0,0.5)",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%,-50%)",
          maxHeight: "calc(100vh - 2rem)",
          overflow: "auto",
        }}
      >
        <SyntaxHighlighter language="tsx" style={atomDark}>
          {codeString}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
