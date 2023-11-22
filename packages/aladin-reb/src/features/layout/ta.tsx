import { Outlet } from "react-router-dom";
import { AppShell, AppShellProps, Box } from "@mantine/core";
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
    padding: 0,
  },
  body: {
    nav: {
      height: "unset",
    },
  },
});

export default function TA() {
  const [ref] = useResizeObserver();

  return (
    <AppShell
      padding="md"
      styles={style}
      header={<SuperAdminHeader links={links} logo={<Box></Box>} />}
      navbar={<NavbarNested ref={ref} />}
      // aside={
      //   <Aside width={{ sm: 300 }} className="invisible">
      //     {}
      //   </Aside>
      // }
    >
      <Outlet />
    </AppShell>
  );
}
