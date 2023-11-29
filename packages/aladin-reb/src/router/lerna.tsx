import { Router } from "lerna-router";

import { Error404Page, LoginPage } from "@/pages";
import ImageViewPage from "@/pages/image/[id]";

const app = new Router();

export const useRouteContext = app.useRouteContext;

app.page("/", null, () => <h1>Not found any</h1>);

app.page("/login", null, LoginPage);

app.both("/image/:id", null, ImageViewPage);

app.page("*", null, Error404Page);

console.log(app);

export const LernaRouterProvider = app.RouterProvider;
