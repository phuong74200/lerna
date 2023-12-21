import { RouteObject } from "react-router-dom";

import { StudentLayout } from "@/layout";
import { SchedulePage } from "@/pages";

export const scheduleRoutes: RouteObject[] = [
  {
    path: "/schedule",
    Component: StudentLayout,
    children: [
      {
        path: "/schedule",
        Component: SchedulePage,
      },
    ],
  },
];
