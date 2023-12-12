/**
 * This is the entry point for the application for testing purposes. Notthing to see here.
 */

import { createRoot } from "react-dom/client";
import { Link, Outlet } from "react-router-dom";

import Router from "@/core";

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

app.page("a/b", null, function m1() {
  return (
    <div>
      <Outlet />
    </div>
  );
});
app.page("a/b", null, function m1() {
  return <h1>Main1 in</h1>;
});

app.page("a/b/1", null, function m1() {
  return <p>Main1</p>;
});
app.page("a/b/2", null, function m1() {
  return <p>Main1</p>;
});

console.log(app);

createRoot(document.getElementById("root")!).render(<app.RouterProvider />);
