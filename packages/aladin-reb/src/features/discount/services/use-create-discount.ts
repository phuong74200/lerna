import { useMutation } from "@tanstack/react-query";

import { client } from "@/api/openapi-fetch";
import { components } from "@/api/v1";

type CreateRequest = components["schemas"]["CreateDiscountRequest"];

export default function useCreateDiscount() {
  const mutation = useMutation({
    mutationFn: async (body: CreateRequest) => {
      const { data, error } = await client.POST("/v1/discount", {
        body,
      });

      if (error) throw error;

      return data;
    },
  });

  return mutation;
}
