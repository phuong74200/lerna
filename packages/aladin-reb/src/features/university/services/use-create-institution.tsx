import { UseFormReturnType } from "@mantine/form";
import { useMutation } from "@tanstack/react-query";

import { client } from "@/api/openapi-fetch";
import { components } from "@/api/v1";
import formConstraintError from "@/features/error/utils/form-constraint-error";
import { isInstanceOfContraintError } from "@/utils/is-instance-of";

type CreateInstitutionRequest = components["schemas"]["CreateInstitutionRequest"];

export default function useCreateInstitution(form: UseFormReturnType<CreateInstitutionRequest>) {
  const mutation = useMutation({
    mutationFn: async (body: CreateInstitutionRequest) => {
      const response = await client.POST("/v1/institution", {
        body,
      });

      if (!response.response.ok) throw response.error;

      return response;
    },

    onError: (error) => {
      if (isInstanceOfContraintError<CreateInstitutionRequest>(error))
        formConstraintError(error, form);
    },

    onSuccess: () => {
      form.reset();
    },
  });

  const submit = () => mutation.mutate(form.values);

  return { mutation, submit };
}
