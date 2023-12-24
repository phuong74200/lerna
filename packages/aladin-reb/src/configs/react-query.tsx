import { DefaultOptions, MutationCache, QueryCache, QueryClient } from "@tanstack/react-query";

import { queryKeys } from "@/api";
import isInstanceOfResponseError from "@/utils/is-instance-of";

export const queryCache = new QueryCache({
  onError: (error) => {
    if (isInstanceOfResponseError(error) && error.status === 401) {
      queryClient.removeQueries(queryKeys.generalUser.user("current").queryKey);
    }
  },
});

export const mutationCache = new MutationCache({
  onError: (error) => {
    if (isInstanceOfResponseError(error) && error.status === 401) {
      queryClient.removeQueries(queryKeys.generalUser.user("current").queryKey);
    }
  },
});

export const defaultOptions: DefaultOptions = {
  queries: {
    refetchOnWindowFocus: false,
    retry: false,
  },
};

export const queryClient = new QueryClient({
  defaultOptions,
  queryCache,
  mutationCache,
});
