import { lazy, Suspense } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { DevLayout, PublicLayout, StudentLayout, TARegisterLayout } from "@/layout";
import SAdminLayout from "@/layout/admin-layout/sadmin-layout";
import AuthRouter from "@/modules/auth-router";
import {
  CreateMajorPage,
  Error404Page,
  LectureRatingPage,
  ListUniversityPage,
  LoginPage,
  RegisterPrivateGroupPage,
  TARegisterPage,
  ViewUniversityPage,
} from "@/pages";
import ClassPage from "@/pages/class";
import TAClass from "@/pages/class/ta";
import ListDiscountPage from "@/pages/discount";
import CreateDiscountPage from "@/pages/discount/create";
import CreateDiscountLayout from "@/pages/discount/create/layout";
import ImageViewPage from "@/pages/image/[id]";
import ViewMajor from "@/pages/major/[major-id]";
import MajorUpdatePage from "@/pages/major/[major-id]/update";
import ListManagerPage from "@/pages/manager";
import CreateManagerPage from "@/pages/manager/create";
import RecoveryPage from "@/pages/recovery";
import RecoveryOTPPage from "@/pages/recovery/otp";
import ResetPasswordPage from "@/pages/recovery/reset";
import RegisterPage from "@/pages/register";
import RegisterOTPPage from "@/pages/register/otp";
import StudentListPage from "@/pages/students";
import BanStudentPage from "@/pages/students/ban/[user-id]";
import DeleteStudentPage from "@/pages/students/delete/[user-id]";
import UpdateSubjectPage from "@/pages/subject/[subject-id]/update";
import CreateSubjectPage from "@/pages/subject/create";
import TAListPage from "@/pages/ta";
import TARegisterReviewPage from "@/pages/ta/register/review";
import CreateUniversityLayout from "@/pages/university/create/layout";
import UpdateUniversityPage from "@/pages/university/update/[institution-id]";
import ListVoucherPage from "@/pages/vouchers";
import CreateVoucherPage from "@/pages/vouchers/create";
import CreateVoucherLayout from "@/pages/vouchers/create/layout";
import useGetCurrentUser from "@/services/use-get-current-user";
import { Permission } from "@/types/permisson";

const Preview = lazy(async () => import("@/_preview/page"));

const CreateUniversityPage = lazy(async () => import("@/pages/university/create"));

