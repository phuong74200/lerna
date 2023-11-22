import { useMutation } from "@tanstack/react-query";

import { client } from "@/api/openapi-fetch";

type RequestType = {
  email: string;
};

export default function useForgetPassword() {
  const mutation = useMutation({
    mutationFn: async (path: RequestType) => {
      const { error, data } = await client.PUT("/v1/password-forget/account/{email}", {
        params: {
          path,
        },
      });

      if (error) throw error;

      return data;
    },
  });

  return mutation;
}
