import { forwardRef } from "react";
import { createStyles, Menu, Navbar, rem, ScrollArea } from "@mantine/core";
import {
  IconBuildingCommunity,
  IconDiscountCheckFilled,
  IconKey,
  IconSchool,
  IconTrash,
  IconUser,
  IconUsersGroup,
} from "@tabler/icons-react";

import useLogout from "@/common/hooks/use-logout";
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
    label: "Teaching Assistant",
    icon: IconSchool,
    initiallyOpened: true,
    links: [
      {
        label: "Quản lý",
        link: "/admin/lecture",
      },
      {
        label: "Đơn đăng ký",
        link: "/admin/lecture/registration",
      },
    ],
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
    icon: IconUser,
    link: "/admin/mod",
  },
  {
    label: "Phân quyền",
    icon: IconKey,
    link: "/admin/role",
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
  const logout = useLogout();

  const { classes } = useStyles();
  const links = mockdata.map((item) => <LinksGroup {...item} key={item.label} />);

  return (
    <Navbar height={800} width={{ sm: 300 }} p="md" className={classes.navbar} ref={ref}>
      <Navbar.Section grow className={classes.links} component={ScrollArea}>
        <div>{links}</div>
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
        <Menu shadow="md" position="right" width={200}>
          <Menu.Target>
            <UserButton
              w="100%"
              pt="md"
              pl="md"
              pr="md"
              image={data?.data?.avatar || generateAvatar(data?.data?.userId)}
              name={data?.data?.fullName || ""}
              email={data?.data?.email || ""}
            />
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item onClick={logout} color="red" icon={<IconTrash size={14} />}>
              Đăng xuất
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Navbar.Section>
    </Navbar>
  );
});
