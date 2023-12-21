import { useLocation } from "react-router-dom";
import { Group, Paper, Stack } from "@mantine/core";
import { useForm } from "@mantine/form";

import CustomModal from "@/components/custom-modal";
import TextInputWithCustomError from "@/components/text-input-with-custom-error";
import useCreateMajor, { CreateMajorRequest } from "@/features/major/services/use-create-major";
import useModalRouteTrasition from "@/hooks/use-modal-route-transition";
import RippleButton from "@/modules/mantine-ripple/components/ripple-button";

export default function CreateMajorPage() {
  const location = useLocation<{
    institutionId: string;
  }>();

  const { open, goBack } = useModalRouteTrasition();

  const form = useForm<CreateMajorRequest>({
    initialValues: {
      institutionId: location.state.institutionId as string,
      name: "",
      description: "",
    },
  });

  const { submit, mutation } = useCreateMajor(form);

  return (
    <CustomModal opened={open} onClose={goBack} title="Tạo khoa" size="30%">
      <Paper p="md" shadow="sm">
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
      </Paper>
    </CustomModal>
  );
}
