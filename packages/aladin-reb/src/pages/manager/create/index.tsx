import { Group, Paper, Popover, Select, Stack, TextInput } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { IconLock } from "@tabler/icons-react";
import { z } from "zod";

import { components } from "@/api/v1";
import useModalRouteTrasition from "@/common/hooks/use-modal-route-transition";
import CustomModal from "@/common/ui/custom-modal";
import { PasswordStrength } from "@/features/auth/components/password-strength";
import useGetAllDepartment from "@/features/department/services/use-get-all-department";
import useCreateManager from "@/features/manager/services/use-create-manager";
import RippleButton from "@/modules/mantine-ripple/components/ripple-button";

const requirements = [
  { re: /[0-9]/, label: "Includes number" },
  { re: /[a-z]/, label: "Includes lowercase letter" },
  { re: /[A-Z]/, label: "Includes uppercase letter" },
  { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: "Includes special symbol" },
];

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
    contractLink: z.string().url("Đường dẫn hợp đồng không hợp lệ"),
    roleId: z.string().min(1, "Phân quyền không hợp lệ"),
    departmentId: z.string().min(1, "Bộ phận không hợp lệ"),
    position: z.string(),
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

type FormType = components["schemas"]["CreateManagerRequest"] & {
  confirmPassword: string;
};

export default function CreateManagerPage() {
  const { open, goBack } = useModalRouteTrasition();

  const form = useForm<FormType>({
    initialValues: {
      email: "",
      roleId: "",
      contractLink: "",
      departmentId: "",
      password: "",
      position: "",
      confirmPassword: "",
    },
    validate: zodResolver(schema),
  });

  const { isLoading, mutate } = useCreateManager();
  const department = useGetAllDepartment();

  const submit = () => {
    mutate(form.values);
  };

  return (
    <CustomModal opened={open} onClose={goBack} title="Tạo tài khoản" size="30%">
      <Paper p="md" shadow="sm">
        <form onSubmit={form.onSubmit(submit)}>
          <Stack>
            <TextInput
              withAsterisk
              label="Email"
              placeholder="you@email.com"
              {...form.getInputProps("email")}
            />
            <Group noWrap className="items-start" classNames="w-full">
              <Popover position="bottom" withArrow shadow="md">
                <Popover.Target>
                  <TextInput
                    label="Mật khẩu"
                    withAsterisk
                    placeholder="Mật khẩu"
                    icon={<IconLock size="1rem" />}
                    type="password"
                    className="w-full"
                    {...form.getInputProps("password")}
                  />
                </Popover.Target>
                <Popover.Dropdown>
                  <PasswordStrength
                    requirements={requirements}
                    value={form.values.password || ""}
                  />
                </Popover.Dropdown>
              </Popover>
              <TextInput
                label="Nhập lại mật khẩu"
                withAsterisk
                className="w-full"
                placeholder="Nhập lại mật khẩu"
                icon={<IconLock size="1rem" />}
                type="password"
                {...form.getInputProps("confirmPassword")}
              />
            </Group>
            <TextInput
              withAsterisk
              label="Link hợp đồng"
              placeholder="https://example.com"
              {...form.getInputProps("contractLink")}
            />
            <Select
              data={department.data?.list.toSelectList() || []}
              withAsterisk
              label="Bộ phận"
              placeholder="Chọn bộ phận"
              {...form.getInputProps("departmentId")}
            />
            <TextInput
              placeholder="CEO, manager, lead, staff,..."
              withAsterisk
              label="Chức vụ"
              {...form.getInputProps("position")}
            />
            <Select data={[]} withAsterisk label="Phân quyền" {...form.getInputProps("roleId")} />

            <Group position="right">
              <RippleButton type="submit" fullWidth loading={isLoading}>
                Tạo
              </RippleButton>
            </Group>
          </Stack>
        </form>
      </Paper>
    </CustomModal>
  );
}
