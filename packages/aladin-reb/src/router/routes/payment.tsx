import { RouteObject } from "react-router-dom";

import { StudentLayout } from "@/features/layout";
import { PaymentHistoryPage } from "@/pages";

export const paymentRoutes: RouteObject[] = [
  {
    path: "/payment",
    Component: StudentLayout,
    children: [
      {
        path: "/payment/history",
        Component: PaymentHistoryPage,
      },
    ],
  },
];
