import { forwardRef } from "react";
import { createStyles, Menu, Navbar, rem, ScrollArea } from "@mantine/core";
import {
  IconBooks,
  IconBuildingCommunity,
  IconDiscountCheckFilled,
  IconKey,
  IconUsersGroup,
} from "@tabler/icons-react";
import { useQueryClient } from "@tanstack/react-query";

import { LinksGroup, LinksGroupProps } from "@/features/layout/components/navbar-link-group";
import { UserButton } from "@/features/layout/components/user-button";
import { useGetCurrentUserFromCache } from "@/services/use-get-current-user";
import generateAvatar from "@/utils/generate-avatar";

const mockdata: LinksGroupProps[] = [
  // { label: "Báo cáo tổng quan", icon: IconClipboardText, link: "asd" },
  {
    label: "Quản lý trường",
    icon: IconBuildingCommunity,
    initiallyOpened: true,
    link: "/university",
  },
  // {
  //   label: "Quản lý lớp",
  //   icon: IconBook2,
  //   link: "/class",
  // },
  // {
  //   label: "Quản lý môn",
  //   icon: IconBook2,
  //   links: [
  //     { label: "Upcoming releases", link: "/c" },
  //     { label: "Previous releases", link: "/d" },
  //     { label: "Releases schedule", link: "/e" },
  //   ],
  // },
  {
    label: "Quản lý sinh viên",
    icon: IconUsersGroup,
    link: "/students",
  },
  {
    label: "Quản lý TA",
    icon: IconBooks,
    link: "/tas",
  },
  // {
  //   label: "Quản lý đánh giá",
  //   icon: IconMessage,
  //   link: "/tas",
  // },

  {
    label: "Khuyến mãi",
    icon: IconDiscountCheckFilled,
    initiallyOpened: true,
    links: [
      {
        label: "Voucher",
        link: "/vouchers",
      },
      {
        label: "Giảm giá",
        link: "/discount",
      },
    ],
  },
  {
    label: "Quản lý mods",
    icon: IconKey,
    link: "/manager",
  },
];

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white,
    paddingBottom: 0,
  },

  header: {
    padding: theme.spacing.md,
    paddingTop: 0,
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  links: {
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
  },

  footer: {
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
}));

export const NavbarNested = forwardRef<HTMLDivElement, unknown>((_, ref) => {
  const cacheData = useGetCurrentUserFromCache();
  const queryClient = useQueryClient();

  const { classes } = useStyles();
  const links = mockdata.map((item) => <LinksGroup {...item} key={item.label} />);

  return (
    <Navbar height={800} width={{ sm: 300 }} p="md" className={classes.navbar} ref={ref}>
      {/* <Navbar.Section className={classes.header}>
        <Group position="apart">
          <Logo width={rem(120)} />
          <Code sx={{ fontWeight: 700 }}>v3.1.2</Code>
        </Group>
      </Navbar.Section> */}

      <Navbar.Section grow className={classes.links} component={ScrollArea}>
        <div>{links}</div>
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
        <Menu withArrow>
          <Menu.Target>
            <UserButton
              image={
                cacheData?.state.data?.data.avatar ||
                generateAvatar(cacheData?.state.data?.data.userId)
              }
              name={cacheData?.state.data?.data.fullName || ""}
              email={cacheData?.state.data?.data.email || ""}
            />
          </Menu.Target>
          <Menu.Item
            onClick={() => {
              localStorage.removeItem("token");
              queryClient.resetQueries();
            }}
          >
            logout
          </Menu.Item>
        </Menu>
      </Navbar.Section>
    </Navbar>
  );
});
