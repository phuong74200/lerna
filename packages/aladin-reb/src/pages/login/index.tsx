import { Link } from "react-router-dom";
import {
  Anchor,
  Checkbox,
  Divider,
  Group,
  Paper,
  Stack,
  Text,
  TextInput,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconAt, IconLock } from "@tabler/icons-react";

import { components } from "@/api/v1";
import { GoogleButton } from "@/features/auth/components/google-button";
import useRedirect from "@/hooks/use-redirect";
import RippleButton from "@/modules/mantine-ripple/components/ripple-button";
import usePostLoginUser from "@/services/use-post-login-user";

export default function Login() {
  const theme = useMantineTheme();
  const form = useForm<components["schemas"]["LoginRequest"]>({
    initialValues: {
      email: "",
      password: "",
      idToken: "",
    },
  });
  const { submit, isLoading } = usePostLoginUser(form);
  const { onRedirect } = useRedirect();

  return (
    <Paper
      p="lg"
      shadow="lg"
      radius="2.25rem" // calc(1rem + 1.25rem)
      className="bg-gray-50 w-[450px] sm:w-full"
    >
      <Stack spacing="lg">
        <Stack spacing="xs" ml="lg">
          <Title order={1} className="text-blue-700">
            Xin chào
          </Title>
          <Text>Đăng nhập và bắt đầu học ngay hôm nay</Text>
        </Stack>
        <Paper p="lg" shadow="lg">
          <form onSubmit={form.onSubmit(submit)}>
            <Stack spacing="md">
              <TextInput
                label="Email"
                required
                placeholder="you@email.com"
                icon={<IconAt size={theme.fontSizes.md} />}
                {...form.getInputProps("email")}
              />
              <TextInput
                label="Mật khẩu"
                required
                placeholder="Mật khẩu"
                type="password"
                icon={<IconLock size={theme.fontSizes.md} />}
                {...form.getInputProps("password")}
              />
              <Group position="apart">
                <Checkbox label="Ghi nhớ đăng nhập" />
                <Anchor className="text-gray-400 underline" component={Link} to="/recovery">
                  Quên mật khẩu
                </Anchor>
              </Group>
              <RippleButton
                loading={isLoading}
                type="submit"
                variant="filled"
                fullWidth
                onClick={submit}
              >
                Đăng nhập
              </RippleButton>
              <Divider label="Hoặc" labelPosition="center" />
              <GoogleButton>Đăng nhập bằng Google</GoogleButton>
            </Stack>
          </form>
          <Text className="mt-10 text-center">
            Chưa có tài khoản? <Anchor onClick={onRedirect("/register")}>Đăng ký</Anchor>
          </Text>
        </Paper>
      </Stack>
    </Paper>
  );
}
