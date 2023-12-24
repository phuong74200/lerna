import useGetCurrentUser from "@/common/services/use-get-current-user";
import useGetAllMajorsOfInstitution from "@/features/major/services/use-get-all-majors-of-institution";

export default function useGetSelfMajor() {
  const { data } = useGetCurrentUser();

  const majors = useGetAllMajorsOfInstitution({
    path: { institution_id: data?.data?.institutionId || "" },
  });

  return majors;
}
