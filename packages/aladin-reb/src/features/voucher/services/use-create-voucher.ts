import { useMutation } from "@tanstack/react-query";

import { client } from "@/api/openapi-fetch";
import { components } from "@/api/v1";

type CreateRequest = components["schemas"]["CreateEventVoucherRequest"];

export default function useCreateVoucher() {
  const mutation = useMutation({
    mutationFn: async (body: CreateRequest) => {
      const { data, error } = await client.POST("/v1/voucher/event-voucher", {
        body,
      });

      if (error) throw error;

      return data;
    },
  });

  return mutation;
}
