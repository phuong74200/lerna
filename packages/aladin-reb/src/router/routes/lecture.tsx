import { RouteObject } from "react-router-dom";

import { StudentLayout, TALayout, TARegisterLayout } from "@/features/layout";
import RoleSwitchRoute from "@/features/layout/role-switch-route";
import { Error404Page, LectureRatingPage, TARegisterModifyPage, TARegisterPage } from "@/pages";
import { Role } from "@/types/enums/role";

export const lectureModalRoutes: RouteObject[] = [
  {
    path: "/lecture",
    children: [
      {
        path: "/lecture/:lectureId/rating",
        Component: LectureRatingPage,
      },
    ],
  },
];

export const lectureRoutes: RouteObject[] = [
  {
    path: "/lecture",
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
        path: "/lecture/register",
        element: (
          <RoleSwitchRoute
            routes={{
              [Role.STUDENT]: <TARegisterLayout />,
              [Role.TA]: null,
            }}
          />
        ),
        children: [
          {
            path: "/lecture/register",
            element: (
              <RoleSwitchRoute
                routes={{
                  [Role.STUDENT]: <TARegisterPage />,
                  [Role.TA]: <Error404Page />,
                }}
              />
            ),
          },
          {
            path: "/lecture/register/modify",
            element: (
              <RoleSwitchRoute
                routes={{
                  [Role.STUDENT]: <TARegisterModifyPage />,
                  [Role.TA]: <Error404Page />,
                }}
              />
            ),
          },
        ],
      },
    ],
  },
];
