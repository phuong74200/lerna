import { RouteObject } from "react-router-dom";

import { StudentLayout } from "@/layout";
import RoleSwitchRoute from "@/layout/role-switch-route";
import { StudentClassPage } from "@/pages";

export const recordRoutes: RouteObject[] = [
  {
    path: "/record",
    element: <RoleSwitchRoute routes={{ STUDENT: <StudentLayout /> }} fallbackElement={null} />,
    children: [
      {
        path: "/record",
        Component: StudentClassPage,
      },
    ],
  },
];
