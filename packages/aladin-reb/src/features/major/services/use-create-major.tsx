import { UseFormReturnType } from "@mantine/form";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { queryKeys } from "@/api";
import { client } from "@/api/openapi-fetch";
import { components } from "@/api/v1";
import { notification } from "@/configs/notifications";
import formConstraintError from "@/features/error/utils/form-constraint-error";
import generateQueryId from "@/utils/generate-query-id";
import { isInstanceOfContraintError } from "@/utils/is-instance-of";

export type CreateMajorRequest = components["schemas"]["CreateMajorRequest"];

export default function useCreateMajor(form: UseFormReturnType<CreateMajorRequest>) {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (body: CreateMajorRequest) => {
      const response = await client.POST("/v1/institution/major", {
        body,
      });

      if (!response.response.ok) throw response.error;

      return response;
    },

    onMutate: (vars) => {
      notification.loader({
        id: generateQueryId(vars),
        message: (
          <>
            Đang tạo khoa/ngành <b>{vars.name}</b>
          </>
        ),
      });
    },

    onError: (error) => {
      if (isInstanceOfContraintError<CreateMajorRequest>(error)) formConstraintError(error, form);
    },

    onSuccess: (_r, vars) => {
      notification.success({
        id: generateQueryId(vars),
        message: (
          <>
            Tạo khoa/ngành <b>{vars.name}</b> thành công
          </>
        ),
      });

      queryClient.invalidateQueries(queryKeys.major.getAllMajorsOfInstitution._def);
      form.reset();
    },
  });

  const submit = () => mutation.mutate(form.values);

  return { mutation, submit };
}
