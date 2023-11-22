import { useLocation } from "react-router-dom";
import { Box, Group, Paper, Stack, Text, Textarea } from "@mantine/core";
import { useForm } from "@mantine/form";

import { components } from "@/api/v1";
import CustomModal from "@/components/custom-modal";
import TextInputWithCustomError from "@/components/text-input-with-custom-error";
import SingleImageDrop from "@/features/images/components/single-image-drop";
import useGetMajorById from "@/features/major/services/use-get-major-by-id";
import useCreateSubject from "@/features/subject/services/use-create-subject";
import useModalRouteTrasition from "@/hooks/use-modal-route-transition";
import RippleButton from "@/modules/mantine-ripple/components/ripple-button";
import parseDec from "@/utils/parse-dec";

export default function CreateSubjectPage() {
  const location = useLocation<{
    majorId: string;
  }>();

  const { data: major } = useGetMajorById(parseDec(location.state.majorId));
  const { open, goBack } = useModalRouteTrasition();

  const form = useForm<components["schemas"]["CreateSubjectRequest"]>({
    initialValues: {
      majorId: parseDec(location.state.majorId, "0"),
      name: "",
      description: "",
      image: "",
      ebook: "",
      exams: "",
      resource: "",
      recommendedSessionNumber: 0,
      subjectCode: "",
    },
  });

  const { isLoading, mutate } = useCreateSubject();

  const submit = () => {
    mutate(form.values);
  };

  return (
    <CustomModal opened={open} onClose={goBack} title="Tạo môn mới" size="30%">
      <Paper p="md" shadow="sm">
        <form onSubmit={form.onSubmit(submit)}>
          <Stack>
            <Group noWrap>
              <TextInputWithCustomError
                withAsterisk
                label="Tên trường"
                placeholder="Fundamental math"
                className="w-full"
                value={major?.data?.institutionName}
                disabled
              />
              <TextInputWithCustomError
                withAsterisk
                label="Tên khoa trường"
                placeholder="Fundamental math"
                className="w-full"
                value={major?.data?.name}
                disabled
              />
            </Group>
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
