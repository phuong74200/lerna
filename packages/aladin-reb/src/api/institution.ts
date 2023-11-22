import { createQueryKeys } from "@lukemorales/query-key-factory";

import { client } from "@/api/openapi-fetch";
import { operations } from "@/api/v1";

export const institutionKeys = createQueryKeys("institution", {
  all: (page, size) => ({
    queryKey: [page, size],
    queryFn: async () => {
      const response = await client.GET(`/v1/institution`, {
        params: {
          query: {
            page,
            size,
            sort: ["institutionId"],
          },
        },
      });

      if (!response.response.ok) throw response.error;

      return response;
    },
  }),

  getById: (
    institution_id: operations["getInstitutionById"]["parameters"]["path"]["institution_id"],
  ) => ({
    queryKey: [institution_id],
    queryFn: async () => {
      const response = await client.GET(`/v1/institution/{institution_id}`, {
        params: {
          path: {
            institution_id,
          },
        },
      });

      if (!response.response.ok) throw response.error;

      return response;
    },
  }),
});
