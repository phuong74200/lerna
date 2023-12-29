import { Modal, ModalProps, Paper, Stack, Title } from "@mantine/core";

import { ModalContext } from "@/common/ui/custom-modal/context";

export default function CustomModal({
  children,
  title,
  withCloseButton = true,
  ...others
}: ModalProps) {
  return (
    <ModalContext.Provider
      value={{
        onClose: others.onClose,
      }}
    >
      <Modal.Root
        size="45%"
        centered
        transitionProps={{ transition: "slide-up", duration: 300 }}
        {...others}
      >
        <Modal.Overlay blur={12} opacity={0.1} />
        <Modal.Content bg="transparent" shadow="none">
          <Stack>
            <Paper shadow="sm">
              <Modal.Header>
                <Title order={5}>{title}</Title>
                {withCloseButton && (
                  <Modal.CloseButton variant="light" size="md" radius="md" iconSize="1rem" />
                )}
              </Modal.Header>
            </Paper>
            {children}
          </Stack>
        </Modal.Content>
      </Modal.Root>
    </ModalContext.Provider>
  );
}
