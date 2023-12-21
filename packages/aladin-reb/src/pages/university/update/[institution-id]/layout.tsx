import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Center, Loader, Paper } from "@mantine/core";

import CustomModal from "@/components/custom-modal";
import useModalRouteTrasition from "@/hooks/use-modal-route-transition";

export default function UpdateUniversityLayout() {
  const { open, goBack } = useModalRouteTrasition();

  return (
    <CustomModal opened={open} onClose={goBack} title="Sửa trường">
      <Paper p="md" shadow="sm">
        <Suspense
          fallback={
            <Center className="h-[400.89px] w-full">
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
