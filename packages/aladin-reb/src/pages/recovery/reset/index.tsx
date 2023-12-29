import { Navigate, useLocation } from "react-router-dom";
import { Container, Paper, Popover, Stack, Text, TextInput, Title } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { IconLock } from "@tabler/icons-react";
import { z } from "zod";

import useRedirect from "@/common/hooks/use-redirect";
import { PasswordStrength } from "@/features/auth/components/password-strength";
import useReNewPassword from "@/features/auth/services/use-renew-password";
import RippleButton from "@/modules/mantine-ripple/components/ripple-button";

const requirements = [
  { re: /[0-9]/, label: "Includes number" },
  { re: /[a-z]/, label: "Includes lowercase letter" },
  { re: /[A-Z]/, label: "Includes uppercase letter" },
  { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: "Includes special symbol" },
];

const schema: z.ZodType = z
  .object({
    newPassword: z
      .string()
      .min(8)
      .regex(/[0-9]/, "Mật khẩu phải chứa ít nhất 1 số")
      .regex(/[a-z]/, "Mật khẩu phải chứa ít nhất 1 chữ thường")
      .regex(/[A-Z]/, "Mật khẩu phải chứa ít nhất 1 chữ hoa")
      .regex(/[$&+,:;=?@#|'<>.^*()%!-]/, "Mật khẩu phải chứa ít nhất 1 ký tự đặc biệt"),
    confirmNewPassword: z.string(),
  })
  .refine(
    (schema) => {
      return schema.newPassword === schema.confirmNewPassword;
    },
    {
      path: ["confirmNewPassword"],
      message: "Mật khẩu không khớp",
    },
  );

export default function ResetPasswordPage() {
  const { state } = useLocation<{ signature: string; email: string }>();
  const { redirect } = useRedirect();

  const form = useForm({
    initialValues: {
      confirmNewPassword: "",
      newPassword: "",
      oldPassword: "",
    },
    validate: zodResolver(schema),
  });

  const renew = useReNewPassword();

  if (!state) return <Navigate to="/login" />;

  const { signature, email } = state;

  if (!signature || !email) return <Navigate to="/login" />;

  const handleRenew = async () => {
    await renew.mutateAsync({ email, signature, ...form.values });
    redirect("/login");
  };

  return (
    <Container>
      <Paper p="lg" shadow="lg" className="bg-gray-50 w-[450px]">
        <Stack spacing="lg">
          <Stack spacing="0" ml="lg">
            <Title order={1} className="text-blue-700">
              Đặt lại mật khẩu
            </Title>
            <Text>Nhập mật khẩu mới của bạn</Text>
          </Stack>
          <form onSubmit={form.onSubmit(handleRenew)}>
            <Paper p="lg" shadow="lg">
              <Stack spacing="md">
                <Popover position="bottom-start" withArrow shadow="md">
                  <Popover.Target>
                    <TextInput
                      label="Mật khẩu mới"
                      withAsterisk
                      placeholder="Mật khẩu mới"
                      icon={<IconLock size="1rem" />}
                      type="password"
                      {...form.getInputProps("newPassword")}
                    />
                  </Popover.Target>
                  <Popover.Dropdown>
                    <PasswordStrength requirements={requirements} value={form.values.newPassword} />
                  </Popover.Dropdown>
                </Popover>
                <TextInput
                  icon={<IconLock size="1rem" />}
                  withAsterisk
                  label="Nhập lại mật khẩu mới"
                  type="password"
                  {...form.getInputProps("confirmNewPassword")}
                />
                <RippleButton type="submit" loading={renew.isLoading} fullWidth>
                  Xác nhận
                </RippleButton>
              </Stack>
            </Paper>
          </form>
        </Stack>
      </Paper>
    </Container>
  );
}
