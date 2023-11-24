import { useForm, zodResolver } from "@mantine/form";

import { components } from "@/api/v1";
import z from "@/configs/zod";
import useGetAllInstitution from "@/features/university/services/use-get-all-institution";
import useCreateVoucher from "@/features/voucher/services/use-create-voucher";

type FormType = components["schemas"]["CreateEventVoucherRequest"];

const schema: z.ZodType<FormType> = z.object({
  code: z.string().nonempty({ message: "Mã không được để trống" }),
  forClassTypes: z.array(z.string()),
  forInstitutions: z.array(z.string()),
  validFrom: z.coerce.date(),
  validThru: z.coerce.date(),
  value: z.number(),
  valueType: z.enum(["EXACT_MONEY", "PERCENTAGE"]),
  content: z.string(),
  maxRange: z.number(),
  minRange: z.number(),
  totalQuantity: z.number(),
});

export default function useCreateVoucherForm() {
  const mutation = useCreateVoucher();
  const institution = useGetAllInstitution();

  const form = useForm<FormType>({
    initialValues: {
      code: "",
      forClassTypes: [],
      forInstitutions: [],
      validFrom: new Date(),
      validThru: new Date(),
      value: 0,
      valueType: "EXACT_MONEY",
      content: "",
      maxRange: 0,
      minRange: 0,
      totalQuantity: 0,
    },
    validate: zodResolver(schema),
  });

  // const major = useGetAllMajorsOfInstitution(form.values.forInstitutions[0]);

  const submit = () => {
    mutation.mutate(form.values);
  };

  return { submit, institution };
}
