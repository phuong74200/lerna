import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Center, Loader, Paper } from "@mantine/core";

import CustomModal from "@/components/custom-modal";
import useModalRouteTrasition from "@/hooks/use-modal-route-transition";

export default function CreateVoucherLayout() {
  const { open, goBack } = useModalRouteTrasition();

  return (
    <CustomModal opened={open} onClose={goBack} title="Tạo voucher">
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
