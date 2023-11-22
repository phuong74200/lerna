import { Modal, ModalProps, Paper, Stack, Title } from "@mantine/core";

export default function CustomModal({
  children,
  title,
  withCloseButton = true,
  ...others
}: ModalProps) {
  return (
    <Modal.Root size="45%" centered transitionProps={{ transition: "slide-up" }} {...others}>
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
  );
}
