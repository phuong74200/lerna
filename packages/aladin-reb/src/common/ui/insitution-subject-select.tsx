import { Select, SelectProps } from "@mantine/core";

import useGetAllMajorsOfInstitution from "@/features/major/services/use-get-all-majors-of-institution";

const InsitutionSubjectSelect = ({
  institution_id,
  ...props
}: Omit<SelectProps, "data"> & {
  institution_id: string;
}) => {
  const { data: subjects } = useGetAllMajorsOfInstitution({
    path: {
      institution_id: institution_id || "",
    },
  });

  return (
    <Select
      withinPortal
      variant="filled"
      placeholder="Môn học"
      data={subjects?.toSelectList() || []}
      {...props}
    />
  );
};

export default InsitutionSubjectSelect;
