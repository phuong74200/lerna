import { RouteObject } from "react-router-dom";

import { on, RouteSwitch } from "@/configs/permisson-route";
import { StudentLayout, TALayout } from "@/features/layout";
import RoleSwitchRoute from "@/features/layout/role-switch-route";
import { RegisterTAClassPage, StudentClassPage, StudentClassRegisterPage } from "@/pages";
import TAClass from "@/pages/class/ta";

export const classModalRoutes: RouteObject[] = [
  {
    path: "/class",
    children: [
      {
        path: "/class/:classId/register",
        element: (
          <RoleSwitchRoute
            routes={{
              STUDENT: <StudentClassRegisterPage />,
              TA: <RegisterTAClassPage />,
            }}
          />
        ),
      },
    ],
  },
];

export const classRoutes: RouteObject[] = [
  {
    path: "/class",
    element: (
      <RouteSwitch
        views={[on(["Class_View"], <StudentLayout />), on(["Class_FullAccess"], <TALayout />)]}
      />
    ),
    children: [
      {
        path: "/class",
        element: (
          <RoleSwitchRoute
            routes={{
              STUDENT: <StudentClassPage />,
              TA: <TAClass />,
            }}
          />
        ),
      },
    ],
  },
];
