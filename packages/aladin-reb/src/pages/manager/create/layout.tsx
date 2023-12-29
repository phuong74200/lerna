import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Center, Loader, Paper } from "@mantine/core";

import useModalRouteTrasition from "@/common/hooks/use-modal-route-transition";
import CustomModal from "@/common/ui/custom-modal";

export default function CreateManagerLayout() {
  const { open, goBack } = useModalRouteTrasition();

  return (
    <CustomModal opened={open} onClose={goBack} title="Tạo tài khoản">
      <Paper p="md" shadow="sm">
        <Suspense
          fallback={
            <Center className="h-[222.97px] w-full">
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
