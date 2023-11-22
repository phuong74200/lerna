import { useQuery } from "@tanstack/react-query";

import { queryKeys } from "@/api";
import { operations } from "@/api/v1";

export default function useGetInstitutionById(
  institution_id?: operations["getInstitutionById"]["parameters"]["path"]["institution_id"],
) {
  const query = useQuery({
    ...queryKeys.institution.getById(institution_id || ""),
  });

  return query;
}
