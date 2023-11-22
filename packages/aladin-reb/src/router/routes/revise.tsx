import { StudentLayout } from "@/features/layout";
import { StudentRevisePage } from "@/pages";

export const reviseRoutes = [
  {
    path: "/revise",
    Component: StudentLayout,
    children: [
      {
        path: "/revise",
        Component: StudentRevisePage,
      },
    ],
  },
];
