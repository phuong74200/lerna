import { useContext } from "react";
import { Button, Group, Text } from "@mantine/core";
import { zodResolver } from "@mantine/form";
import { uid } from "uid";
import { z } from "zod";

import TACourseTable from "@/features/register/components/ta-course-table";
import { TAFormContext } from "@/features/register/contexts/ta-form";
import { FormProvider, useForm } from "@/features/register/contexts/ta-step-2";
import useTARegister from "@/features/register/services/use-ta-register";

const schema = z.object({
  list: z.array(
    z.object({
      major_id: z.string().min(0),
      subjectId: z.string().min(0),
      gpa: z.number().min(0).max(10),
      linkResource: z.string().url(),
      id: z.string(),
    }),
  ),
});

export default function TAStep2() {
  const { generalForm, setStep } = useContext(TAFormContext);
  const { mutateAsync } = useTARegister();

  const form = useForm({
    initialValues: {
      list: [
        {
          gpa: 0,
          linkResource: "string",
          subjectId: 0,
          major_id: 0,
          id: uid(),
        },
      ],
    },
    validate: zodResolver(schema),
  });

  const handleSubmit = async () => {
    if (form.isValid()) {
      generalForm.setFieldValue("subjectRegisters", form.values.list);
      await mutateAsync(generalForm.values);
      setStep(2);
    }
  };

  return (
    <FormProvider form={form}>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Text my="lg" weight="bold" size="xl" align="center" transform="uppercase">
          ĐĂNG KÝ HỢP TÁC DẠY HỌC TẠI ALADIN IU
        </Text>
        <TACourseTable />
        <Group mt="lg" position="right">
          <Button variant="outline">Quay lại</Button>
          <Button type="submit">Gửi phiếu đăng ký</Button>
        </Group>
      </form>
    </FormProvider>
  );
}
