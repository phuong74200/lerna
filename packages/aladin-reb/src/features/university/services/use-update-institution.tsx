import { useMutation, useQueryClient } from "@tanstack/react-query";

import { queryKeys } from "@/api";
import { client } from "@/api/openapi-fetch";
import { components } from "@/api/v1";

type RequestType = components["schemas"]["CreateInstitutionRequest"];

export default function useUpdateInstitution() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async ({ institution_id, body }: { institution_id: string; body: RequestType }) => {
      const { data, error } = await client.PUT("/v1/institution/{institution_id}", {
        body,
        params: {
          path: {
            institution_id,
          },
        },
      });

      if (error) throw error;

      return data;
    },

    onSuccess: () => {
      queryClient.invalidateQueries(queryKeys.institution.all._def);
    },
  });

  return mutation;
}
