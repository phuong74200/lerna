import { Link, useLocation } from "react-router-dom";
import { nanoid } from "nanoid";

export default function Home() {
  const location = useLocation();

  return (
    <div className="flex gap-8">
      <ul className="list-style-none">
        <h3>FULL PAGE ROUTE</h3>
        <p className="description">
          Full page route will be rendered and completely replace the current page
        </p>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/sample-page">Basic sample</Link>
        </li>
        <li>
          <Link to={`/${nanoid()}`}>random(404)</Link>
        </li>
      </ul>
      <ul className="list-style-none">
        <h3>MODAL ROUTE</h3>
        <p className="description">
          Modal route <i>(Pane route)</i> will be rendered and not replace the current page but{" "}
          <b>they will render at bottom of the current page</b>
        </p>
        <li>
          <Link
            to="/sample-pane"
            state={{
              background: location,
            }}
          >
            Basic sample
          </Link>
        </li>
        <li>
          <Link
            to="/sample-load"
            state={{
              background: location,
            }}
          >
            With loader
          </Link>
        </li>
      </ul>
      <ul className="list-style-none">
        <h3>BOTH ROUTE</h3>
        <p className="description">
          Both route is combined of full page route and modal route you can control the route to
          render as full page route or modal route
        </p>
        <p className="description">
          Try to open `Basic sample` many times to see the difference. This route will be rendered
          as modal route or full page route randomly
        </p>
        <li>
          <Link
            to="/sample-both"
            state={{
              background: location,
            }}
          >
            Basic sample
          </Link>
        </li>
      </ul>
    </div>
  );
}
