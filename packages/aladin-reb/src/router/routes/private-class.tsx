import { RouteObject } from "react-router-dom";

import { StudentLayout, TALayout } from "@/features/layout";
import RoleSwitchRoute from "@/features/layout/role-switch-route";
import {
  ModifyPrivateClassPage,
  ModifyTAPrivateClass,
  ProgressGroupRegisterPaymentPage,
  RegisterPrivateGroupPage,
  RegisterTAPrivateClassPage,
  StudentClassRegisterPage,
  StudentGroupPage,
  TAGroupPage,
} from "@/pages";
import { Role } from "@/types/enums/role";

export const privateClassModalRoutes: RouteObject[] = [
  {
    path: "/private-class",
    children: [
      {
        path: "/private-class/:classId/register",
        element: (
          <RoleSwitchRoute
            routes={{
              STUDENT: <StudentClassRegisterPage />,
              TA: <RegisterTAPrivateClassPage />,
            }}
          />
        ),
      },
      {
        path: "/private-class/register/payment",
        Component: ProgressGroupRegisterPaymentPage,
      },
    ],
  },
];

export const privateClassRoutes: RouteObject[] = [
  {
    path: "/private-class",
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
        path: "/private-class",
        element: (
          <RoleSwitchRoute
            routes={{
              [Role.STUDENT]: <StudentGroupPage />,
              [Role.TA]: <TAGroupPage />,
            }}
          />
        ),
      },
      {
        path: "/private-class/register",
        element: <RegisterPrivateGroupPage />,
      },
      {
        path: "/private-class/:classId/modify",
        element: (
          <RoleSwitchRoute
            routes={{
              [Role.STUDENT]: <ModifyPrivateClassPage />,
              [Role.TA]: <ModifyTAPrivateClass />,
            }}
          />
        ),
      },
    ],
  },
];
