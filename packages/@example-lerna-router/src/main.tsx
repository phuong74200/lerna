import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import {
  Await,
  defer,
  Link,
  useLoaderData,
  useLocation,
} from "react-router-dom";
import { nanoid } from "nanoid";

import { Router } from "lerna-router";

import "./App.css";
import "./index.css";

export const app = new Router();
export const useRouteContext = app.useRouteContext;

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const Handler1: Handler = (req, next) => {
  return next();
};

const Handler2: Handler = () => {
  const location = useLocation();

  return (
    <div
      style={{
        display: "flex",
        gap: 16,
      }}
    >
      <Link to="/">home</Link>
      <Link to={`/${nanoid()}`}>random(404)</Link>
      <Link to="/admin/1">admin/1</Link>
      <Link to="/admin/2">admin/2</Link>
      <Link
        to="/modal/1"
        state={{
          background: location,
        }}
      >
        modal/1
      </Link>
      <Link
        to="/modal/2"
        state={{
          background: location,
        }}
      >
        modal/2
      </Link>
    </div>
  );
};

const Hadler3: Handler = () => {
  const data = useLoaderData() as { packageLocation: string };

  return (
    <div
      style={{
        position: "fixed",
        top: 100,
        left: 100,
        width: 300,
        height: 300,
        background: "red",
      }}
    >
      <Suspense fallback={<p>Loading package location...</p>}>
        <Await
          resolve={data?.packageLocation}
          errorElement={<p>Error loading package location!</p>}
        >
          {(packageLocation) => (
            <p>handler 1 pkg {JSON.stringify(packageLocation)}</p>
          )}
        </Await>
      </Suspense>
    </div>
  );
};

const Hadler4: Handler = () => {
  return <div>handler 4</div>;
};

const loader = async ({ id, context }: LoaderFunctionArgs) => {
  const waiting = sleep(1000);

  context.set(id, {
    floated: Math.random() > 0.5,
  });

  return defer({
    packageLocation: waiting,
  });
};

app.page("/", loader, Handler1, Handler2);
app.page("/admin/1", null, Hadler3);
app.page("/admin/2", loader, Hadler4);
app.both("/modal/1", loader, Hadler3);
app.pane("/modal/2", loader, Hadler4);
app.page("*", null, () => <h1>404</h1>);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <app.RouterProvider />
  </StrictMode>,
);
