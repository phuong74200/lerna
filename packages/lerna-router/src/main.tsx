import Router, { RouteType } from "@/v2";

const app = new Router();

// app.page("1", null, () => <p>App</p>);
// app.page("/", null, () => <p>Main</p>);
// app.page("1/2/3/4", null, () => <h1>App</h1>);
// app.pane("1/2/3/4", null, () => <h1>App</h1>);

// console.log(app);

app.createRoute(RouteType.PAGE, "a/b", null, () => <p>Main</p>);

console.log(app);

// createRoot(document.getElementById("root")!).render(<app.RouterProvider />);
