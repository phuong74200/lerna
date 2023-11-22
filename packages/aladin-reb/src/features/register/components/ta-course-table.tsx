import { Button, Group, Select, Stack, TextInput } from "@mantine/core";
import { createFormContext } from "@mantine/form";
import { IconTrash } from "@tabler/icons-react";
import { DataTable, DataTableColumn } from "mantine-datatable";

import { components } from "@/api/v1";
import { ACTION_ICON_SIZE } from "@/configs/icon";
import useGetAllMajorsOfInstitution from "@/features/major/services/use-get-all-majors-of-institution";
import useGetAllSubjectOfMajor from "@/features/subject/services/get-all-subject-of-major";
import RippleActionIcon from "@/modules/mantine-ripple/components/ripple-action-icon";
import { useGetCurrentUserFromCache } from "@/services/use-get-current-user";
import logger from "@/utils/dev-log";

type Column = components["schemas"]["RegisterTARequest"]["subjectRegisters"][number] & {
  major_id: number;
};

const [FormProvider, useFormContext, useForm] = createFormContext<Column[]>();

const LinkResource = ({ index }: { index: number }) => {
  const form = useFormContext();
  return <TextInput variant="unstyled" {...form.getInputProps(`${index}.linkResource`)} />;
};

const Major = ({ index }: { index: number }) => {
  const user = useGetCurrentUserFromCache();
  const majors = useGetAllMajorsOfInstitution({
    path: { institution_id: user?.state.data?.data.institutionId || "" },
  });
  const form = useFormContext();

  return (
    <Select
      variant="unstyled"
      data={majors.data?.toSelectList() || []}
      {...form.getInputProps(`${index}.linkResource`)}
    />
  );
};

const Subject = ({ index }: { index: number }) => {
  const form = useFormContext();

  const subjects = useGetAllSubjectOfMajor({
    path: { major_id: form.values[index].major_id },
  });

  return (
    <Select
      variant="unstyled"
      disabled={!form.values[index].major_id}
      data={subjects.data?.list.toSelectList() || []}
      {...form.getInputProps(`${index}.linkResource`)}
    />
  );
};

const GPA = ({ index }: { index: number }) => {
  const form = useFormContext();

  return <TextInput variant="unstyled" {...form.getInputProps(`${index}.gpa`)} />;
};

const columns: DataTableColumn<Column>[] = [
  {
    accessor: "major",
    title: "Khoa",
    textAlignment: "center",
    width: "20%",
    render: (_, index) => <Major index={index} />,
  },
  {
    accessor: "subjectId",
    title: "Tên môn học",
    textAlignment: "center",
    width: "20%",
    render: (_, index) => <Subject index={index} />,
  },
  {
    accessor: "gpa",
    title: "Điểm GPA",
    width: "20%",
    textAlignment: "center",
    render: (_, index) => <GPA index={index} />,
  },
  {
    accessor: "linkResource",
    title: "Tài liệu dạy môn",
    width: "20%",
    textAlignment: "center",
    render: (_, index) => <LinkResource index={index} />,
  },
  {
    accessor: "actions",
    title: "Tác vụ",
    width: "10%",
    textAlignment: "center",
    render: () => (
      <>
        <Group>
          <RippleActionIcon className="mx-auto" color="blue" variant="filled">
            <IconTrash size={ACTION_ICON_SIZE} fill="currentColor" />
          </RippleActionIcon>
        </Group>
      </>
    ),
  },
];

export default function TACourseTable() {
  const form = useForm({
    initialValues: [
      {
        gpa: 1,
        linkResource: "string",
        subjectId: 0,
        major_id: 0,
      },
    ],
  });

  const handleAppend = () => {
    form.setValues((current) => {
      logger.log("xxxxxxxxxxxx", current);

      return current;
    });
  };

  logger.log(form.values);

  return (
    <Stack>
      <FormProvider form={form}>
        <DataTable
          minHeight={150}
          withBorder
          borderRadius="md"
          fontSize="md"
          withColumnBorders
          striped
          highlightOnHover
          records={form.values}
          verticalSpacing="sm"
          noRecordsText="Không có dữ liệu"
          columns={columns}
        />
      </FormProvider>
      <Button onClick={handleAppend}>Thêm môn trợ giảng</Button>
    </Stack>
  );
}
