import { QueryClient } from "@tanstack/react-query";

import { queryKeys } from "@/api";

export const currentUserLoader = (queryClient: QueryClient) => async () => {
  const query = queryKeys.generalUser.user("current");
  // ⬇️ return data or fetch it

  return await queryClient.fetchQuery(query);
};

type E = `yyy` | `yyy/${string}`;

const n: E = "yyy/1";

console.log(n);
