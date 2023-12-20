import { lazy } from "react";
import { ErrorBoundary } from "react-error-boundary";
import {
  createBrowserRouter,
  Navigate,
  NonIndexRouteObject,
  useLocation,
  useRoutes,
} from "react-router-dom";
import { QueryClient } from "@tanstack/react-query";
import { TreeBuilder } from "route-builder";
import { uid } from "uid";

import { PublicLayout, StudentLayout } from "@/features/layout";
import SAdminLayout from "@/features/layout/admin-layout/sadmin-layout";
import { currentUserLoader } from "@/loaders/current-user";
import {
  CreateMajorPage,
  Error404Page,
  ListUniversityPage,
  LoginPage,
  ViewUniversityPage,
} from "@/pages";
import ListDiscountPage from "@/pages/discount";
import CreateDiscountPage from "@/pages/discount/create";
import CreateDiscountLayout from "@/pages/discount/create/layout";
import GeneralError from "@/pages/error/components/general-error";
import ViewMajor from "@/pages/major/[major-id]";
import MajorUpdatePage from "@/pages/major/[major-id]/update";
import ListManagerPage from "@/pages/manager";
import CreateManagerPage from "@/pages/manager/create";
import StudentListPage from "@/pages/students";
import BanStudentPage from "@/pages/students/ban/[user-id]";
import TAListPage from "@/pages/ta";
import CreateUniversityLayout from "@/pages/university/create/layout";
import UpdateUniversityPage from "@/pages/university/update/[institution-id]";
import ListVoucherPage from "@/pages/vouchers";
import CreateVoucherPage from "@/pages/vouchers/create";
import CreateVoucherLayout from "@/pages/vouchers/create/layout";
import { Path } from "@/router/path";

const CreateUniversityPage = lazy(async () => import("@/pages/university/create"));

const queryClient = new QueryClient();

export type RouteObjectWithFixedPath = Omit<NonIndexRouteObject, "path" | "children"> & {
  path: Path;
  children?: RouteObjectWithFixedPath[];
  modal?: boolean;
};

export const routes: RouteObjectWithFixedPath[] = [
  {
    path: "/login",
    element: <Navigate to="/login" />,
  },

  {
    path: "/login",
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
    path: "/admin",
    loader: currentUserLoader(queryClient),
    Component: SAdminLayout,
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
        Component: UpdateUniversityPage,
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
            path: "/admin/major/create",
            Component: CreateMajorPage,
            modal: true,
          },
          {
            path: "/admin/major/:majorId",
            Component: ViewMajor,
          },
          {
            path: "/admin/major/:majorId/update",
            Component: MajorUpdatePage,
            modal: true,
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
    Component: Error404Page,
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
