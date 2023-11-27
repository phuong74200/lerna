import { Router } from "lerna-router";

import Both, { bothLoader } from "./sample/both";
import Home from "./sample/home";
import Page from "./sample/page";
import Pane from "./sample/pane";
import { suspenseLoader, SuspenseSample } from "./sample/suspense";

export const app = new Router();

app.page("/", null, Home);
app.page("/sample-page", null, Page);

app.pane("/sample-pane", null, Pane);
app.pane("/sample-load", suspenseLoader, SuspenseSample);

app.both("/sample-both", bothLoader, Both);

app.page("*", null, () => <h1>404</h1>);

export const RouterProvider = app.RouterProvider;
export const useRouteContext = app.useRouteContext;
