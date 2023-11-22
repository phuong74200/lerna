import { useMutation } from "@tanstack/react-query";

import { client } from "@/api/openapi-fetch";
import { notification } from "@/configs/notifications";
import isInstanceOfResponseError from "@/utils/is-instance-of";

type RequestType = {
  email: string;
  code: string;
};

export default function useForgetPasswordVerify() {
  const mutation = useMutation({
    mutationFn: async (path: RequestType) => {
      const { error, data } = await client.PUT(
        "/v1/password-forget/account/{email}/code-confirm/{code}",
        {
          params: {
            path,
          },
        },
      );

      if (error) throw error;

      return data;
    },

    onError(error) {
      if (isInstanceOfResponseError(error)) {
        notification.error({ message: error.detail, color: "red" });
      }
    },
  });

  return mutation;
}
