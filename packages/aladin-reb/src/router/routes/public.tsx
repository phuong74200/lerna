import { Navigate, RouteObject } from "react-router-dom";

import { on, RouteSwitch } from "@/configs/permisson-route";
import { PublicLayout } from "@/layout";
import { ForgetPasswordPage, LoginPage, RecoveryOTPage, RegisterPage } from "@/pages";

export const publicRoutes: RouteObject[] = [
  {
    path: "/login",
    element: (
      <RouteSwitch
        views={[
          on(["Class_View"], <Navigate to="/class" />),
          on(["Class_FullAccess"], <Navigate to="/class" />),
          on([], <PublicLayout />),
        ]}
      />
    ),
    children: [
      {
        path: "/login",
        Component: LoginPage,
      },
      {
        path: "/login/forget-password",
        Component: ForgetPasswordPage,
      },
      {
        path: "/login/recovery-otp",
        Component: RecoveryOTPage,
      },
    ],
  },
  {
    path: "/register",
    Component: PublicLayout,
    children: [
      {
        path: "/register",
        Component: RegisterPage,
      },
    ],
  },
];
