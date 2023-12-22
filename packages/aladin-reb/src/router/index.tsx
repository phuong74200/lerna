import { lazy } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { createBrowserRouter, NonIndexRouteObject, useLocation, useRoutes } from "react-router-dom";
import { TreeBuilder } from "route-builder";
import { uid } from "uid";

import { queryClient } from "@/configs/react-query";
import { currentUserLoader } from "@/loaders/current-user";
import CreateDiscountLayout from "@/pages/discount/create/layout";
import MajorUpdateLayout from "@/pages/major/[major-id]/update/layout";
import { Root } from "@/pages/root";
import CreateUniversityLayout from "@/pages/university/create/layout";
import UpdateUniversityLayout from "@/pages/university/update/[institution-id]/layout";
import CreateVoucherLayout from "@/pages/vouchers/create/layout";
import { Path } from "@/router/path";

const StudentLayout = lazy(() => import("@/layout/student"));
const PublicLayout = lazy(() => import("@/layout/public"));
const AdminLayout = lazy(() => import("@/layout/admin-layout"));

const ListDiscountPage = lazy(() => import("@/pages/discount"));
const CreateDiscountPage = lazy(() => import("@/pages/discount/create"));
const GeneralError = lazy(() => import("@/pages/error/components/general-error"));
const LoginPage = lazy(() => import("@/pages/login"));
const ViewMajor = lazy(() => import("@/pages/major/[major-id]"));
const MajorUpdatePage = lazy(() => import("@/pages/major/[major-id]/update"));
const CreateMajorPage = lazy(() => import("@/pages/major/create"));
const ListManagerPage = lazy(() => import("@/pages/manager"));
const CreateManagerPage = lazy(() => import("@/pages/manager/create"));
const RecoveryPage = lazy(() => import("@/pages/recovery"));
const RecoveryOTPPage = lazy(() => import("@/pages/recovery/otp"));
const ResetPasswordPage = lazy(() => import("@/pages/recovery/reset"));
const RegisterPage = lazy(() => import("@/pages/register"));
const RegisterOTPPage = lazy(() => import("@/pages/register/otp"));
const StudentListPage = lazy(() => import("@/pages/students"));
const BanStudentPage = lazy(() => import("@/pages/students/ban/[user-id]"));
const TAListPage = lazy(() => import("@/pages/ta"));
const ListUniversityPage = lazy(() => import("@/pages/university"));
const ViewUniversityPage = lazy(() => import("@/pages/university/[institution-id]"));
const UpdateUniversityPage = lazy(() => import("@/pages/university/update/[institution-id]"));
const ListVoucherPage = lazy(() => import("@/pages/vouchers"));
const CreateVoucherPage = lazy(() => import("@/pages/vouchers/create"));
const CreateUniversityPage = lazy(async () => import("@/pages/university/create"));

export type RouteObjectWithFixedPath = Omit<NonIndexRouteObject, "path" | "children"> & {
  path: Path;
  children?: RouteObjectWithFixedPath[];
  modal?: boolean;
};

