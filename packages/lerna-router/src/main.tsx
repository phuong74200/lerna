import Router from "@/v2";

const app = new Router();

console.log(app);

app.page("/1/2/3/4", null, () => <h1>App</h1>);

const e = app.find("page", "1/2/3/4");

console.log(e);
