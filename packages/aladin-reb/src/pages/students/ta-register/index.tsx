import { useEffect, useMemo, useState } from "react";
import { Stepper } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useQuery } from "@tanstack/react-query";

import { queryKeys } from "@/api";
import { components } from "@/api/v1";
import TAStep1 from "@/features/register/components/ta-step-1";
import TAStep2 from "@/features/register/components/ta-step-2";
import TAStep3 from "@/features/register/components/ta-step-3";
import TAStepFail from "@/features/register/components/ta-step-fail";
import { TAFormContext } from "@/features/register/contexts/ta-form";

export default function TaRegister() {
  const { data } = useQuery({
    ...queryKeys.ta.register(),
  });

  const [activeStep, setStep] = useState(0);

  const generalForm = useForm<components["schemas"]["RegisterTARequest"]>();

  useEffect(() => {
    if (data) setStep(2);
  }, [data]);

  const value = useMemo(
    () => ({
      generalForm,
      activeStep,
      setStep,
    }),
    [generalForm, activeStep, setStep],
  );

  return (
    <TAFormContext.Provider value={value}>
      <Stepper active={activeStep} breakpoint="sm" allowNextStepsSelect={false}>
        <Stepper.Step label="Bước 1" description="Điền thông tin">
          <TAStep1 />
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
    </TAFormContext.Provider>
  );
}
