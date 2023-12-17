import { Button, Radio, SimpleGrid, Stack, Text, Textarea, TextInput, Title } from "@mantine/core";
import { useForm, UseFormReturnType, zodResolver } from "@mantine/form";
import { z } from "zod";

import { TaRegisterForm } from "@/features/register/types/ta-register-form";
import { useGetCurrentUserFromCache } from "@/services/use-get-current-user";

const schema = z.object({
  linkFacebook: z.string().url(),
  studentCode: z.string().min(1),
  subjectRegisters: z.array(z.string()),
  personalImage: z.string().url(),
  referenceTAPhoneNumber: z.string().min(10).max(11),
  teachingExperience: z.string(),
  usedToBeTA: z.boolean(),
});

type Props = {
  generalForm: UseFormReturnType<TaRegisterForm>;
};

export default function TAStep1({ generalForm }: Props) {
  const user = useGetCurrentUserFromCache();

  const form = useForm<TaRegisterForm["step1"]>({
    validate: zodResolver(schema),
    initialValues: {
      linkFacebook: "",
      studentCode: "",
      personalImage: "",
      referenceTAPhoneNumber: "",
      teachingExperience: "",
      usedToBeTA: false,
    },
  });

  const handleSubmit = () => generalForm.setFieldValue("step1", form.values);

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Text my="lg" weight="bold" size="xl" align="center" transform="uppercase">
        ĐĂNG KÝ HỢP TÁC DẠY HỌC TẠI ALADIN IU
      </Text>
      <Stack>
        <SimpleGrid cols={2}>
          <Stack>
            <Title order={3} className="text-blue-600">
              Thông tin cá nhân
            </Title>
            <TextInput
              withAsterisk
              label="Họ và tên"
              placeholder="Họ và tên"
              disabled
              defaultValue={user?.state.data?.data.fullName}
            />
            <TextInput
              withAsterisk
              label="Email"
              placeholder="Email"
              defaultValue={user?.state.data?.data.email}
              disabled
            />
            <TextInput
              withAsterisk
              label="Số điện thoại"
              placeholder="Số điện thoại"
              disabled
              defaultValue={user?.state.data?.data.phoneNumber}
            />
            <TextInput
              withAsterisk
              label="Mã số sinh viên"
              placeholder="Mã số sinh viên"
              {...form.getInputProps("studentCode")}
            />
            <TextInput
              withAsterisk
              label="Link facebook"
              placeholder="Link facebook"
              {...form.getInputProps("linkFacebook")}
            />
          </Stack>
          <Stack>
            <Title order={3} className="text-blue-600">
              Thông tin khác
            </Title>
            <TextInput label="Số điện thoại trợ giảng giới thiệu" placeholder="Số điện thoại" />
            <Title order={3} className="text-blue-600">
              Khảo sát về dạy học
            </Title>
            <Radio.Group
              name="experience"
              label="Bạn đã từng có kinh nghiệm trợ giảng chưa? "
              withAsterisk
              {...form.getInputProps("usedToBeTA")}
            >
              <Stack mt="xs">
                <Radio value="yes" label="Có" />
                <Radio value="no" label="Chưa" />
              </Stack>
            </Radio.Group>
            <Textarea
              placeholder="Kinh nghiệm giảng dạy"
              label="Sơ lược về kinh nghiệm giảng dạy"
              description="Nếu bạn chưa có kinh nghiệm vui lòng bỏ qua phần này!"
              {...form.getInputProps("teachingExperience")}
            />
          </Stack>
        </SimpleGrid>
        <Button type="submit" variant="filled" fullWidth>
          Tiếp tục
        </Button>
      </Stack>
    </form>
  );
}
