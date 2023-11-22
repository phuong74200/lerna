import {
  Button,
  Group,
  Paper,
  Stack,
  Text,
  TextInput,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { IconAt } from "@tabler/icons-react";

export default function ForgetPassword() {
  const theme = useMantineTheme();

  return (
    <Paper p="lg" shadow="lg" className="bg-gray-50 w-[450px]">
      <Stack spacing="lg">
        <Stack spacing="0">
          <Title order={1} className="text-blue-700">
            Quên mật khẩu
          </Title>
          <Text>Lấy lại mật khẩu</Text>
        </Stack>
        <Paper p="lg" shadow="lg">
          <Stack spacing="md">
            <TextInput
              label="Email"
              description="Vui lòng nhập email của bạn để nhận mã xác thực."
              required
              placeholder="you@email.com"
              icon={<IconAt size={theme.fontSizes.md} />}
            />
            <Group noWrap>
              <Button variant="outline" className="w-full">
                Quay lại
              </Button>
              <Button variant="filled" className="w-full">
                Gửi mã xác thực
              </Button>
            </Group>
          </Stack>
        </Paper>
      </Stack>
    </Paper>
  );
}
