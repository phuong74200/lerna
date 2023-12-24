import { useMutation } from "@tanstack/react-query";

import { client } from "@/api/openapi-fetch";
import { components } from "@/api/v1";
import useRedirect from "@/common/hooks/use-redirect";
import useToken from "@/common/hooks/use-token";

type LoginRequest = components["schemas"]["LoginRequest"];

export default function usePostLoginUser() {
  const [, setToken] = useToken();
  const { redirect } = useRedirect();

  const mutation = useMutation({
    mutationFn: async (body: LoginRequest) => {
      const response = await client.POST("/v1/login", {
        body,
      });

      return response;
    },
    onSuccess: async ({ data }) => {
      if (data?.accessToken && data?.refreshToken)
        setToken({
          accessToken: data.accessToken,
          refreshToken: data.refreshToken || null,
        });

      if (data?.userResponse?.roleId === "SUPER_AD") return redirect("/admin", { replace: true });
      if (data?.userResponse?.roleId === "STU") return redirect("/usr", { replace: true });
    },
  });

  return { ...mutation };
}
