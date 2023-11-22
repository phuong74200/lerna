import { useRef } from "react";
import { useLocation } from "react-router-dom";
import { Anchor, Box, Image, Paper, PinInput, Stack, Text, Title } from "@mantine/core";
import { useForm } from "@mantine/form";
import { Notifications } from "@mantine/notifications";

import { ASSET_CHECK_MARK } from "@/assets";
import CustomModal from "@/components/custom-modal";
import useForgetPasswordResend from "@/features/auth/services/use-forget-password-resend";
import useForgetPasswordVerify from "@/features/auth/services/use-forget-password-verify";
import useModalRouteTrasition from "@/hooks/use-modal-route-transition";
import useRedirect from "@/hooks/use-redirect";
import RippleButton from "@/modules/mantine-ripple/components/ripple-button";
import Error404 from "@/pages/error/components/error404";
import emptyFn from "@/utils/empty-fn";

export default function RecoveryOTPPage() {
  const { open } = useModalRouteTrasition();
  const { redirect } = useRedirect();

  const ref = useRef<HTMLFormElement>(null);
  const {
    state: { email },
  } = useLocation<{ email: string }>();

  const form = useForm({
    initialValues: {
      code: "",
    },
  });

  const resend = useForgetPasswordResend();
  const verify = useForgetPasswordVerify();

  const handleResend = () => resend.mutate({ email });
  const handleVerify = async () => {
    const data = await verify.mutateAsync({ email, code: form.values.code });
    form.setFieldValue("code", "");
    redirect("/recovery/reset", {
      state: {
        email,
        signature: data.returnObject,
      },
    });
  };

  if (!email) return <Error404 />;

  return (
    <CustomModal
      opened={open}
      onClose={emptyFn}
      withCloseButton={false}
      title="Nhập mã khôi phục"
      size="400px"
    >
      <Notifications
        target={ref.current || undefined}
        className="absolute"
        position="top-center"
        limit={2}
        autoClose={3000}
      />
      <form ref={ref} onSubmit={form.onSubmit(handleVerify)} className="relative">
        <Paper className="relative overflow-hidden" shadow="lg">
          <Box className="absolute -left-1/2 top-0 h-28 w-[200%] rounded-b-[100%] bg-oc-cyan-4" />
          <Box className="absolute left-1/2 top-[40px] flex h-32 w-32 -translate-x-1/2 items-center justify-center rounded-full border-8 border-solid border-oc-white bg-oc-cyan-4">
            <Image src={ASSET_CHECK_MARK} width={16 * 5} />
          </Box>
          <Box className="h-44" />
          <Stack p="md" spacing="lg">
            <Title className="text-center">Mã khôi phục</Title>
            <Text className="text-center">
              Chúng tôi đã gửi 1 mã xác thực gồm 6 chữ số đến email của bạn. Vui lòng nhập mã xác
              thực để tiếp tục.
            </Text>
            <PinInput size="lg" className="mx-auto" length={6} {...form.getInputProps("code")} />
            <RippleButton
              type="submit"
              loading={resend.isLoading || verify.isLoading}
              className="mx-auto w-36"
              wrapperClassName="mx-auto"
            >
              Xác nhận
            </RippleButton>
            <Text className="text-center">
              Không nhận được email? <Anchor onClick={handleResend}>Nhấn vào đây</Anchor> để gửi lại
            </Text>
          </Stack>
        </Paper>
      </form>
    </CustomModal>
  );
}