export const routes: RouteObjectWithFixedPath[] = [
  {
    path: "/",
    loader: currentUserLoader(queryClient),
    Component: Root,
  },

  {
    path: "/login",
    loader: currentUserLoader(queryClient),
    Component: PublicLayout,
    children: [
      {
        path: "/login",
        Component: LoginPage,
        modal: true,
      },
    ],
  },

  {
    path: "/register",
    loader: currentUserLoader(queryClient),
    Component: PublicLayout,
    children: [
      {
        path: "/register",
        Component: RegisterPage,
      },
      {
        path: "/register/verify",
        loader: currentUserLoader(queryClient),
        Component: RegisterOTPPage,
        modal: true,
      },
    ],
  },

  {
    path: "/recovery",
    Component: PublicLayout,
    loader: currentUserLoader(queryClient),
    children: [
      {
        path: "/recovery",
        Component: RecoveryPage,
      },
      {
        path: "/recovery/reset",
        Component: ResetPasswordPage,
      },
      {
        path: "/recovery/otp",
        Component: RecoveryOTPPage,
        modal: true,
      },
    ],
  },

  {
    path: "/admin",
    loader: currentUserLoader(queryClient),
    Component: AdminLayout,
    children: [
      /* University */
      {
        path: "/admin/institution",
        Component: ListUniversityPage,
      },
      {
        path: "/admin/institution/create",
        Component: CreateUniversityLayout,
        modal: true,
        children: [
          {
            path: "/admin/institution/create",
            Component: CreateUniversityPage,
          },
        ],
      },
      {
        path: "/admin/institution/update/:institutionId",
        modal: true,
        Component: UpdateUniversityLayout,
        children: [
          {
            path: "/admin/institution/update/:institutionId",
            Component: UpdateUniversityPage,
          },
        ],
      },
      {
        path: "/admin/institution/:institutionId",
        Component: ViewUniversityPage,
      },

      /* Voucher */
      {
        path: "/admin/voucher",
        Component: ListVoucherPage,
      },
      {
        path: "/admin/voucher/create",
        Component: CreateVoucherLayout,
        modal: true,
        children: [
          {
            path: "/admin/voucher/create",
            Component: CreateVoucherPage,
          },
        ],
      },

      /* Students */
      {
        path: "/admin/student",
        Component: StudentListPage,
      },
      {
        path: "/admin/student/ban/:userId",
        Component: BanStudentPage,
      },

      /* Lecture */
      {
        path: "/admin/lecture",
        Component: TAListPage,
      },

      /* Discount */
      {
        path: "/admin/discount",
        Component: ListDiscountPage,
      },
      {
        path: "/admin/discount/create",
        Component: CreateDiscountLayout,
        modal: true,
        children: [
          {
            path: "/admin/discount/create",
            Component: CreateDiscountPage,
          },
        ],
      },

      /* Mod */
      {
        path: "/admin/mod",
        Component: ListManagerPage,
      },
      {
        path: "/admin/mod/create",
        Component: CreateManagerPage,
      },

      /* Major */
      {
        path: "/admin/major",
        children: [
          {
            path: "/admin/major/:majorId/update",
            Component: MajorUpdateLayout,
            modal: true,
            children: [
              {
                path: "/admin/major/:majorId/update",
                Component: MajorUpdatePage,
              },
            ],
          },
          {
            path: "/admin/major/create",
            Component: CreateMajorPage,
            modal: true,
          },
          {
            path: "/admin/major/:majorId",
            Component: ViewMajor,
          },
        ],
      },
    ],
  },

  {
    path: "/usr",
    loader: currentUserLoader(queryClient),
    Component: StudentLayout,
    modal: true,
  },

  {
    path: "*",
    Component: GeneralError,
  },
];

const { ModalRoute } = (() => {
  const treeBuilder = new TreeBuilder();

  const collectModalRoute = (routes: RouteObjectWithFixedPath[]) => {
    routes.forEach((route) => {
      route.id = uid();

      if (route.modal) {
        const routeFrame = treeBuilder.push(route.path);

        Object.assign(routeFrame, route);
      }

      if (route.children) {
        collectModalRoute(route.children);
      }
    });
  };

  collectModalRoute(routes);

  const ModalRoute = () => {
    const location = useLocation<{
      background: string;
    }>();
    const background = location.state && location.state.background;

    const modalRoute = useRoutes(treeBuilder.nested);

    const fullPageRoute = useRoutes(routes, background || location);

    return (
      <ErrorBoundary fallback={<GeneralError />}>
        {fullPageRoute}
        {background && modalRoute}
      </ErrorBoundary>
    );
  };

  return { ModalRoute };
})();

export const browserRouter = createBrowserRouter([
  {
    path: "/",
    Component: ModalRoute,
    errorElement: <GeneralError />,
    children: routes,
  },
]);
