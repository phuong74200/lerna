/**
 * This is the entry point for the application for testing purposes. Notthing to see here.
 */

import { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";

import Router from "@/core";
import TreeBuilder from "@/tree-builder";

import { pagev3 } from "./core/route-with-middleware";

const LazyComponent = lazy(() => import("./lazy"));

const app = new Router();

// app.page("1", null, () => <p>App</p>);
// app.page("/", null, () => <p>Main</p>);
// app.page("1/2/3/4", null, () => <h1>App</h1>);
// app.pane("1/2/3/4", null, () => <h1>App</h1>);

// console.log(app);

app.page("/", null, function m1() {
  return (
    <p>
      Main1 <Link to="/sa">to</Link>
    </p>
  );
});

app.next(
  () => {
    return {
      loader: async () => null,
      Component: () => (
        <>
          <h1>Wraper xx</h1>
          <Outlet />
        </>
      ),
    };
  },
  () => {
    return {
      loader: async () => null,
      Component: () => (
        <>
          <h1>Wraper 1.5</h1>
          <Outlet />
        </>
      ),
    };
  },
);

app.next(() => {
  return {
    loader: async () => null,
    Component: () => (
      <>
        <h1>Wraper 2</h1>
        <Outlet />
      </>
    ),
  };
});

app.page("wrap", null, function m1() {
  return (
    <div>
      <h1>hello world</h1>
    </div>
  );
});

app.page("wrap/sub", null, function m1() {
  return (
    <div>
      <h1>hello world</h1>
    </div>
  );
});

app.page("wrap/about/@/@/@", null, () => {
  return <h1>asd</h1>;
});

// app.page("a/b/1", null, function m1() {
//   return <p>Main1</p>;
// });
// app.page("a/b/2", null, function m1() {
//   return <p>Main1</p>;
// });

const c = {
  e: <h1>asd</h1>,
};

createRoot(document.getElementById("root")!).render(
  <Suspense fallback={<h1>Loading</h1>}>
    <RouterProvider
      router={createBrowserRouter([
        {
          ...pagev3<{
            random: number;
          }>(
            async (res, ctx) => {
              await new Promise((r) => setTimeout(r, 1000));
              ctx.random = Math.random();
            },
            async (res, ctx) => {
              await new Promise((r) => setTimeout(r, 1000));
              res(
                ctx.random > 0.5 ? (
                  <LazyComponent e={ctx.random} />
                ) : (
                  <h1>asd2 {ctx.random}</h1>
                ),
              );
            },
          ),
          path: "/",
        },
      ])}
    />
  </Suspense>,
);

const tb = new TreeBuilder();
tb.push("a/b/c");
tb.push("1/2/3");

console.log(tb);
