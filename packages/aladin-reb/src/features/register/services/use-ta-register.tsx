import { useMutation } from "@tanstack/react-query";

import { client } from "@/api/openapi-fetch";
import { components } from "@/api/v1";
import { notification } from "@/configs/notifications";
import isInstanceOfResponseError from "@/utils/is-instance-of";

export default function useTARegister() {
  const mutate = useMutation({
    mutationFn: async (body: components["schemas"]["RegisterTARequest"]) => {
      const { data, error } = await client.POST("/v1/register/ta", {
        body,
      });

      if (error) throw error;

      return data;
    },

    onError(error) {
      if (isInstanceOfResponseError(error)) {
        notification.error({ message: error.detail, color: "red" });
      }
    },
  });

  return mutate;
}
