import { Link, useLocation } from "react-router-dom";
import { nanoid } from "nanoid";

export default function Home() {
  const location = useLocation();

  return (
    <>
      <div className="white">
        <div className="squares">
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
        </div>
      </div>
      <div className="container">
        <div className="grey"></div>
        <h2 id="main-concept"># MAIN CONCEPTS</h2>
        <p className="concept">
          Lerna router is a router for react router dom, instead of horizontal scaling route, lerna
          router use vertical scaling route. This is the main concept of lerna router
        </p>
        <div className="grid gap-8">
          <ul className="list-style-none">
            <li>
              <h3>FULL PAGE ROUTE</h3>
              <p className="description">
                Full page route will be rendered and completely replace the current page
              </p>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/sample-page">Basic sample</Link>
            </li>
            <li>
              <Link to={`/${nanoid()}`}>random (404)</Link>
            </li>
          </ul>
          <ul className="list-style-none">
            <li>
              <h3>MODAL ROUTE</h3>
              <p className="description">
                Modal route <i>(Pane route)</i> will be rendered and not replace the current page
                but <b>they will render at bottom of the current page</b>
              </p>
            </li>
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
            <li>
              <Link
                to="/modal-navigate"
                state={{
                  background: location,
                }}
              >
                Navigte to modal route
              </Link>
            </li>
            <li>
              <Link
                to={`/params/${nanoid()}`}
                state={{
                  background: location,
                }}
              >
                Modal route with params
              </Link>
            </li>
          </ul>
          <ul className="list-style-none">
            <li>
              <h3>BOTH ROUTE</h3>
              <p className="description">
                Both route is combined of full page route and modal route you can control the route
                to render as full page route or modal route
              </p>
              <p className="description">
                Try to open `Basic sample` many times to see the difference. This route will be
                rendered as modal route or full page route randomly
              </p>
            </li>
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
          <ul className="list-style-none">
            <li>
              <h3>WRAPPER</h3>
              <p className="description">
                Wrapper act as a layout for your route, you can use it to wrap your route
              </p>
            </li>
            <li>
              <Link
                to="/wrapper"
                state={{
                  background: location,
                }}
              >
                Basic sample
              </Link>
            </li>
          </ul>
        </div>
        <h2 id="advance"># ADVANCE</h2>
        <p className="concept">This part is optional, you can skip it if you want</p>
        <div className="grid gap-8">
          <ul className="list-style-none">
            <li>
              <h3>VERTICAL SCALING</h3>
              <p className="description">
                No more deeply nested route, you can scale your route vertically
              </p>
            </li>
            <li>
              <Link to="/vertical-scale">What is it</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
