import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const codeString = `import { Router } from "lerna-router";

import VerticalScaling from "./advance/vertical-scaling";
import Both, { bothLoader } from "./sample/both";
import Home from "./sample/home";
import Page from "./sample/page";
import Pane from "./sample/pane";
import { suspenseLoader, SuspenseSample } from "./sample/suspense";

export const app = new Router();

app.page("/", null, Home);
app.page("/sample-page", null, Page);

app.both("/sample-both", bothLoader, Both);

app.page("/vertical-scale", null, VerticalScaling);

app.page("*", null, () => <h1>404</h1>);
`;

const transformedString = `const route = [
  {
    path: "/",
    Component: Outlet,
    children: [
      {
        path: "",
        children: [],
        id: "k7aTd6rdaYkhPsJ44Lhmz",
        Component: Home,
      },
      {
        path: "sample-page",
        children: [],
        id: "yFKvhl44N7_DesHS3tA63",
        Component: Page,
      },
      {
        path: "sample-both",
        children: [],
        id: "_FoMX4MLyXlQNueQO_vRC",
        loader: bothLoader,
        Component: Both,
      },
      {
        path: "vertical-scale",
        children: [],
        id: "2w5uFx6m64fbz1F9-K8Cg",
        Component: VerticalScaling,
      },
      {
        path: "*",
        children: [],
        id: "kjwkBVep4pUgD3CV2YzNC",
        Component: () => <h1>404</h1>,
      },
    ],
    id: "l9iCtaDJXwdXyAbGiAoUm",
  },
];`;

export default function VerticalScaling() {
  return (
    <div className="article container">
      <p>
        The following code will be tranformed into react-router-dom nested route. Then, using{" "}
        <a
          href="https://reactrouter.com/en/main/routers/create-browser-router"
          target="_blank"
          rel="noreferrer"
        >
          createBrowserRouter
        </a>{" "}
        to define the route.
      </p>
      <p>For example the following code:</p>
      <SyntaxHighlighter language="tsx" style={atomDark}>
        {codeString}
      </SyntaxHighlighter>
      <p>Then will be transformed into:</p>
      <SyntaxHighlighter language="jsx" style={atomDark}>
        {transformedString}
      </SyntaxHighlighter>
      <p>
        So you can easily put it into <code>RouterProvider</code> like this
      </p>
      <SyntaxHighlighter language="tsx" style={atomDark}>
        {`import { RouterProvider } from "react-router-dom";

<RouterProvider router={createBrowserRouter(router)} />`}
      </SyntaxHighlighter>
      <p>
        But, if you want to use sort of lerna-router&apos;s feature like <code>app.pane</code> or{" "}
        <code>app.useRouteContext</code>
        (Modal route) you should using lerna-router&apos;s alternative <code>RouterProvider</code>
      </p>
      <SyntaxHighlighter language="tsx" style={atomDark}>
        {`import { Router } from "lerna-router";

const app = new Router();

<app.RouterProvider />`}
      </SyntaxHighlighter>
      <p>
        <code>app.RouterProvider</code> is just react-router-dom&apos;s <code>RouterProvider</code>{" "}
        so they share the same props
      </p>
    </div>
  );
}
