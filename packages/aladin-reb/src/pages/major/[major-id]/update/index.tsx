import { useParams } from "react-router-dom";
import { Group, Paper, Stack } from "@mantine/core";

import CustomModal from "@/components/custom-modal";
import TextInputWithCustomError from "@/components/text-input-with-custom-error";
import useMajor from "@/features/major/services/use-major";
import useModalRouteTrasition from "@/hooks/use-modal-route-transition";
import RippleButton from "@/modules/mantine-ripple/components/ripple-button";
import parseDec from "@/utils/parse-dec";

export default function MajorUpdatePage() {
  const { majorId } = useParams<{
    majorId: string;
  }>();

  const { open, goBack } = useModalRouteTrasition();

  const {
    mutate: { mutation },
    query,
    form,
  } = useMajor(parseDec(majorId));

  const handleSubmitted = async () => {
    await mutation.mutateAsync(form.values);
    goBack();
  };

  return (
    <CustomModal opened={open} onClose={goBack} title="Sửa khoa/nghành" size="30%">
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
          <RippleButton
            fullWidth
            variant="filled"
            onClick={handleSubmitted}
            disabled={query.isFetching}
            loading={mutation.isLoading}
          >
            Lưu chỉnh sửa
          </RippleButton>
        </Group>
      </Paper>
    </CustomModal>
  );
}
