import { useQuery } from "@tanstack/react-query";

import { queryKeys } from "@/api";

export default function useGetTARegistration(ta_id: string) {
  const query = useQuery({
    ...queryKeys.ta.registration(ta_id),
  });

  return {
    ...query,
  };
}
