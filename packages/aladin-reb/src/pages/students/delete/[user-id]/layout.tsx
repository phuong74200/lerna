import { Suspense } from "react";
import { Outlet, useParams } from "react-router-dom";
import { Center, Loader, Paper, Text } from "@mantine/core";

import useModalRouteTrasition from "@/common/hooks/use-modal-route-transition";
import CustomModal from "@/common/ui/custom-modal";
import useGetStudentById from "@/features/students/services/use-get-student-by-id";

export default function DeleteStudentModalLayout() {
  const { userId } = useParams<{
    userId: string;
  }>();

  const { open, goBack } = useModalRouteTrasition();

  const student = useGetStudentById(userId || "");

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
        <Suspense
          fallback={
            <Center className="h-[370.89px] w-full">
              <Loader />
            </Center>
          }
        >
          <Outlet />
        </Suspense>
      </Paper>
    </CustomModal>
  );
}
