import { createContext, ReactNode, useState } from "react";

import { Role } from "@/types/enums/role";

type User = {
  accessToken: string;
  refreshToken: string;
  userResponse: {
    userId: string;
    institutionId: null | string;
    institutionName: null | string;
    fullName: string;
    phoneNumber: string;
    email: string;
    avatar: null | string;
    description: null | string;
    gender: null | string;
    createdAt: string;
    updatedAt: string;
    status: string;
    enabled: boolean;
    roleId: Role;
    havingPassword: boolean;
  };
};

type TUserContext = {
  user: User;
  setUser: (user: User) => void;
};

export const UserContext = createContext<TUserContext>({} as TUserContext);

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>({} as User);

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};
