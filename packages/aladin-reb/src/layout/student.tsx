import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { AppShell, AppShellProps } from "@mantine/core";

import Loading from "@/common/ui/loading";
import { HeaderResponsive } from "@/layout/components/header-responsive";
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
    padding: 0,
  },
});

export default function StudentLayout() {
  return (
    <AppShell padding="md" styles={style} header={<HeaderResponsive links={links} />}>
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </AppShell>
  );
}
