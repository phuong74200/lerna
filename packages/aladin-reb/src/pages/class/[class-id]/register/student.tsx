import { Modal, Stepper } from "@mantine/core";

import useModalRouteTrasition from "@/common/hooks/use-modal-route-transition";
import useStep from "@/common/hooks/use-step";
import CourseStep1 from "@/features/register/components/course-step-1";
import CourseStep2 from "@/features/register/components/course-step-2";
import CourseStep3 from "@/features/register/components/course-step-3";
import CourseStepComplete from "@/features/register/components/course-step-complete";

export default function ClassRegister() {
  const step = useStep(0);

  const { controller } = useModalRouteTrasition();

  return (
    <Modal.Root size="55%" centered {...controller}>
      <Modal.Overlay blur={3} opacity={0.55} />
      <Modal.Content maw={720}>
        <Modal.Body p="xl">
          <Stepper active={step.value} onStepClick={step.goto} breakpoint="sm">
            <Stepper.Step label="Bước 1" description="Thông tin chung">
              <CourseStep1 />
            </Stepper.Step>
            <Stepper.Step label="Bước 2" description="Thông tin thanh toán">
              <CourseStep2 />
            </Stepper.Step>
            <Stepper.Step label="Bước 3" description="Thanh toán">
              <CourseStep3 {...step} />
            </Stepper.Step>
            <Stepper.Completed>
              <CourseStepComplete />
            </Stepper.Completed>
          </Stepper>
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  );
}
