import { Select, SelectProps } from "@mantine/core";

import useGetAllMajorsOfInstitution from "@/features/major/services/use-get-all-majors-of-institution";
import { useGetCurrentUserFromCache } from "@/services/use-get-current-user";

const MajorSelect = (props: Omit<SelectProps, "data">) => {
  const user = useGetCurrentUserFromCache();
  const majors = useGetAllMajorsOfInstitution({
    path: { institution_id: user?.state.data?.data.institutionId || "" },
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
