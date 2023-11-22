import { useMutation } from "@tanstack/react-query";

import { client } from "@/api/openapi-fetch";

type RequestType = {
  email: string;
  signature: string;
  confirmNewPassword: string;
  newPassword: string;
  oldPassword: string;
};

export default function useReNewPassword() {
  const mutation = useMutation({
    mutationFn: async ({
      email,
      signature,
      confirmNewPassword,
      newPassword,
      oldPassword,
    }: RequestType) => {
      const { error, data } = await client.PUT("/v1/password-forget/account/{email}/new-password", {
        params: {
          path: {
            email,
          },
        },
        body: {
          signature,
          confirmNewPassword,
          newPassword,
          oldPassword,
        },
      });

      if (error) throw error;

      return data;
    },
  });

  return mutation;
}
