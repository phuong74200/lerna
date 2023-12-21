import useGetAllMajorsOfInstitution from "@/features/major/services/use-get-all-majors-of-institution";
import useGetCurrentUser from "@/services/use-get-current-user";

export default function useGetSelfMajor() {
  const { data } = useGetCurrentUser();

  const majors = useGetAllMajorsOfInstitution({
    path: { institution_id: data?.data?.institutionId || "" },
  });

  return majors;
}
