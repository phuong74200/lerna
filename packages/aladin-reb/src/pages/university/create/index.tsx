import { Box, Group, Stack, Text, Textarea } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";

import { components } from "@/api/v1";
import TextInputWithCustomError from "@/components/text-input-with-custom-error";
import z from "@/configs/zod";
import SingleImageDrop from "@/features/images/components/single-image-drop";
import useCreateInstitution from "@/features/university/services/use-create-institution";
import RippleButton from "@/modules/mantine-ripple/components/ripple-button";

type CreateInstitutionRequest = components["schemas"]["CreateInstitutionRequest"];

const schema: z.ZodType<CreateInstitutionRequest> = z.object({
  image: z.string().optional(),
  institutionId: z.string().nonempty().max(50),
  name: z.string().nonempty().max(50),
  description: z.string().optional(),
});

export default function CreateUniversityPage() {
  const form = useForm<CreateInstitutionRequest>({
    initialValues: {
      image: "",
      institutionId: "",
      name: "",
      description: "",
    },
    validate: zodResolver(schema),
  });

  const {
    submit,
    mutation: { isLoading },
  } = useCreateInstitution(form);

  return (
    <form onSubmit={form.onSubmit(submit)}>
      <Stack>
        <Group noWrap>
          <TextInputWithCustomError
            withAsterisk
            label="Tên trường"
            placeholder="IU"
            className="w-full"
            {...form.getInputProps("institutionId")}
          />
          <TextInputWithCustomError
            withAsterisk
            label="Tên chi tiết"
            placeholder="Trường Đại học Quốc Tế"
            className="w-full"
            {...form.getInputProps("name")}
          />
        </Group>

        <Box>
          <Text size="sm" weight="bold" className="mb-2 ml-2">
            Hình ảnh
          </Text>
          <SingleImageDrop
            onDrop={form.getInputProps("image").onChange}
            title="Logo của trường"
            description="Hình ảnh phải có định đạng JPG hoặc PNG, và dung lượng tối đa 2MB."
          />
        </Box>

        <Textarea
          label="Thông tin khác"
          placeholder="Địa chỉ, số điện thoại, email, website,..."
          autosize
          minRows={4}
          maxRows={8}
          {...form.getInputProps("description")}
        />
        <Group position="right">
          <RippleButton type="submit" loading={isLoading} fullWidth>
            Tạo
          </RippleButton>
        </Group>
      </Stack>
    </form>
  );
}
