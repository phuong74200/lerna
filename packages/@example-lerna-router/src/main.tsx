import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";

import { RouterProvider } from "./route";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Suspense fallback={<p>Loading</p>}>
      <RouterProvider />
    </Suspense>
  </StrictMode>,
);
