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

import useGetCurrentUser from "@/common/services/use-get-current-user";
import { LinksGroup, LinksGroupProps } from "@/layout/components/navbar-link-group";
import { UserButton } from "@/layout/components/user-button";
import generateAvatar from "@/utils/generate-avatar";

const mockdata: LinksGroupProps[] = [
  // { label: "Báo cáo tổng quan", icon: IconClipboardText, link: "asd" },
  {
    label: "Quản lý trường",
    icon: IconBuildingCommunity,
    initiallyOpened: true,
    link: "/admin/institution",
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
    link: "/admin/student",
  },
  {
    label: "Quản lý TA",
    icon: IconBooks,
    link: "/admin/lecture",
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
        link: "/admin/voucher",
      },
      {
        label: "Giảm giá",
        link: "/admin/discount",
      },
    ],
  },
  {
    label: "Quản lý mods",
    icon: IconKey,
    link: "/admin/mod",
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
  const { data } = useGetCurrentUser();
  const queryClient = useQueryClient();

  const { classes } = useStyles();
  const links = mockdata.map((item) => <LinksGroup {...item} key={item.label} />);

  return (
    <Navbar height={800} width={{ sm: 300 }} p="md" className={classes.navbar} ref={ref}>
      <Navbar.Section grow className={classes.links} component={ScrollArea}>
        <div>{links}</div>
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
        <Menu withArrow>
          <Menu.Target>
            <UserButton
              image={data?.data?.avatar || generateAvatar(data?.data?.userId)}
              name={data?.data?.fullName || ""}
              email={data?.data?.email || ""}
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
