import { useParams } from "react-router-dom";
import { Image, Modal } from "@mantine/core";

import useModalRouteTrasition from "@/common/hooks/use-modal-route-transition";

export default function ImageViewPage() {
  const { controller } = useModalRouteTrasition();
  const { imageId } = useParams<{ imageId: string }>();

  return (
    <Modal.Root size="45%" centered {...controller}>
      <Modal.Overlay blur={12} opacity={0.1} />
      <Modal.Content bg="transparent" shadow="none">
        <Image src={imageId} />
      </Modal.Content>
    </Modal.Root>
  );
}
