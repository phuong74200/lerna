import { useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";

import { queryKeys } from "@/api";
import useToken from "@/common/hooks/use-token";

export default function useGetCurrentUser() {
  const [token] = useToken();
  const queryClient = useQueryClient();

  const query = useQuery({
    ...queryKeys.generalUser.user("current"),

    enabled: Boolean(token),
  });

  useEffect(() => {
    if (!token) queryClient.resetQueries();
  }, [queryClient, token]);

  return { ...query };
}
