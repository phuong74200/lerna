import { RouteObject } from "react-router-dom";

import { HomePage } from "@/pages";

export const homeRoutes: RouteObject[] = [
  {
    path: "/home",
    element: <HomePage />,
  },
];
