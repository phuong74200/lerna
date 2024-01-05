import { Suspense } from "react";
import { Outlet, useParams } from "react-router-dom";
import { Center, Loader, Paper, Text } from "@mantine/core";

import useModalRouteTrasition from "@/common/hooks/use-modal-route-transition";
import CustomModal from "@/common/ui/custom-modal";
import useGetStudentById from "@/features/students/services/use-get-student-by-id";

export default function BanStudentModalLayout() {
  const { userId } = useParams<{
    userId: string;
  }>();

  const { controller } = useModalRouteTrasition();

  const student = useGetStudentById(userId || "");

  return (
    <CustomModal
      title={
        <Text>
          Khoá tài khoản sinh viên{" "}
          <Text color="orange" span>
            {student.data?.email}
          </Text>
        </Text>
      }
      size="30%"
      {...controller}
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
