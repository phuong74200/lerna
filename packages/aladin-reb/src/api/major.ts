import { createQueryKeys } from "@lukemorales/query-key-factory";

import { client } from "@/api/openapi-fetch";
import { operations } from "@/api/v1";

export const majorKeys = createQueryKeys("major", {
  getAllMajorsOfInstitution: (params: operations["getAllMajorsOfInstitution"]["parameters"]) => ({
    queryKey: [params],
    queryFn: async () => {
      const response = await client.GET(`/v1/institution/{institution_id}/major`, {
        params,
      });
      if (!response.response.ok) throw response.error;
      return response;
    },
  }),

  byId: (major_id: operations["getMajorById"]["parameters"]["path"]["major_id"]) => ({
    queryKey: [major_id],
    queryFn: async () => {
      const response = await client.GET(`/v1/institution/major/{major_id}`, {
        params: {
          path: {
            major_id,
          },
        },
      });
      if (!response.response.ok) throw response.error;
      return response;
    },
  }),
});
