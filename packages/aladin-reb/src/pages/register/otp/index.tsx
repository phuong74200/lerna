import { useRef } from "react";
import { Navigate, useLoaderData } from "react-router-dom";
import { Anchor, Box, Image, Paper, PinInput, Stack, Text, Title } from "@mantine/core";
import { useForm } from "@mantine/form";
import { Notifications } from "@mantine/notifications";

import { ASSET_CHECK_MARK } from "@/assets";
import useModalRouteTrasition from "@/common/hooks/use-modal-route-transition";
import useRedirect from "@/common/hooks/use-redirect";
import CustomModal from "@/common/ui/custom-modal";
import useResendOTP from "@/features/register/services/use-resend-otp";
import useVerifyOTP from "@/features/register/services/use-verify-otp";
import { currentUserLoader } from "@/loaders/current-user";
import RippleButton from "@/modules/mantine-ripple/components/ripple-button";
import { clsToken } from "@/utils/auth-token";

export default function RegisterOTPPage() {
  const userData = useLoaderData() as Awaited<ReturnType<ReturnType<typeof currentUserLoader>>>;
  const { open } = useModalRouteTrasition();
  const ref = useRef<HTMLFormElement>(null);
  const { redirect } = useRedirect();

  const form = useForm({
    initialValues: {
      code: "",
    },
    transformValues(values) {
      return {
        code: values.code || "00000",
      };
    },
  });

  const { mutate, isLoading } = useResendOTP();
  const { mutate: verify, isLoading: isLoadingVerify } = useVerifyOTP();

  const closeFn = () => {
    clsToken();
    redirect("/login");
  };

  if (userData?.status !== "VERIFICATION_REQUIRED") return <Navigate to="/login" />;

  return (
    <CustomModal opened={open} onClose={closeFn} title="Xác thực tài khoản" size="400px">
      <Notifications
        target={ref.current || undefined}
        className="absolute"
        position="top-center"
        limit={2}
        autoClose={3000}
      />
      <form ref={ref} onSubmit={form.onSubmit((values) => verify(values))} className="relative">
        <Paper className="relative overflow-hidden" shadow="lg">
          <Box className="absolute -left-1/2 top-0 h-28 w-[200%] rounded-b-[100%] bg-oc-cyan-4" />
          <Box className="absolute left-1/2 top-[40px] flex h-32 w-32 -translate-x-1/2 items-center justify-center rounded-full border-8 border-solid border-oc-white bg-oc-cyan-4">
            <Image src={ASSET_CHECK_MARK} width={16 * 5} />
          </Box>
          <Box className="h-44" />
          <Stack p="md" spacing="lg">
            <Title className="text-center">Mã xác thực</Title>
            <Text className="text-center">
              Cảm ơn bạn đã sử dụng Aladin. Chúng tôi đã gửi 1 mã xác thực gồm 6 chữ số đến email
              của bạn. Vui lòng nhập mã xác thực để tiếp tục.
            </Text>
            <PinInput size="lg" className="mx-auto" length={6} {...form.getInputProps("code")} />
            <RippleButton
              type="submit"
              loading={isLoading || isLoadingVerify}
              className="mx-auto w-36"
            >
              Xác nhận
            </RippleButton>
            <Text className="text-center">
              Không nhận được email? <Anchor onClick={() => mutate()}>Nhấn vào đây</Anchor> để gửi
              lại
            </Text>
          </Stack>
        </Paper>
      </form>
    </CustomModal>
  );
}
