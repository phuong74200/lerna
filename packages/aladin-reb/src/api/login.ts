import { createQueryKeys } from "@lukemorales/query-key-factory";

import { client } from "@/api/openapi-fetch";
import { components } from "@/api/v1";

export const loginKeys = createQueryKeys("login", {
  loginUser: (body: components["schemas"]["LoginRequest"]) => ({
    queryKey: [body],
    queryFn: client.POST("/v1/login", {
      body,
    }),
  }),
});
