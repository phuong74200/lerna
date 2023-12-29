import { useParams } from "react-router-dom";
import { Group, Stack, Textarea } from "@mantine/core";
import { DateTimePicker } from "@mantine/dates";
import { useForm } from "@mantine/form";

import { useModalContext } from "@/common/ui/custom-modal/context";
import useBanStudent from "@/features/students/services/use-ban-student";
import RippleButton from "@/modules/mantine-ripple/components/ripple-button";

export default function BanStudentPage() {
  const { userId } = useParams<{
    userId: string;
  }>();

  const mutation = useBanStudent();

  const { onClose } = useModalContext();

  const form = useForm({
    initialValues: {
      reason: "",
      until: new Date(),
    },
  });

  const handleSubmitted = async () => {
    if (userId) await mutation.mutateAsync(userId);
    onClose();
  };

  return (
    <>
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
    </>
  );
}
