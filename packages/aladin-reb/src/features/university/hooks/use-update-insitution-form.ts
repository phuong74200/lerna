import { useEffect } from "react";
import { useForm, zodResolver } from "@mantine/form";
import { z } from "zod";

import { components } from "@/api/v1";
import useGetInstitutionById from "@/features/university/services/use-get-institution-by-id";
import useUpdateInstitution from "@/features/university/services/use-update-institution";

type RequestType = components["schemas"]["CreateInstitutionRequest"];

const schema: z.ZodType<RequestType> = z.object({
  image: z.string().optional(),
  institutionId: z.string().nonempty().max(50),
  name: z.string().nonempty().max(50),
});

export default function useUpdateInsitutionForm(institutionId: string) {
  const institution = useGetInstitutionById(institutionId);
  const update = useUpdateInstitution();

  const form = useForm<RequestType>({
    initialValues: {
      image: "",
      institutionId: "",
      name: "",
      description: "",
    },
    validate: zodResolver(schema),
  });

  // on data loaded success, update form initial values
  useEffect(() => {
    if (institution.data?.data) form.setValues(institution.data.data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [institution.data?.data]);

  const submit = async () => {
    await update.mutateAsync({
      institution_id: institutionId,
      body: form.values,
    });
  };

  return { institution, update, form, submit };
}
