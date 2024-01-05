import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Center, Loader, Paper } from "@mantine/core";

import useModalRouteTrasition from "@/common/hooks/use-modal-route-transition";
import CustomModal from "@/common/ui/custom-modal";

export default function CreateDiscountLayout() {
  const { controller } = useModalRouteTrasition();

  return (
    <CustomModal title="Tạo giảm giá" {...controller}>
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
