import { useParams } from "react-router-dom";
import { Box, Group, Paper, Stack, Text, Textarea } from "@mantine/core";

import useModalRouteTrasition from "@/common/hooks/use-modal-route-transition";
import CustomModal from "@/common/ui/custom-modal";
import TextInputWithCustomError from "@/common/ui/text-input-with-custom-error";
import SingleImageDrop from "@/features/images/components/single-image-drop";
import useSubject from "@/features/subject/services/use-subject";
import RippleButton from "@/modules/mantine-ripple/components/ripple-button";
import parseDec from "@/utils/parse-dec";

export default function UpdateSubjectPage() {
  const { subjectId } = useParams<{
    subjectId: string;
  }>();

  const { open, goBack } = useModalRouteTrasition();

  const {
    mutate: { mutation },
    query,
    form,
  } = useSubject(parseDec(subjectId));

  const handleSubmitted = async () => {
    await mutation.mutateAsync(form.values);
    goBack();
  };

  return (
    <CustomModal
      opened={open}
      onClose={goBack}
      title={`Chỉnh sửa môn ${query.data?.data?.name}`}
      size="30%"
    >
      <Paper p="md" shadow="sm">
        <form onSubmit={form.onSubmit(handleSubmitted)}>
          <Stack>
            <TextInputWithCustomError
              withAsterisk
              label="Tên môn"
              placeholder="Fundamental math"
              className="w-full"
              {...form.getInputProps("name")}
            />
            <TextInputWithCustomError
              withAsterisk
              label="Đường dẫn tài liệu môn"
              placeholder="https://drive.google.com/file"
              className="w-full"
              {...form.getInputProps("resource")}
            />
            <TextInputWithCustomError
              withAsterisk
              label="Đường dẫn đề thi môn"
              placeholder="https://drive.google.com/file"
              className="w-full"
              {...form.getInputProps("exams")}
            />
            <TextInputWithCustomError
              withAsterisk
              label="Đường dẫn ebook môn"
              placeholder="https://drive.google.com/file"
              className="w-full"
              {...form.getInputProps("ebook")}
            />

            <Box>
              <Text size="sm" weight="bold" className="mb-2 ml-2">
                Hình ảnh
              </Text>
              <SingleImageDrop
                onDrop={form.getInputProps("image").onChange}
                title="Hình ảnh"
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
              <RippleButton
                type="submit"
                fullWidth
                disabled={query.isFetching}
                loading={mutation.isLoading}
              >
                Lưu chỉnh sửa
              </RippleButton>
            </Group>
          </Stack>
        </form>
      </Paper>
    </CustomModal>
  );
}
