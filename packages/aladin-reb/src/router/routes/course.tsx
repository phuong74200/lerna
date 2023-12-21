import { RouteObject } from "react-router-dom";

import { StudentLayout, TALayout } from "@/layout";
import RoleSwitchRoute from "@/layout/role-switch-route";
import {
  ListApprovedCoursePage,
  ListCoursesPage,
  ListPendingCoursePage,
  RegisterTACoursePage,
} from "@/pages";

export const courseModalRoutes: RouteObject[] = [
  {
    path: "/course",
    children: [
      {
        path: "/course/:courseId/register",
        element: (
          <RoleSwitchRoute
            routes={{
              STUDENT: <RegisterTACoursePage />,
              TA: <RegisterTACoursePage />,
            }}
          />
        ),
      },
    ],
  },
];

export const courseRoutes: RouteObject[] = [
  {
    path: "/course",
    element: <RoleSwitchRoute routes={{ STUDENT: <StudentLayout />, TA: <TALayout /> }} />,
    children: [
      {
        path: "/course",
        Component: ListCoursesPage,
      },
      {
        path: "/course/pending",
        Component: ListPendingCoursePage,
      },
      {
        path: "/course/approved",
        Component: ListApprovedCoursePage,
      },
    ],
  },
];
