import { DefaultOptions, MutationCache, QueryCache } from "@tanstack/react-query";

import isInstanceOfResponseError from "@/utils/is-instance-of";

export const queryCache = new QueryCache({
  onError: (error) => {
    if (isInstanceOfResponseError(error)) {
      if (error.status === 401) queryCache.clear();
    }
  },
});

export const mutationCache = new MutationCache({
  onError: (error) => {
    if (isInstanceOfResponseError(error)) {
      if (error.status === 401) queryCache.clear();
    }
  },
});

export const defaultOptions: DefaultOptions = {
  queries: {
    refetchOnWindowFocus: false,
    retry: false,
  },
};
