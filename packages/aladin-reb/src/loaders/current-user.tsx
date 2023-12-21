import { QueryClient } from "@tanstack/react-query";

import { queryKeys } from "@/api";
import { getToken } from "@/utils/auth-token";

export const currentUserLoader = (queryClient: QueryClient) => async () => {
  if (!getToken()) return null;

  try {
    const query = queryKeys.generalUser.user("current");

    const { data, error } = await queryClient.fetchQuery(query);

    if (data) return data;

    return error;
  } catch {
    return null;
  }
};
