import { RouteObject } from "react-router-dom";

import { StudentLayout } from "@/layout";
import RoleSwitchRoute from "@/layout/role-switch-route";
import { ListTAHistoryPage } from "@/pages";
import { Role } from "@/types/enums/role";

export const historyRoutes: RouteObject[] = [
  {
    path: "/history",
    element: (
      <RoleSwitchRoute
        routes={{
          [Role.STUDENT]: <StudentLayout />,
          [Role.TA]: <ListTAHistoryPage />,
        }}
      />
    ),
  },
];