export const BrowserRouter = new AuthRouter<Permission>(
  [
    {
      path: "/",
      Component: DevLayout,
      children: [
        {
          path: "",
          element: <Navigate to="/login" />,
        },

        {
          path: "image",
          Component: Outlet,
          children: [
            {
              path: ":id",
              Component: ImageViewPage,
              asModal: true,
            },
          ],
        },

        {
          path: "preview",
          element: (
            <Suspense
              fallback={<div className="absolute left-1/2 top-1/2 bg-oc-red-3 p-4">Loading</div>}
            >
              <div className="absolute left-1/2 top-1/2 bg-oc-red-3 p-4">
                <Outlet />
              </div>
            </Suspense>
          ),
          asModal: true,
          children: [
            {
              path: "",
              Component: Preview,
            },
          ],
        },

        {
          path: "login",
          Component: PublicLayout,
          permissons: (p) =>
            p?.includes("VERIFICATION_REQUIRED") || p === undefined || p.length === 0,
          children: [
            {
              path: "",
              Component: LoginPage,
            },
          ],
        },

        {
          path: "recovery",
          Component: PublicLayout,
          children: [
            {
              path: "",
              Component: RecoveryPage,
            },
            {
              path: "reset",
              Component: ResetPasswordPage,
            },
            {
              path: "otp",
              Component: RecoveryOTPPage,
              asModal: true,
            },
          ],
        },

        {
          path: "register",
          Component: PublicLayout,
          permissons: (p) =>
            p?.includes("VERIFICATION_REQUIRED") || // allow the case which student has registered but not verified
            p === undefined ||
            p.length === 0,
          children: [
            {
              permissons: (p) => Boolean(p?.includes("VERIFICATION_REQUIRED")),
              path: "verify",
              Component: RegisterOTPPage,
              asModal: true,
            },
            {
              path: "",
              Component: RegisterPage,
            },
          ],
        },

        {
          path: "login",
          permissons: (p) => {
            return Boolean(p?.length && p.length > 0);
          },
          element: <Navigate to="/class" replace />,
        },

        {
          path: "university",
          permissons: ["Super_Admin_Interact"],
          Component: SAdminLayout,
          children: [
            {
              path: "",
              Component: ListUniversityPage,
            },
            {
              path: "create",
              Component: CreateUniversityLayout,
              asModal: true,
              children: [
                {
                  path: "",
                  Component: CreateUniversityPage,
                },
              ],
            },
            {
              path: "update",
              Component: Outlet,
              children: [
                {
                  path: ":institutionId",
                  Component: Outlet,
                  children: [
                    {
                      path: "",
                      Component: UpdateUniversityPage,
                      asModal: true,
                    },
                  ],
                },
              ],
            },
            {
              path: ":institutionId",
              Component: ViewUniversityPage,
            },
          ],
        },

        {
          path: "vouchers",
          permissons: ["Super_Admin_Interact"],
          Component: SAdminLayout,
          children: [
            {
              path: "",
              Component: ListVoucherPage,
            },
            {
              path: "create",
              Component: CreateVoucherLayout,
              asModal: true,
              children: [
                {
                  path: "",
                  Component: CreateVoucherPage,
                },
              ],
            },
            {
              path: "update",
              Component: Outlet,
              children: [
                {
                  path: ":institutionId",
                  Component: Outlet,
                  children: [
                    {
                      path: "",
                      Component: UpdateUniversityPage,
                      asModal: true,
                    },
                  ],
                },
              ],
            },
            {
              path: ":institutionId",
              Component: ViewUniversityPage,
            },
          ],
        },

        {
          path: "students",
          permissons: ["Super_Admin_Interact"],
          Component: SAdminLayout,
          children: [
            {
              path: "",
              Component: StudentListPage,
            },
            {
              path: "ban",
              Component: Outlet,
              children: [
                {
                  path: ":userId",
                  Component: Outlet,
                  children: [
                    {
                      path: "",
                      Component: BanStudentPage,
                      asModal: true,
                    },
                  ],
                },
              ],
            },
            {
              path: "delete",
              Component: Outlet,
              children: [
                {
                  path: ":userId",
                  Component: Outlet,
                  children: [
                    {
                      path: "",
                      Component: DeleteStudentPage,
                      asModal: true,
                    },
                  ],
                },
              ],
            },
          ],
        },

        {
          path: "tas",
          permissons: ["Super_Admin_Interact"],
          Component: SAdminLayout,
          children: [
            {
              path: "",
              Component: TAListPage,
            },
          ],
        },

        {
          path: "class",
          permissons: ["Student_Interact"],
          Component: StudentLayout,
          children: [
            {
              path: "",
              Component: ClassPage,
            },
          ],
        },

        {
          path: "private-group",
          permissons: ["Student_Interact"],
          Component: StudentLayout,
          children: [
            {
              path: "create",
              Component: RegisterPrivateGroupPage,
            },
          ],
        },

        {
          path: "subject",
          permissons: ["Super_Admin_Interact"],
          Component: SAdminLayout,
          children: [
            {
              path: "create",
              Component: CreateSubjectPage,
              asModal: true,
            },
            {
              path: ":subjectId",
              Component: Outlet,
              children: [
                {
                  path: "update",
                  Component: UpdateSubjectPage,
                  asModal: true,
                },
              ],
            },
          ],
        },

        {
          path: "discount",
          permissons: ["Super_Admin_Interact"],
          Component: SAdminLayout,
          children: [
            {
              path: "",
              Component: ListDiscountPage,
            },
            {
              path: "create",
              Component: CreateDiscountLayout,
              asModal: true,
              children: [
                {
                  path: "",
                  Component: CreateDiscountPage,
                },
              ],
            },
          ],
        },

        {
          path: "manager",
          permissons: ["Super_Admin_Interact"],
          Component: SAdminLayout,
          children: [
            {
              path: "",
              Component: ListManagerPage,
            },
            {
              path: "create",
              Component: CreateManagerPage,
              asModal: true,
            },
          ],
        },

        {
          path: "class",
          permissons: ["Super_Admin_Interact"],
          Component: SAdminLayout,
          children: [
            {
              path: "",
              Component: TAClass,
            },
          ],
        },

        {
          path: "ta",
          permissons: ["Student_Interact"],
          Component: StudentLayout,
          children: [
            {
              path: "",
              Component: TARegisterLayout,
              children: [
                {
                  path: "register",
                  Component: TARegisterPage,
                },
                {
                  id: "123123213",
                  path: "register",
                  children: [
                    {
                      path: "revise",
                      Component: TARegisterReviewPage,
                    },
                  ],
                },
              ],
            },
          ],
        },

        {
          path: "major",
          permissons: ["Super_Admin_Interact"],
          Component: SAdminLayout,
          children: [
            {
              path: "create",
              Component: CreateMajorPage,
              asModal: true,
            },
            {
              path: ":majorId",
              Component: Outlet,
              children: [
                {
                  path: "",
                  Component: ViewMajor,
                },
                {
                  path: "update",
                  Component: MajorUpdatePage,
                  asModal: true,
                },
              ],
            },
          ],
        },

        {
          path: "lecture",
          Component: Outlet,
          children: [
            {
              path: ":lectureId",
              children: [
                {
                  path: "rating",
                  Component: LectureRatingPage,
                  asModal: true,
                },
              ],
            },
          ],
          permissons: [],
        },

        {
          path: "*",
          Component: Error404Page,
        },

        {
          path: "*",
          asModal: true,
          Component: Error404Page,
          replace: true,
        },
      ],
    },
  ],
  {
    usePermission: () => {
      const { data, isFetching } = useGetCurrentUser();

      const auth = [
        ...((data?.data?.permissions as Permission[]) || []),
        data?.data?.status as Permission,
      ].filter(Boolean);

      return { auth, isFetching };
    },
  },
);
