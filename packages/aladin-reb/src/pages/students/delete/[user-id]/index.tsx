import { useParams } from "react-router-dom";
import { Group, Stack, Text, Textarea, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";

import { useModalContext } from "@/common/ui/custom-modal/context";
import useBanStudent from "@/features/students/services/use-ban-student";
import RippleButton from "@/modules/mantine-ripple/components/ripple-button";

export default function DeleteStudentPage() {
  const { userId } = useParams<{
    userId: string;
  }>();

  const { onClose } = useModalContext();

  const mutation = useBanStudent();

  const form = useForm({
    initialValues: {
      reason: "",
      confirm: "",
    },
  });

  const handleSubmitted = async () => {
    if (userId) await mutation.mutateAsync(userId);
    onClose();
  };

  return (
    <>
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
    </>
  );
}
