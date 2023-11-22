import { UseFormReturnType } from "@mantine/form";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { queryKeys } from "@/api";
import { client } from "@/api/openapi-fetch";
import { components } from "@/api/v1";

export type CreateMajorRequest = components["schemas"]["CreateMajorRequest"];

export default function useUpdateMajor(major_id: number) {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (body: CreateMajorRequest) => {
      const response = await client.PUT("/v1/institution/major/{major_id}", {
        body,
        params: {
          path: {
            major_id,
          },
        },
      });

      if (!response.response.ok) throw response.error;

      return response;
    },

    onSuccess: () => {
      queryClient.invalidateQueries(queryKeys.major._def);
    },
  });

  const submit = async (form: UseFormReturnType<CreateMajorRequest>) =>
    mutation.mutateAsync(form.values);

  return { mutation, submit };
}
