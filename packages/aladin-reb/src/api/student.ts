import { createQueryKeys } from "@lukemorales/query-key-factory";

import { client } from "@/api/openapi-fetch";

export const studentKeys = createQueryKeys("student", {
  all: (page, size) => ({
    queryKey: [page, size],
    queryFn: async () => {
      const { data, error } = await client.GET(`/v1/student`, {
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

  byId: (user_id: string) => ({
    queryKey: [user_id],
    queryFn: async () => {
      const { data, error } = await client.GET(`/v1/student/{user_id}`, {
        params: {
          path: {
            user_id,
          },
        },
      });

      if (error) throw error;

      return data;
    },
  }),
});
