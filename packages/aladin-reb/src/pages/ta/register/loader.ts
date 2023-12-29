import { QueryClient } from "@tanstack/react-query";

import { queryKeys } from "@/api";

export const taReigsterLoader = (queryClient: QueryClient) => async () => {
  const query = queryKeys.ta.register();
  // ⬇️ return data or fetch it
  return await queryClient.fetchQuery(query);
};
