import { useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";

import { queryKeys } from "@/api";
import useToken from "@/hooks/use-token";
import logger from "@/utils/dev-log";

export default function useGetCurrentUser() {
  const [token, , removeToken] = useToken();
  const queryClient = useQueryClient();

  const query = useQuery({
    ...queryKeys.generalUser.user("current"),

    onError: () => {
      logger.log(token, "is invalid, remove it");
      removeToken();
    },

    enabled: Boolean(token),
  });

  useEffect(() => {
    if (!token) queryClient.resetQueries();
  }, [queryClient, token]);

  return { ...query };
}
