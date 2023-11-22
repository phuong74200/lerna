import { useParams } from "react-router-dom";
import { Image, Modal } from "@mantine/core";

import useModalRouteTrasition from "@/hooks/use-modal-route-transition";

export default function ImageViewPage() {
  const { open, goBack } = useModalRouteTrasition();
  const { id } = useParams<{ id: string }>();

  return (
    <Modal.Root
      size="45%"
      centered
      transitionProps={{ transition: "slide-up" }}
      onClose={goBack}
      opened={open}
    >
      <Modal.Overlay blur={12} opacity={0.1} />
      <Modal.Content bg="transparent" shadow="none">
        <Image src={id} />
      </Modal.Content>
    </Modal.Root>
  );
}
