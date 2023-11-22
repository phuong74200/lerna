import { Outlet } from "react-router-dom";
import { AppShell, AppShellProps } from "@mantine/core";
import { useResizeObserver } from "@mantine/hooks";

import { SuperAdminHeader } from "@/features/layout/components/student-header";
import { NavbarNested } from "@/features/layout/components/ta-navbar";
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

export default function SAdminLayout() {
  const [ref] = useResizeObserver();

  return (
    <AppShell
      padding="md"
      styles={style}
      layout="alt"
      header={<SuperAdminHeader links={links} />}
      navbar={<NavbarNested ref={ref} />}
    >
      <Outlet />
    </AppShell>
  );
}
