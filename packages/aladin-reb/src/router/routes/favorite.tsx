import { RouteObject } from "react-router-dom";

import { StudentLayout } from "@/features/layout";
import RoleSwitchRoute from "@/features/layout/role-switch-route";
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
