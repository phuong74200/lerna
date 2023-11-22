import { useMutation } from "@tanstack/react-query";

import { client } from "@/api/openapi-fetch";
import { operations } from "@/api/v1";
import { notification } from "@/configs/notifications";
import useRedirect from "@/hooks/use-redirect";
import isInstanceOfResponseError from "@/utils/is-instance-of";

export default function useVerifyOTP() {
  const { redirect } = useRedirect();

  const mutate = useMutation({
    mutationFn: async (path: operations["confirmCode"]["parameters"]["path"]) => {
      const { data, error } = await client.PUT("/v1/verification/code-confirm/{code}", {
        params: {
          path,
        },
      });

      if (error) throw error;

      return data;
    },

    onSuccess() {
      redirect("/login");
    },

    onError(error) {
      if (isInstanceOfResponseError(error)) {
        notification.error({ message: error.detail, color: "red" });
      }
    },
  });

  return mutate;
}
