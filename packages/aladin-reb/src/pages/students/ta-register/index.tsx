import { useState } from "react";
import { Stepper } from "@mantine/core";
import { useForm } from "@mantine/form";

import { components } from "@/api/v1";
import TAStep1 from "@/features/register/components/ta-step-1";
import TAStep2 from "@/features/register/components/ta-step-2";
import TAStep3 from "@/features/register/components/ta-step-3";
import TAStepFail from "@/features/register/components/ta-step-fail";

export default function TaRegister() {
  const [active, setActive] = useState(0);

  const generalForm = useForm<{
    step1: Omit<components["schemas"]["RegisterTARequest"], "subjectRegisters">;
  }>();

  return (
    <Stepper active={active} onStepClick={setActive} breakpoint="sm" allowNextStepsSelect={false}>
      <Stepper.Step label="Bước 1" description="Điền thông tin">
        <TAStep1 generalForm={generalForm} />
      </Stepper.Step>
      <Stepper.Step label="Bước 2" description="Đăng ký môn">
        <TAStep2 />
      </Stepper.Step>
      <Stepper.Step label="Bước 3" description="Chờ xét duyệt">
        <TAStep3 />
      </Stepper.Step>
      <Stepper.Completed>
        <TAStepFail />
      </Stepper.Completed>
    </Stepper>
  );
}
