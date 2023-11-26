import { Suspense } from "react";
import {
  Await,
  defer,
  Link,
  useLoaderData,
  useLocation,
} from "react-router-dom";
import { nanoid } from "nanoid";

import { Handler, Router } from "@/test";
import { sleep } from "@/utils";

import "./App.css";
import "./index.css";

export const app = new Router();

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
          id: "/modal/1",
        }}
      >
        modal/1
      </Link>
      <Link
        to="/modal/2"
        state={{
          background: location,
          id: "/modal/1",
        }}
      >
        modal/2
      </Link>
    </div>
  );
};

const Hadler3: Handler = () => {
  const data = useLoaderData() as { packageLocation: string };

  console.log("f3");

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

const a = async () => {
  const waiting = sleep(1000);
  return defer({
    packageLocation: waiting,
  });
};

app._page("/", a, Handler1, Handler2);
app._page("/admin/1", a, Hadler3);
app._page("/admin/2", a, Hadler4);
app.modal("/modal/1", a, Hadler3);
app.modal("/modal/2", a, Hadler4);
app._page("*", null, () => <h1>404</h1>);

function App() {
  return (
    <main>
      <app.RouterProvider />
    </main>
  );
}

export default App;
