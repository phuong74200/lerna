import { useParams } from "react-router-dom";
import { Group, Paper, Stack, Text, Textarea } from "@mantine/core";
import { DateTimePicker } from "@mantine/dates";
import { useForm } from "@mantine/form";

import useModalRouteTrasition from "@/common/hooks/use-modal-route-transition";
import CustomModal from "@/common/ui/custom-modal";
import useBanStudent from "@/features/students/services/use-ban-student";
import useGetStudentById from "@/features/students/services/use-get-student-by-id";
import RippleButton from "@/modules/mantine-ripple/components/ripple-button";

export default function BanStudentPage() {
  const { userId } = useParams<{
    userId: string;
  }>();

  const { open, goBack } = useModalRouteTrasition();

  const student = useGetStudentById(userId || "");
  const mutation = useBanStudent();

  const form = useForm({
    initialValues: {
      reason: "",
      until: new Date(),
    },
  });

  const handleSubmitted = async () => {
    // await mutation.mutateAsync();
    // goBack();
  };

  return (
    <CustomModal
      opened={open}
      onClose={goBack}
      title={
        <Text>
          Khoá tài khoản sinh viên{" "}
          <Text color="orange" span>
            {student.data?.email}
          </Text>
        </Text>
      }
      size="30%"
    >
      <Paper p="md" shadow="sm">
        <Stack>
          <DateTimePicker
            withAsterisk
            label="Đến ngày"
            placeholder="Tài khoản sẽ được mở khóa vào thời gian này"
            minDate={new Date()}
            {...form.getInputProps("until")}
          />
          <Textarea
            label="Lý do"
            placeholder="Lời nhắn sẽ được gửi kèm với thông báo khóa tài khoản qua mail"
            minRows={12}
            {...form.getInputProps("reason")}
          />
        </Stack>
        <Group mt="md" position="right">
          <RippleButton
            fullWidth
            variant="filled"
            color="orange"
            onClick={handleSubmitted}
            loading={mutation.isLoading}
          >
            Xác nhận cấm tài khoản
          </RippleButton>
        </Group>
      </Paper>
    </CustomModal>
  );
}
