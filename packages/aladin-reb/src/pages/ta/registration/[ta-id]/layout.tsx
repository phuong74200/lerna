import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Center, Loader, Paper } from "@mantine/core";

import useModalRouteTrasition from "@/common/hooks/use-modal-route-transition";
import CustomModal from "@/common/ui/custom-modal";

export default function TARegistrationModalLayout() {
  const { open, goBack } = useModalRouteTrasition();

  return (
    <CustomModal
      opened={open}
      onClose={goBack}
      title="XEM ĐƠN ĐĂNG KÝ HỢP TÁC DẠY HỌC TẠI ALADIN IU"
    >
      <Paper p="md" shadow="sm">
        <Suspense
          fallback={
            <Center className="h-[765.98px] w-full">
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
