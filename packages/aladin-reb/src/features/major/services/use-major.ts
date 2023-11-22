import { useForm } from "@mantine/form";
import { useQuery } from "@tanstack/react-query";

import { queryKeys } from "@/api";
import { components } from "@/api/v1";
import useUpdateMajor from "@/features/major/services/use-update-major";

type Major = components["schemas"]["CreateMajorRequest"];

export default function useMajor(majorId: number) {
  const mutate = useUpdateMajor(majorId);

  const form = useForm<Major>({
    initialValues: {
      name: "",
      institutionId: "",
      description: "",
    },
  });

  const query = useQuery({
    ...queryKeys.major.byId(majorId),
    onSuccess: (data) => {
      form.setValues({
        name: data.data?.name ?? "",
        institutionId: data.data?.institutionId ?? "",
        description: data.data?.description ?? "",
      });
    },
  });

  return { query, mutate, form };
}
