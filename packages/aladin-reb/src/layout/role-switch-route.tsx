import { ReactNode } from "react";

import useGetCurrentUser from "@/common/services/use-get-current-user";
import Error404 from "@/pages/error/components/error404";
import { Role } from "@/types/enums/role";

interface Props {
  routes: {
    [key in Role]?: ReactNode;
  };
  fallbackElement?: ReactNode; // any leftover routes
}

export default function RoleSwitchRoute({ routes, fallbackElement }: Props) {
  const { data } = useGetCurrentUser();
  const role = data?.data.roleId;

  if (role && routes[role] && routes[role] !== null) return routes[role];

  return fallbackElement ? fallbackElement : <Error404 />;
}