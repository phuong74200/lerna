import { useMutation } from "@tanstack/react-query";

import { client } from "@/api/openapi-fetch";
import { components } from "@/api/v1";

export default function useCreateSubject() {
  const mutation = useMutation({
    mutationFn: async (body: components["schemas"]["CreateSubjectRequest"]) => {
      const response = await client.POST("/v1/institution/major/subject", {
        body,
      });
      if (!response.response.ok) throw response.error;
      return response;
    },
  });

  return mutation;
}
