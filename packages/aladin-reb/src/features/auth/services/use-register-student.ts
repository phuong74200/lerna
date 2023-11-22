import { useLocalStorage } from "@mantine/hooks";
import { useMutation } from "@tanstack/react-query";

import { client } from "@/api/openapi-fetch";
import { components } from "@/api/v1";
import useRedirect from "@/hooks/use-redirect";

export default function useRegisterStudent() {
  const { redirectWithState } = useRedirect();
  const [, setToken] = useLocalStorage({ key: "token" });

  const mutation = useMutation({
    mutationFn: async (body: components["schemas"]["RegisterUserRequest"]) => {
      const response = await client.POST("/v1/register/student", {
        body,
      });
      if (!response.response.ok) throw response.error;
      return response;
    },

    onSuccess: (data) => {
      if (data.response.ok && data.data?.returnObject?.accessToken) {
        setToken(data.data.returnObject.accessToken);
        redirectWithState("verify");
      }
    },
  });

  return mutation;
}
