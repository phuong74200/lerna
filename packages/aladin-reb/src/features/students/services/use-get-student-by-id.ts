import { useQuery } from "@tanstack/react-query";

import { queryKeys } from "@/api";
import { Student } from "@/domains/student";

export default function useGetStudentById(user_id: string) {
  const query = useQuery({
    ...queryKeys.student.byId(user_id),
    select: (data) => new Student(data),
  });

  return query;
}
