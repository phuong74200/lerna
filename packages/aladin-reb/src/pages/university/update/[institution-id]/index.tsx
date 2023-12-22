import { useParams } from "react-router-dom";
import { Box, Group, Stack, Text, Textarea, TextInput } from "@mantine/core";

import SingleImageDrop from "@/features/images/components/single-image-drop";
import useUpdateInsitutionForm from "@/features/university/hooks/use-update-insitution-form";
import useModalRouteTrasition from "@/hooks/use-modal-route-transition";
import RippleButton from "@/modules/mantine-ripple/components/ripple-button";

export default function UpdateUniversityPage() {
  const { institutionId } = useParams<{
    institutionId: string;
  }>();

  const { goBack } = useModalRouteTrasition();

  const { form, submit, update } = useUpdateInsitutionForm(institutionId || "");

  const submitForm = async () => {
    await submit();
    goBack();
  };

  return (
    <form onSubmit={form.onSubmit(submitForm)}>
      <Stack>
        <Group noWrap>
          <TextInput
            withAsterisk
            label="Tên trường"
            placeholder="IU"
            className="w-full"
            disabled
            {...form.getInputProps("institutionId")}
          />
          <TextInput
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
          <RippleButton type="submit" loading={update.isLoading} fullWidth>
            Cập nhật
          </RippleButton>
        </Group>
      </Stack>
    </form>
  );
}
