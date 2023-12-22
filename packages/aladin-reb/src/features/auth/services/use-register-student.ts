import { useMutation } from "@tanstack/react-query";

import { client } from "@/api/openapi-fetch";
import { components } from "@/api/v1";
import useRedirect from "@/hooks/use-redirect";
import useToken from "@/hooks/use-token";

export default function useRegisterStudent() {
  const { redirectWithState } = useRedirect();
  const [, setToken] = useToken();

  const mutation = useMutation({
    mutationFn: async (body: components["schemas"]["RegisterUserRequest"]) => {
      const { data, error } = await client.POST("/v1/register/student", {
        body,
      });

      if (error) throw error;

      return data;
    },

    onSuccess: (data) => {
      if (!data?.returnObject?.accessToken) return;

      setToken({
        accessToken: data.returnObject.accessToken,
        refreshToken: null,
      });
      redirectWithState("/register/verify");
    },
  });

  return mutation;
}
