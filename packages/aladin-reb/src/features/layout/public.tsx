import { Outlet } from "react-router-dom";
import { AppShell, AppShellProps, Box, Flex } from "@mantine/core";

import {
  ASSET_GIRL_LAPTOP,
  ASSET_GIRL_TABLET_1,
  ASSET_GIRL_TABLET_2,
  ASSET_MALE_LAPTOP,
} from "@/assets";
import LandingCarousel from "@/features/landing/components/landing-carousel";
import { HeaderResponsive } from "@/features/layout/components/header-responsive";
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
    height: 0,
    flex: 1,
    minHeight: 0,
    display: "flex",
  },
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  body: {
    flex: 1,
    height: 0,
    flexDirection: "column",
  },
});

export default function Public() {
  return (
    <AppShell padding="md" styles={style} header={<HeaderResponsive links={links} />}>
      <Flex p="lg" className="mih-0 flex-1 justify-between md:justify-center">
        <Box className="w-1/2 md:hidden">
          <LandingCarousel
            w="auto"
            h="100%"
            mih={0}
            images={[
              ASSET_MALE_LAPTOP,
              ASSET_GIRL_LAPTOP,
              ASSET_GIRL_TABLET_1,
              ASSET_GIRL_TABLET_2,
            ]}
          />
        </Box>
        <Flex h="100%" justify="center" align="center" className="w-1/2 md:w-auto lg:max-w-[500px]">
          <Outlet />
        </Flex>
      </Flex>
    </AppShell>
  );
}
