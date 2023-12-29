import { lazy } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { createBrowserRouter, NonIndexRouteObject, useLocation, useRoutes } from "react-router-dom";
import { TreeBuilder } from "route-builder";

import { queryClient } from "@/configs/react-query";
import AdminLayout from "@/layout/admin-layout";
import PublicLayout from "@/layout/public";
import StudentLayout from "@/layout/student";
import { currentUserLoader } from "@/loaders/current-user";
import CreateDiscountLayout from "@/pages/discount/create/layout";
import ImageViewPage from "@/pages/image/[id]";
import MajorUpdateLayout from "@/pages/major/[major-id]/update/layout";
import CreateMajorLayout from "@/pages/major/create/loader";
import CreateManagerLayout from "@/pages/manager/create/layout";
import ListRolePage from "@/pages/role";
import { Root } from "@/pages/root";
import BanStudentModalLayout from "@/pages/students/ban/[user-id]/layout";
import DeleteStudentPage from "@/pages/students/delete/[user-id]";
import DeleteStudentModalLayout from "@/pages/students/delete/[user-id]/layout";
import UpdateSubjectPage from "@/pages/subject/[subject-id]/update";
import SubjectUpdateLayout from "@/pages/subject/[subject-id]/update/layout";
import CreateSubjectPage from "@/pages/subject/create";
import CreateSubjectLayout from "@/pages/subject/create/loader";
import TaRegister from "@/pages/ta/register";
import { taReigsterLoader } from "@/pages/ta/register/loader";
import AdminViewTARegistrationPage from "@/pages/ta/registration/[ta-id]";
import TARegistrationModalLayout from "@/pages/ta/registration/[ta-id]/layout";
import CreateUniversityFixedLayout from "@/pages/university/create/fixed-layout";
import CreateUniversityModalLayout from "@/pages/university/create/modal-layout";
import UpdateUniversityLayout from "@/pages/university/update/[institution-id]/layout";
import CreateVoucherLayout from "@/pages/vouchers/create/layout";
import { Path } from "@/router/path";
import { getToken } from "@/utils/auth-token";

const TARegister = lazy(() => import("@/layout/ta-register"));
const TARegisterReviewPage = lazy(() => import("@/pages/ta/register/review"));
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
const TARegistrationListPage = lazy(() => import("@/pages/ta/registration"));
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
    path: "/image/:imageId",
    Component: ImageViewPage,
  },

  {
    path: "/login",
    loader: currentUserLoader(queryClient),
    Component: PublicLayout,
    children: [
      {
        path: "/login",
        Component: LoginPage,
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
    shouldRevalidate: () => !getToken().accessToken || !getToken().accessToken,
    Component: AdminLayout,
    children: [
      /* University */
      {
        path: "/admin/institution",
        Component: ListUniversityPage,
      },

      /* has modal */
      {
        path: "/admin/institution/create",
        Component: CreateUniversityModalLayout,
        modal: true,
        children: [
          {
            path: "/admin/institution/create",
            Component: CreateUniversityPage,
          },
        ],
      },

      /* no modal */
      {
        path: "/admin/institution/create",
        Component: CreateUniversityFixedLayout,
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
        Component: BanStudentModalLayout,
        modal: true,
        children: [
          {
            path: "/admin/student/ban/:userId",
            Component: BanStudentPage,
          },
        ],
      },
      {
        path: "/admin/student/delete/:userId",
        Component: DeleteStudentModalLayout,
        modal: true,
        children: [
          {
            path: "/admin/student/delete/:userId",
            Component: DeleteStudentPage,
          },
        ],
      },

      /* Lecture */
      {
        path: "/admin/lecture",
        Component: TAListPage,
      },

      {
        path: "/admin/lecture/registration",
        Component: TARegistrationListPage,
      },

      {
        path: "/admin/lecture/registration/:taId",
        Component: TARegistrationModalLayout,
        modal: true,
        children: [
          {
            path: "/admin/lecture/registration/:taId",
            Component: AdminViewTARegistrationPage,
          },
        ],
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
        Component: CreateManagerLayout,
        modal: true,
        children: [
          {
            path: "/admin/mod/create",
            Component: CreateManagerPage,
          },
        ],
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
            Component: CreateMajorLayout,
            modal: true,
            children: [
              {
                path: "/admin/major/create",
                Component: CreateMajorPage,
              },
            ],
          },
          {
            path: "/admin/major/:majorId",
            Component: ViewMajor,
          },
        ],
      },

      /* Role */
      {
        path: "/admin/role",
        children: [
          {
            path: "/admin/role",
            Component: ListRolePage,
          },
        ],
      },

      /* Subject */
      {
        path: "/admin/subject/:subjectId/update",
        Component: SubjectUpdateLayout,
        modal: true,
        children: [
          {
            path: "/admin/subject/:subjectId/update",
            Component: UpdateSubjectPage,
          },
        ],
      },
      {
        path: "/admin/subject/create",
        Component: CreateSubjectLayout,
        modal: true,
        children: [
          {
            path: "/admin/subject/create",
            Component: CreateSubjectPage,
          },
        ],
      },
    ],
  },

  {
    path: "/student",
    loader: currentUserLoader(queryClient),
    Component: StudentLayout,
    children: [
      {
        path: "/student/ta",
        Component: TARegister,
        children: [
          {
            loader: taReigsterLoader(queryClient),
            path: "/student/ta/register",
            Component: TaRegister,
          },
          {
            path: "/student/ta/revise",
            Component: TARegisterReviewPage,
          },
        ],
      },
    ],
  },

  {
    path: "*",
    Component: GeneralError,
  },
];

const count = new Map<string, number>();

const generateUID = (r: RouteObjectWithFixedPath[]) => {
  const routes = r.map((e) => ({ ...e }));

  routes.forEach((route) => {
    count.set(route.path, (count.get(route.path) || 0) + 1);

    route.id = `${route.path}:${count.get(route.path)}`;
    count.set(route.path, count.get(route.path) || 0);

    if (route.children) route.children = generateUID(route.children);
  });

  return routes;
};

const collectModal = (routes: RouteObjectWithFixedPath[], tree: TreeBuilder) => {
  routes.forEach((route) => {
    if (route.modal) {
      const routeFrame = tree.push(route.path);

      Object.assign(routeFrame, route);
    }

    if (route.children) {
      collectModal(route.children, tree);
    }
  });

  return tree.nested;
};

const collectPage = (r: RouteObjectWithFixedPath[]) => {
  const routes = r.map((e) => ({ ...e })).filter((e) => !e.modal);

  routes.forEach((route) => {
    if (route.children) route.children = collectPage(route.children);
  });

  return routes;
};

const uidRoutes = generateUID(routes);
const modalRoutes = collectModal(uidRoutes, new TreeBuilder());
const pageRoutes = collectPage(uidRoutes);

export const ModalRoute = () => {
  const location = useLocation<{
    background: string;
  }>();

  const background = location.state && location.state.background;

  const modalRoute = useRoutes(modalRoutes);

  const fullPageRoute = useRoutes(pageRoutes, background || location);

  return (
    <ErrorBoundary fallback={<GeneralError />}>
      {fullPageRoute}
      {background && modalRoute}
    </ErrorBoundary>
  );
};

export const browserRouter = createBrowserRouter([
  {
    path: "/",
    Component: ModalRoute,
    errorElement: <GeneralError />,
    children: uidRoutes,
  },
]);
