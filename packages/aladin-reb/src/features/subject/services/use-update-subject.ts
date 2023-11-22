import { UseFormReturnType } from "@mantine/form";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { queryKeys } from "@/api";
import { client } from "@/api/openapi-fetch";
import { components } from "@/api/v1";

export type RequestType = components["schemas"]["CreateSubjectRequest"];

export default function useUpdateSubject(subject_id: number) {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (body: RequestType) => {
      const response = await client.PUT("/v1/institution/major/subject/{subject_id}", {
        body,
        params: {
          path: {
            subject_id,
          },
        },
      });

      if (!response.response.ok) throw response.error;

      return response;
    },

    onSuccess: () => {
      queryClient.invalidateQueries(queryKeys.subject._def);
    },
  });

  const submit = async (form: UseFormReturnType<RequestType>) => mutation.mutateAsync(form.values);

  return { mutation, submit };
}
