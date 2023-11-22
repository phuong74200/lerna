import {
  Button,
  Group,
  Image,
  Modal,
  Stack,
  Stepper,
  StepperProps,
  StepperStylesParams,
  Text,
  Title,
} from "@mantine/core";

import useModalRouteTrasition from "@/hooks/use-modal-route-transition";
import useStep from "@/hooks/use-step";
import { MantineStyles } from "@/types";
import { generatePlaceHolderImage } from "@/utils/generate-place-holder-image";

const stepperStyles: MantineStyles<StepperProps, StepperStylesParams> = () => ({
  steps: {
    display: "none",
  },
});

export default function RegisterTAPrivateClass() {
  const { open, goBack } = useModalRouteTrasition();
  const step = useStep(0);

  return (
    <Modal.Root
      opened={open}
      onClose={goBack}
      size="55%"
      centered
      transitionProps={{ transition: "slide-up" }}
    >
      <Modal.Overlay blur={3} opacity={0.55} />
      <Modal.Content maw={720}>
        <Modal.Header>
          <Stack w="100%" justify="center" align="center" spacing={0}>
            <Title order={2} transform="uppercase">
              Xác nhận đăng ký dạy nhóm riêng
            </Title>
            <Text>Fundamentals of Financial Management</Text>
          </Stack>
        </Modal.Header>
        <Modal.Body p="xl">
          <Stepper
            styles={stepperStyles}
            active={step.value}
            onStepClick={step.goto}
            breakpoint="sm"
          >
            <Stepper.Step label="Bước 1" description="Thông tin chung">
              <Text>
                Lịch dạy của bạn thỏa mãn điều kiện dạy nhóm riêng này. Hãy bấm Đăng ký dạy để xác
                nhận để hoàn thành quy trình.
              </Text>
              <Image
                mx="auto"
                src={generatePlaceHolderImage({ width: 380, height: 240 })}
                width={240}
              />
              <Group position="right" mt="lg">
                <Button variant="outline" onClick={goBack}>
                  Quay lại
                </Button>
                <Button variant="filled" onClick={step.next}>
                  Đăng ký dạy
                </Button>
              </Group>
            </Stepper.Step>
            <Stepper.Completed>
              <Text align="center">
                Chúc mừng bạn đã đăng ký thành công nhóm riêng. Hãy thường xuyên kiểm tra trạng thái
                nhóm riêng để đảm bảo quyền lợi của bạn.
              </Text>
              <Image
                mx="auto"
                src={generatePlaceHolderImage({ width: 380, height: 240 })}
                width={240}
              />
              <Group position="right" mt="lg">
                <Button variant="outline" onClick={goBack}>
                  Quay lại
                </Button>
              </Group>
            </Stepper.Completed>
          </Stepper>
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  );
}
