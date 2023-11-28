import { Suspense } from "react";
import { Await, defer, useLoaderData } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const codeString = `import { Suspense } from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Await, defer, useLoaderData } from "react-router-dom";

const sleep = (ms: number) =>
  new Promise((resolve) =>
    setTimeout(() => {
      resolve("preload content");
    }, ms),
  );

export const suspenseLoader = async () => {
  const data = sleep(1000);

  return defer({
    data,
  });
};

export function SuspenseSample() {
  const { data } = useLoaderData() as { data: string };

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
        <Suspense fallback={<p>Loading sample code...</p>}>
          <Await resolve={data} errorElement={<p>Error loading sample code!</p>}>
            {(data) => (
              <SyntaxHighlighter language="tsx" style={atomDark}>
                {data}
              </SyntaxHighlighter>
            )}
          </Await>
        </Suspense>
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <app.RouterProvider />
  </StrictMode>,
);`;

const sleep = (ms: number) =>
  new Promise((resolve) =>
    setTimeout(() => {
      resolve(codeString);
    }, ms),
  );

export const suspenseLoader = async () => {
  const data = sleep(1000);

  return defer({
    data,
  });
};

export function SuspenseSample() {
  const { data } = useLoaderData() as { data: string };

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
        <Suspense fallback={<p>Loading sample code...</p>}>
          <Await resolve={data} errorElement={<p>Error loading sample code!</p>}>
            {(data) => (
              <SyntaxHighlighter
                customStyle={{
                  maxHeight: "calc(100vh - 100px)",
                }}
                language="tsx"
                style={atomDark}
              >
                {data}
              </SyntaxHighlighter>
            )}
          </Await>
        </Suspense>
      </div>
    </div>
  );
}
