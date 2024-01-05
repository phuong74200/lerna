import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Center, Loader, Paper } from "@mantine/core";

import useModalRouteTrasition from "@/common/hooks/use-modal-route-transition";
import CustomModal from "@/common/ui/custom-modal";

type Props = {
  title: string;
  w?: string;
  h?: string;
};

export default function CommonModalLayout({ title, w, h }: Props) {
  const { controller } = useModalRouteTrasition();

  return (
    <CustomModal title={title} {...controller}>
      <Paper p="md" shadow="sm">
        <Suspense
          fallback={
            <Center w={w || "100%"} h={h || "300px"}>
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
