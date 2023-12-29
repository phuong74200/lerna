import { createQueryKeys } from "@lukemorales/query-key-factory";

import { client } from "@/api/openapi-fetch";
import { operations } from "@/api/v1";

export const subjectKeys = createQueryKeys("subject", {
  getAllSubjectsOfMajor: (params: operations["getAllSubjectsOfMajor"]["parameters"]) => ({
    queryKey: [params],
    queryFn: async () => {
      const { data, error } = await client.GET(`/v1/institution/major/{major_id}/subject`, {
        params,
      });

      if (error) throw error;

      return data;
    },
  }),

  getAllSubjectsOfInstitution: (
    params: operations["getAllSubjectsOfInstitution"]["parameters"],
  ) => ({
    queryKey: [params],
    queryFn: async () => {
      const { data, error } = await client.GET(`/v1/institution/{institution_id}/subject`, {
        params,
      });

      if (error) throw error;

      return data;
    },
  }),

  getById: (subject_id: operations["getSubjectById"]["parameters"]["path"]["subject_id"]) => ({
    queryKey: [subject_id],
    queryFn: async () => {
      const response = await client.GET(`/v1/institution/major/subject/{subject_id}`, {
        params: {
          path: {
            subject_id,
          },
        },
      });

      if (!response.response.ok) throw response.error;

      return response;
    },
  }),
});
