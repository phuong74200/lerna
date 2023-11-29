import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { LoaderFunctionArgs } from "lerna-router";

import Modal from "../components/modal";
import { useRouteContext } from "../route";

const codeString = `import { LoaderFunctionArgs, Router } from "lerna-router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const app = new Router();

export const bothLoader = async ({ id, context }: LoaderFunctionArgs) => {
  context.set(id, {
    floated: Math.random() > 0.5,
  });

  return null;
};

export default function Both() {
  const context = app.useRouteContext();

  if (context?.floated) {
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
          }}
        >
          <p>{content}</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1>{content}</h1>
    </div>
  );
}

app.both("/both", bothLoader, () => <Both />);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <app.RouterProvider />
  </StrictMode>,
);
`;

export const bothLoader = async ({ id, context }: LoaderFunctionArgs) => {
  context.set(id, {
    floated: Math.random() > 0.5,
  });

  return null;
};

export default function Both() {
  const context = useRouteContext();

  if (context?.floated) {
    return (
      <Modal>
        <div className="article pane container">
          <SyntaxHighlighter language="tsx" style={atomDark}>
            {codeString}
          </SyntaxHighlighter>
        </div>
      </Modal>
    );
  }

  return (
    <SyntaxHighlighter language="tsx" style={atomDark}>
      {codeString}
    </SyntaxHighlighter>
  );
}
