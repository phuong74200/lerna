import {
  Button,
  Checkbox,
  Divider,
  Group,
  Paper,
  Popover,
  Stack,
  Text,
  TextInput,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { IconAt, IconLock } from "@tabler/icons-react";
import { z } from "zod";

import { components } from "@/api/v1";
import { GoogleButton } from "@/features/auth/components/google-button";
import { PasswordStrength } from "@/features/auth/components/password-strength";
import useRegisterStudent from "@/features/auth/services/use-register-student";
import UniversitySelect from "@/features/profile/components/university-select";

const requirements = [
  { re: /[0-9]/, label: "Includes number" },
  { re: /[a-z]/, label: "Includes lowercase letter" },
  { re: /[A-Z]/, label: "Includes uppercase letter" },
  { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: "Includes special symbol" },
];

type Form = components["schemas"]["RegisterUserRequest"] & {
  agree: boolean;
};

const schema: z.ZodType = z
  .object({
    password: z
      .string()
      .min(8)
      .regex(/[0-9]/, "Mật khẩu phải chứa ít nhất 1 số")
      .regex(/[a-z]/, "Mật khẩu phải chứa ít nhất 1 chữ thường")
      .regex(/[A-Z]/, "Mật khẩu phải chứa ít nhất 1 chữ hoa")
      .regex(/[$&+,:;=?@#|'<>.^*()%!-]/, "Mật khẩu phải chứa ít nhất 1 ký tự đặc biệt"),
    confirmPassword: z.string(),
    email: z.string().email("Email không hợp lệ"),
    institutionId: z.string().nonempty("Vui lòng chọn trường học"),
  })
  .refine(
    (schema) => {
      return schema.password === schema.confirmPassword;
    },
    {
      path: ["confirmPassword"],
      message: "Mật khẩu không khớp",
    },
  );

export default function RegisterPage() {
  const theme = useMantineTheme();

  const form = useForm<Form>({
    validate: zodResolver(schema),
    initialValues: {
      confirmPassword: "",
      email: "",
      password: "",
      institutionId: "",
      agree: false,
    },
  });

  const { isLoading, mutate } = useRegisterStudent();

  return (
    <form onSubmit={form.onSubmit((v) => mutate(v))}>
      <Paper p="lg" shadow="lg" className="bg-gray-50 w-[450px]">
        <Stack spacing="lg">
          <Stack spacing="0" ml="lg">
            <Title order={1} className="text-blue-700">
              Xin chào
            </Title>
            <Text>Đăng ký và bắt đầu học ngay hôm nay</Text>
          </Stack>
          <Paper p="lg" shadow="lg">
            <Stack spacing="md">
              <TextInput
                label="Email"
                withAsterisk
                placeholder="you@email.com"
                icon={<IconAt size={theme.fontSizes.md} />}
                {...form.getInputProps("email")}
              />
              <Group noWrap className="items-start">
                <Popover position="bottom" withArrow shadow="md">
                  <Popover.Target>
                    <TextInput
                      label="Mật khẩu"
                      withAsterisk
                      placeholder="Mật khẩu"
                      icon={<IconLock size={theme.fontSizes.md} />}
                      type="password"
                      {...form.getInputProps("password")}
                    />
                  </Popover.Target>
                  <Popover.Dropdown>
                    <PasswordStrength requirements={requirements} value={form.values.password} />
                  </Popover.Dropdown>
                </Popover>
                <TextInput
                  label="Nhập lại mật khẩu"
                  withAsterisk
                  placeholder="Nhập lại mật khẩu"
                  icon={<IconLock size={theme.fontSizes.md} />}
                  type="password"
                  {...form.getInputProps("confirmPassword")}
                />
              </Group>
              <UniversitySelect {...form.getInputProps("institutionId")} maxDropdownHeight={300} />
              <Checkbox
                label="Tôi đồng ý với các điều khoản sử dụng"
                {...form.getInputProps("agree")}
              />
              <Button
                type="submit"
                variant="filled"
                fullWidth
                disabled={!form.values.agree}
                loading={isLoading}
              >
                Đăng ký
              </Button>
              <Divider label="Hoặc" labelPosition="center" />
              <GoogleButton>Đăng nhập bằng Google</GoogleButton>
            </Stack>
          </Paper>
        </Stack>
      </Paper>
    </form>
  );
}
