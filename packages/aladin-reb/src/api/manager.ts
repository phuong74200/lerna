import { createQueryKeys } from "@lukemorales/query-key-factory";

import { client } from "@/api/openapi-fetch";

export const managerKeys = createQueryKeys("manager", {
  all: (page, size) => ({
    queryKey: [page, size],
    queryFn: async () => {
      const { data, error } = await client.GET(`/v1/manager/all`, {
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

  byId: (manager_id: string) => ({
    queryKey: [manager_id],
    queryFn: async () => {
      const { data, error } = await client.GET(`/v1/manager/{manager_id}`, {
        params: {
          path: {
            manager_id,
          },
        },
      });

      if (error) throw error;

      return data;
    },
  }),
});
