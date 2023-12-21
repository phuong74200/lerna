import { RouteObject } from "react-router-dom";

import { StudentLayout } from "@/layout";
import RoleSwitchRoute from "@/layout/role-switch-route";
import { StudentClassPage } from "@/pages";

export const favoriteRoutes: RouteObject[] = [
  {
    path: "/favorite",
    element: <RoleSwitchRoute routes={{ STUDENT: <StudentLayout /> }} fallbackElement={null} />,
    children: [
      {
        path: "/favorite",
        Component: StudentClassPage,
      },
    ],
  },
];
