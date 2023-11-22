import { Button, Paper, Stack, Text, TextInput, Title, useMantineTheme } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { IconAt } from "@tabler/icons-react";
import { z } from "zod";

import useForgetPassword from "@/features/auth/services/use-forget-password";
import useRedirect from "@/hooks/use-redirect";

const schema = z.object({
  email: z.string().email("Email không hợp lệ"),
});

export default function RecoveryPage() {
  const theme = useMantineTheme();

  const mutation = useForgetPassword();

  const { redirectWithState } = useRedirect();

  const form = useForm({
    initialValues: {
      email: "",
    },
    validate: zodResolver(schema),
  });

  const handleSubmit = async () => {
    await mutation.mutateAsync(form.values);
    redirectWithState("otp", {
      state: {
        email: form.values.email,
      },
    });
  };

  return (
    <Paper p="lg" shadow="lg" className="bg-gray-50 w-[450px]">
      <Stack spacing="lg">
        <Stack spacing="0" ml="lg">
          <Title order={1} className="text-blue-700">
            Quên mật khẩu
          </Title>
          <Text>Lấy lại mật khẩu</Text>
        </Stack>
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <Paper p="lg" shadow="lg">
            <Stack spacing="md">
              <TextInput
                label="Email"
                withAsterisk
                placeholder="you@email.com"
                icon={<IconAt size={theme.fontSizes.md} />}
                {...form.getInputProps("email")}
              />
              <Button
                type="submit"
                variant="filled"
                className="w-full"
                loading={mutation.isLoading}
              >
                Gửi mã xác thực
              </Button>
            </Stack>
          </Paper>
        </form>
      </Stack>
    </Paper>
  );
}
