import { Select, SelectProps } from "@mantine/core";

import useGetAllSubjectOfMajor from "@/features/subject/services/get-all-subject-of-major";

const SubjectSelect = ({
  major_id,
  ...props
}: Omit<SelectProps, "data"> & {
  major_id: number;
}) => {
  const subjects = useGetAllSubjectOfMajor({
    path: {
      major_id,
    },
  });

  return (
    <Select
      withinPortal
      variant="filled"
      placeholder="Môn học"
      data={subjects.data?.list.toSelectList() || []}
      {...props}
    />
  );
};

export default SubjectSelect;
