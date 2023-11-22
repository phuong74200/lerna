import { useMutation, useQueryClient } from "@tanstack/react-query";

import { queryKeys } from "@/api";
import { client } from "@/api/openapi-fetch";
import { components } from "@/api/v1";
import { NonUndefined } from "@/types";

export default function useHideSubject() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (
      subject_id: NonUndefined<components["schemas"]["SubjectResponse"]["subjectId"]>,
    ) => {
      const response = await client.PUT("/v1/institution/major/subject/{subject_id}/hide", {
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
      queryClient.invalidateQueries(queryKeys.subject.getAllSubjectsOfMajor._def);
    },
  });

  return mutation;
}
