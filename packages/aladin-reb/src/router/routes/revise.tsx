import { StudentLayout } from "@/layout";
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
