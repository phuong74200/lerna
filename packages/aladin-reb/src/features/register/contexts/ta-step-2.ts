import { createFormContext } from "@mantine/form";

import { components } from "@/api/v1";

export type Column = components["schemas"]["RegisterTARequest"]["subjectRegisters"][number] & {
  major_id: number;
  id: string;
};

export const [FormProvider, useFormContext, useForm] = createFormContext<{
  list: Column[];
}>();
