import { RouteObject } from "react-router-dom";

import { StudentLayout } from "@/features/layout";
import RoleSwitchRoute from "@/features/layout/role-switch-route";
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
