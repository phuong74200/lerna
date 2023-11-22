import { useMutation } from "@tanstack/react-query";

import { client } from "@/api/openapi-fetch";
import { notification } from "@/configs/notifications";

export default function useResendOTP() {
  const mutate = useMutation({
    mutationFn: () => client.PUT("/v1/verification/code-resend", {}),

    onSuccess() {
      notification.success({ message: "Gửi lại mã OTP thành công" });
    },
  });

  return mutate;
}
