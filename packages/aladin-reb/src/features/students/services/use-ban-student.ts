import { useMutation } from "@tanstack/react-query";

import { client } from "@/api/openapi-fetch";

export default function useBanStudent() {
  const mutate = useMutation({
    mutationFn: async (user_id: string) => {
      const { data, error } = await client.PUT("/v1/manager/ban/student/{user_id}", {
        params: {
          query: { user_id },
        },
      });

      if (error) throw error;

      return data;
    },
  });

  return mutate;
}
