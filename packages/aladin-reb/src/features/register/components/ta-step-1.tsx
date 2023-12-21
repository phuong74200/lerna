import { useContext } from "react";
import { Button, Radio, SimpleGrid, Stack, Text, Textarea, TextInput, Title } from "@mantine/core";
import { TransformedValues, useForm, zodResolver } from "@mantine/form";
import { z } from "zod";

import { VN_PHONE_REGEX } from "@/configs/regex";
import { TAFormContext } from "@/features/register/contexts/ta-form";
import useGetCurrentUser from "@/services/use-get-current-user";

const schema = z.object({
  linkFacebook: z.string().url(),
  studentCode: z.string().min(1),
  referenceTAPhoneNumber: z
    .string()
    .refine((v) => (v.length === 0 ? true : new RegExp(VN_PHONE_REGEX).test(v)), {
      message: "Invalid phone number format",
    }),
  teachingExperience: z.string(),
  usedToBeTA: z.string(),
});

export default function TAStep1() {
  const { data } = useGetCurrentUser();
  const { generalForm, setStep } = useContext(TAFormContext);

  const form = useForm({
    validate: zodResolver(schema),
    initialValues: {
      linkFacebook: "",
      studentCode: "",
      referenceTAPhoneNumber: "",
      teachingExperience: "",
      usedToBeTA: "no",
    },
    transformValues(values) {
      return {
        ...values,
        usedToBeTA: values.usedToBeTA === "yes",
      };
    },
  });

  const handleSubmit = (values: TransformedValues<typeof form>) => {
    if (form.isValid()) {
      generalForm.setValues({
        ...generalForm.values,
        ...values,
        referenceTAPhoneNumber: values.referenceTAPhoneNumber || undefined,
      });
      setStep(1);
    }
  };

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
              defaultValue={data?.data?.fullName}
            />
            <TextInput
              withAsterisk
              label="Email"
              placeholder="Email"
              defaultValue={data?.data?.email}
              disabled
            />
            <TextInput
              withAsterisk
              label="Số điện thoại"
              placeholder="Số điện thoại"
              disabled
              defaultValue={data?.data?.phoneNumber}
              {...form.getInputProps("phoneNumber")}
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
            <TextInput
              label="Số điện thoại trợ giảng giới thiệu"
              placeholder="Số điện thoại"
              {...form.getInputProps("referenceTAPhoneNumber")}
            />
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
