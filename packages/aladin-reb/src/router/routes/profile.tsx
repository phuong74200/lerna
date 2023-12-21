import { RouteObject } from "react-router-dom";

import { StudentLayout, TALayout } from "@/layout";
import RoleSwitchRoute from "@/layout/role-switch-route";
import { StudentProfilePage, TAProfilePage } from "@/pages";
import { Role } from "@/types/enums/role";

export const profileRoutes: RouteObject[] = [
  {
    path: "/profile",
    element: (
      <RoleSwitchRoute
        routes={{
          [Role.STUDENT]: <StudentLayout />,
          [Role.TA]: <TALayout />,
        }}
      />
    ),
    children: [
      {
        path: "/profile",
        element: (
          <RoleSwitchRoute
            routes={{
              [Role.STUDENT]: <StudentProfilePage />,
              [Role.TA]: <TAProfilePage />,
            }}
          />
        ),
      },
    ],
  },
];
