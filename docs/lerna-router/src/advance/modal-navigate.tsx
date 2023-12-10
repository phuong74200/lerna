import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import Modal from "../components/modal";

const codeString = `import { Router } from "lerna-router";

export const app = new Router();

const Home = () => {
  const location = useLocation();

  // the background state is required
  return (
    <Link to="/sample-pane" state={{ background: location }}>
  )
}

const Pane = () => {
  const location = useLocation();

  return (
    <div
      style={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        top: 0,
        left: 0,
        backdropFilter: "blur(4px)",
        background: "rgba(0,0,0,0.5)",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%,-50%)",
        }}
      >
        Modal Route Content
      </div>
    </div>
  )
}

app.page("/", null, Home);
app.pane("/sample-pane", null, Pane);

app.page("*", null, () => <h1>404</h1>);
`;

export default function ModalNavigate() {
  return (
    <Modal>
      <div className="article pane container">
        <p>
          Modal route which also called pane route is a route that will be rendered and not replace
        </p>
        <p>
          <i>
            I called it <code>pane</code> instead of <code>modal</code> because both{" "}
            <code>pane</code> and <code>page</code> has 4 chatacters.
          </i>
        </p>
        <p>
          Before navigate to modal route, you need to pass <code>background</code> state to the
          route you want to navigate to. <code>background</code> state is the current location. This
          is required because modal route will be rendered at bottom of the current page.
        </p>
        <SyntaxHighlighter language="jsx" style={atomDark}>
          {codeString}
        </SyntaxHighlighter>
      </div>
    </Modal>
  );
}
