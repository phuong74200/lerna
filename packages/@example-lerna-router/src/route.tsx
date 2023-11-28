import { lazy } from "react";
import { Router } from "lerna-router";

import { bothLoader } from "./sample/both";

const Home = lazy(() => import("./sample/home"));
const Page = lazy(() => import("./sample/page"));
const Pane = lazy(() => import("./sample/pane"));
const Both = lazy(() => import("./sample/both"));
const VerticalScaling = lazy(() => import("./advance/vertical-scaling"));

import ModalNavigate from "./advance/modal-navigate";
import { suspenseLoader, SuspenseSample } from "./sample/suspense";

export const app = new Router();

/**
 * Main concept
 */

app.page("/", null, Home);
app.page("/sample-page", null, Page);

app.pane("/sample-pane", null, Pane);
app.pane("/sample-load", suspenseLoader, SuspenseSample);
app.pane("/modal-navigate", null, ModalNavigate);

app.both("/sample-both", bothLoader, Both);

/**
 * Advance
 */

app.page("/vertical-scale", null, VerticalScaling);

app.page("*", null, () => <h1>404</h1>);

export const RouterProvider = app.RouterProvider;
export const useRouteContext = app.useRouteContext;
