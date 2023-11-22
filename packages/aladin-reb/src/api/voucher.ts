import { createQueryKeys } from "@lukemorales/query-key-factory";

import { client } from "@/api/openapi-fetch";

export const voucherKeys = createQueryKeys("voucher", {
  all: (page, size) => ({
    queryKey: [page, size],
    queryFn: async () => {
      const { data, error } = await client.GET(`/v1/voucher/event-voucher`, {
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
