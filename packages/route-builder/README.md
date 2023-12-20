# Note

The file src/main.tsx is made for testing purpose.

# Example

```jsx
const app = new Router();

const loader = async ({ id }: LoaderFnArgs) => {
  const waiting = sleep(1000);

  /**
   * context.floated if true the next route will be display as modal route
   * if not it will display as fullpage route
   */
  if (id) {
    app.context.set(id, {
      floated: Math.random() > 0.5,
    });
  }

  return defer({
    packageLocation: waiting,
  });
};

app.page("/", loader, () => <h1>root</h1>);
app.page("/admin/1", loader, () => <h1>admin/1</h1>);
app.page("/admin/2", loader, () => <h1>admin/2</h1>);
app.pane("/modal/2", loader, Hadler4);
app.page("*", null, () => <h1>404</h1>);

export default function App() {
  return (
    <main>
      <app.RouterProvider />
    </main>
  );
}
```