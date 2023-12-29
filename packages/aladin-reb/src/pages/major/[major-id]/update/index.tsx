import { useParams } from "react-router-dom";
import { Group, Stack } from "@mantine/core";

import { useModalContext } from "@/common/ui/custom-modal/context";
import TextInputWithCustomError from "@/common/ui/text-input-with-custom-error";
import useMajor from "@/features/major/services/use-major";
import RippleButton from "@/modules/mantine-ripple/components/ripple-button";
import parseDec from "@/utils/parse-dec";

export default function MajorUpdatePage() {
  const { majorId } = useParams<{
    majorId: string;
  }>();

  const { onClose } = useModalContext();

  const {
    mutate: { mutation },
    query,
    form,
  } = useMajor(parseDec(majorId));

  const handleSubmitted = async () => {
    await mutation.mutateAsync(form.values);
    onClose();
  };

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
    </>
  );
}
