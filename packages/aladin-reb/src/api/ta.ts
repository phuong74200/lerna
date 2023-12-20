import { createQueryKeys } from "@lukemorales/query-key-factory";

import { client } from "@/api/openapi-fetch";

export const taKeys = createQueryKeys("ta", {
  all: (page, size) => ({
    queryKey: [page, size],
    queryFn: async () => {
      const { data, error } = await client.GET(`/v1/ta`, {
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
      const { data, error } = await client.GET(`/v1/ta/{user_id}`, {
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

  register: () => ({
    queryKey: ["register"],
    queryFn: async () => {
      const { error, data } = await client.GET(`/v1/register/ta/current`);

      if (error) throw error;

      return data;
    },
  }),
});
