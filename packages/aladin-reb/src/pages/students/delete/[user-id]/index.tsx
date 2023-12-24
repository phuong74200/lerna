import { useParams } from "react-router-dom";
import { Group, Paper, Stack, Text, Textarea, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";

import useModalRouteTrasition from "@/common/hooks/use-modal-route-transition";
import CustomModal from "@/common/ui/custom-modal";
import useBanStudent from "@/features/students/services/use-ban-student";
import useGetStudentById from "@/features/students/services/use-get-student-by-id";
import RippleButton from "@/modules/mantine-ripple/components/ripple-button";

export default function DeleteStudentPage() {
  const { userId } = useParams<{
    userId: string;
  }>();

  const { open, goBack } = useModalRouteTrasition();

  const student = useGetStudentById(userId || "");
  const mutation = useBanStudent();

  const form = useForm({
    initialValues: {
      reason: "",
      confirm: "",
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
          Xoá tài khoản sinh viên{" "}
          <Text color="red" span>
            {student.data?.email}
          </Text>
        </Text>
      }
      size="30%"
    >
      <Paper p="md" shadow="sm">
        <Stack>
          <Textarea
            color="red"
            label="Lý do"
            placeholder="Lời nhắn sẽ được gửi kèm với thông báo xoá tài khoản qua mail"
            minRows={12}
            {...form.getInputProps("reason")}
          />
          <TextInput
            autoComplete="off"
            placeholder="Xác nhận"
            label={
              <>
                Nhập &quot;
                <Text span className="select-none font-bold" color="blue">
                  confirm
                </Text>
                &quot; vào ô phía dưới để xác nhận
              </>
            }
            {...form.getInputProps("confirm")}
          />
          <Text color="red" className="text-center italic">
            Dữ liệu của tài khoản bị xóa sẽ không thể khôi phục lại được
          </Text>
        </Stack>
        <Group mt="md" position="right">
          <RippleButton
            fullWidth
            variant="outline"
            color="red"
            onClick={handleSubmitted}
            loading={mutation.isLoading}
            disabled={form.values.confirm !== "confirm"}
          >
            Xác nhận xoá tài khoản
          </RippleButton>
        </Group>
      </Paper>
    </CustomModal>
  );
}
