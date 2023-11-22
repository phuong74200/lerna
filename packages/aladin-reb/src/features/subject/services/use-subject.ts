import { useForm } from "@mantine/form";
import { useQuery } from "@tanstack/react-query";

import { queryKeys } from "@/api";
import { components } from "@/api/v1";
import useCreateSubject from "@/features/subject/services/use-create-subject";
import useUpdateSubject from "@/features/subject/services/use-update-subject";

type Major = components["schemas"]["CreateSubjectRequest"];

export default function useSubject(subjectId: number) {
  const mutate = useUpdateSubject(subjectId);
  const create = useCreateSubject();

  const form = useForm<Major>({
    initialValues: {
      majorId: 0,
      name: "",
      description: "",
      image: "",
      ebook: "",
      exams: "",
      resource: "",
      recommendedSessionNumber: 0,
      subjectCode: "",
    },
  });

  const query = useQuery({
    ...queryKeys.subject.getById(subjectId),
    onSuccess: (data) => {
      form.setValues({
        majorId: data?.data?.majorId || 0,
        name: data?.data?.name || "",
        description: data?.data?.description || "",
        image: data?.data?.image || "",
        ebook: data?.data?.ebook || "",
        exams: data?.data?.exams || "",
        resource: data?.data?.resource || "",
        recommendedSessionNumber: data?.data?.recommendedSessionNumber || 0,
        subjectCode: data?.data?.subjectCode || "",
      });
    },
  });

  return { query, mutate, form, create };
}
