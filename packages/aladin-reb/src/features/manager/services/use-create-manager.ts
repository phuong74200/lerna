import { useMutation } from "@tanstack/react-query";

import { client } from "@/api/openapi-fetch";
import { components } from "@/api/v1";

type RequestType = components["schemas"]["CreateManagerRequest"];

export default function useCreateManager() {
  const mutation = useMutation({
    mutationFn: async (body: RequestType) => {
      const { data, error } = await client.POST("/v1/manager/manager-account", {
        body,
      });

      if (error) throw error;

      return data;
    },
  });

  return mutation;
}
