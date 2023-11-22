import { createQueryKeys } from "@lukemorales/query-key-factory";

import { client } from "@/api/openapi-fetch";

export const departmentKeys = createQueryKeys("department", {
  all: (page, size) => ({
    queryKey: [page, size],
    queryFn: async () => {
      const { data, error } = await client.GET(`/v1/department`, {
        params: {
          query: {
            page,
            size,
          },
        },
      });

      if (error) throw error;

      return data;
    },
  }),
});
