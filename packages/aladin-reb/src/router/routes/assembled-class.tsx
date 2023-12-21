import { RouteObject } from "react-router-dom";

import { StudentLayout, TALayout } from "@/layout";
import RoleSwitchRoute from "@/layout/role-switch-route";
import {
  ListTAAssembledClassPage,
  ProgressGroupRegisterPaymentPage,
  RegiserTAAssembledClassPage,
  RegisterAssembledClassPage,
  StudentClassRegisterPage,
  StudentGroupPage,
} from "@/pages";
import { Role } from "@/types/enums/role";

export const assembledClassModalRoutes: RouteObject[] = [
  {
    path: "/assembled-class",
    children: [
      {
        path: "/assembled-class/:classId/register",
        element: (
          <RoleSwitchRoute
            routes={{
              STUDENT: <StudentClassRegisterPage />,
              TA: <RegiserTAAssembledClassPage />,
            }}
          />
        ),
      },
      {
        path: "/assembled-class/register/payment",
        Component: ProgressGroupRegisterPaymentPage,
      },
    ],
  },
];

export const assembledClassRoutes: RouteObject[] = [
  {
    path: "/assembled-class",
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
        path: "/assembled-class",
        element: (
          <RoleSwitchRoute
            routes={{
              [Role.STUDENT]: <StudentGroupPage />,
              [Role.TA]: <ListTAAssembledClassPage />,
            }}
          />
        ),
      },
      {
        path: "/assembled-class/register",
        element: <RegisterAssembledClassPage />,
      },
    ],
  },
];
