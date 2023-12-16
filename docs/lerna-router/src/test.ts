import { lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Router } from "lerna-router";

const Home = lazy(() => import("./sample/home"));
const Page = lazy(() => import("./sample/page"));
const Pane = lazy(() => import("./sample/pane"));
const Both = lazy(() => import("./sample/both"));
const VerticalScaling = lazy(() => import("./advance/vertical-scaling"));
const ModalNavigate = lazy(() => import("./advance/modal-navigate"));
const ParamModal = lazy(() => import("./sample/param-modal"));

import { bothLoader } from "./sample/both";
import { suspenseLoader, SuspenseSample } from "./sample/suspense";

export const app = new Router();

/**
 * Main concept
 */

app.page("/", null, Home);
app.page("/sample-page", null, Page);

app.page("/wrapper", null, () => (
  <>
    <h1>| Wrapper 1</h1>
    <Outlet />
  </>
));
app.page("/wrapper", null, () => (
  <>
    <h1>| Wrapper 2</h1>
    <Outlet />
  </>
));
app.page("/wrapper", null, Page);

/**
 * put the Suspense component wrap the Modal Outlet for better
 * loading and prevent the background from flashing and re-rendering
 */
app.pane("/sample-pane", null, () => (
  <Suspense>
    <Pane />
  </Suspense>
));
app.pane("/sample-load", suspenseLoader, () => (
  <Suspense>
    <SuspenseSample />
  </Suspense>
));
app.pane("/modal-navigate", null, () => (
  <Suspense>
    <ModalNavigate />
  </Suspense>
));
app.pane("/params/:id", null, () => (
  <Suspense>
    <ParamModal />
  </Suspense>
));

app.pane("/sample-both", bothLoader, Both);
app.page("/sample-both", null, Outlet);
app.page("/sample-both", bothLoader, Both);

/**
 * Advance
 */

app.page("/vertical-scale", null, VerticalScaling);

app.page("*", null, () => <h1>404</h1>);

// eslint-disable-next-line no-console
console.log(app);

export const RouterProvider = app.RouterProvider;
export const useRouteContext = app.useRouteContext;
