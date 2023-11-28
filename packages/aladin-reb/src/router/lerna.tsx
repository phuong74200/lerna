import { Link, useLocation } from "react-router-dom";
import { Router } from "lerna-router";

import { Error404Page } from "@/pages";
import ImageViewPage from "@/pages/image/[id]";

const app = new Router();

console.log(app);

app.page("/home", null, () => {
  const location = useLocation();

  return (
    <Link
      to="/home/1"
      state={{
        background: location,
      }}
    >
      Go to image
    </Link>
  );
});

app.pane("/home/:id", null, () => {
  const c = useRouteContext();

  console.log(c);

  return <ImageViewPage />;
});

app.page("*", null, Error404Page);

export const useRouteContext = app.useRouteContext;
export const LernaRouterProvider = app.RouterProvider;
