import { useQuery } from "@tanstack/react-query";

import { queryKeys } from "@/api";

export default function useGetMajorById(majorId: number) {
  const query = useQuery({
    ...queryKeys.major.byId(majorId),
  });

  return query;
}
