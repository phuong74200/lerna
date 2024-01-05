import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Center, Loader, Paper } from "@mantine/core";

import useModalRouteTrasition from "@/common/hooks/use-modal-route-transition";
import CustomModal from "@/common/ui/custom-modal";

export default function CreateManagerLayout() {
  const { controller } = useModalRouteTrasition();

  return (
    <CustomModal title="Tạo tài khoản" {...controller}>
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
