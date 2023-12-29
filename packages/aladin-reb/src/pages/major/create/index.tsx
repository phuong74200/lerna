import { useLocation } from "react-router-dom";
import { Group, Stack } from "@mantine/core";
import { useForm } from "@mantine/form";

import TextInputWithCustomError from "@/common/ui/text-input-with-custom-error";
import useCreateMajor, { CreateMajorRequest } from "@/features/major/services/use-create-major";
import RippleButton from "@/modules/mantine-ripple/components/ripple-button";

export default function CreateMajorPage() {
  const location = useLocation<{
    institutionId: string;
  }>();

  const form = useForm<CreateMajorRequest>({
    initialValues: {
      institutionId: location.state.institutionId as string,
      name: "",
      description: "",
    },
  });

  const { submit, mutation } = useCreateMajor(form);

  return (
    <>
      <Stack>
        <TextInputWithCustomError
          label="Tên khoa/ngành"
          placeholder="Software Engineer"
          {...form.getInputProps("name")}
        />
        <TextInputWithCustomError
          label="Mô tả"
          placeholder="Software Engineer"
          {...form.getInputProps("description")}
        />
      </Stack>
      <Group mt="md" position="right">
        <RippleButton fullWidth variant="filled" onClick={submit} loading={mutation.isLoading}>
          Tạo mới
        </RippleButton>
      </Group>
    </>
  );
}
