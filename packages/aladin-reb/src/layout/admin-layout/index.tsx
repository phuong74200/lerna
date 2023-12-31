import { Suspense } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import { AppShell, AppShellProps } from "@mantine/core";
import { useResizeObserver } from "@mantine/hooks";

import AdminLayoutSkeleton from "@/layout/admin-layout/skeleton";
import { SuperAdminHeader } from "@/layout/components/student-header";
import { NavbarNested } from "@/layout/components/ta-navbar";
import { currentUserLoader } from "@/loaders/current-user";
import GeneralError from "@/pages/error/components/general-error";
import { MantineStyles } from "@/types/mantine-styles";

const links = [
  { link: "/about", label: "Features" },
  { link: "/pricing", label: "Pricing" },
  { link: "/learn", label: "Learn" },
  { link: "/community", label: "Community" },
];

const style: MantineStyles<AppShellProps> = (theme) => ({
  main: {
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0],
    height: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  body: {
    nav: {
      height: "unset",
    },
  },
});

export default function AdminLayout() {
  const [ref] = useResizeObserver();

  const userData = useLoaderData() as Awaited<ReturnType<ReturnType<typeof currentUserLoader>>>;

  if (userData?.permissions?.includes("Super_Admin_Interact"))
    return (
      <AppShell
        padding="md"
        styles={style}
        layout="alt"
        header={<SuperAdminHeader links={links} />}
        navbar={<NavbarNested ref={ref} />}
      >
        <Suspense fallback={<AdminLayoutSkeleton />}>
          <Outlet />
        </Suspense>
      </AppShell>
    );

  return <GeneralError />;
}
