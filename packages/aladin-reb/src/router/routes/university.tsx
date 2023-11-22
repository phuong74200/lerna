import { RouteObject } from "react-router-dom";

import { StudentLayout, TALayout } from "@/features/layout";
import RoleSwitchRoute from "@/features/layout/role-switch-route";
import { CreateUniversityPage, ListUniversityPage, ViewUniversityPage } from "@/pages";
import { Role } from "@/types/enums/role";

export const universityRoutes: RouteObject[] = [
  {
    path: "/university",
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
        path: "/university",
        element: <ListUniversityPage />,
      },
      {
        path: "/university/create",
        element: <CreateUniversityPage />,
      },
      {
        path: "/university/detail/:universityId",
        element: <ViewUniversityPage />,
      },
    ],
  },
];
