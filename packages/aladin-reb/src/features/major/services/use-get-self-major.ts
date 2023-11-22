import useGetAllMajorsOfInstitution from "@/features/major/services/use-get-all-majors-of-institution";
import { useGetCurrentUserFromCache } from "@/services/use-get-current-user";

export default function useGetSelfMajor() {
  const user = useGetCurrentUserFromCache();

  const majors = useGetAllMajorsOfInstitution({
    path: { institution_id: user?.state.data?.data.institutionId || "" },
  });

  return majors;
}
