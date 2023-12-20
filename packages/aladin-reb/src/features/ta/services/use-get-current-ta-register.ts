import { useQuery } from "@tanstack/react-query";

import { queryKeys } from "@/api";

export default function useGetCurrentTARegister() {
  const query = useQuery({
    ...queryKeys.ta.register(),
  });

  return {
    ...query,
  };
}
