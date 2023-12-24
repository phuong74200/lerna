import { Select, SelectProps } from "@mantine/core";

import useGetCurrentUser from "@/common/services/use-get-current-user";
import useGetAllMajorsOfInstitution from "@/features/major/services/use-get-all-majors-of-institution";

const MajorSelect = (props: Omit<SelectProps, "data">) => {
  const { data } = useGetCurrentUser();
  const majors = useGetAllMajorsOfInstitution({
    path: { institution_id: data?.data?.institutionId || "" },
  });

  return (
    <Select
      withinPortal
      variant="filled"
      placeholder="Khoa"
      data={majors.data?.toSelectList() || []}
      {...props}
    />
  );
};

export default MajorSelect;
