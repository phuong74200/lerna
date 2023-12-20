import { Button, NumberInput, Stack, TextInput } from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";
import { DataTable, DataTableColumn } from "mantine-datatable";
import { uid } from "uid";

import MajorSelect from "@/common/ui/major-select";
import SubjectSelect from "@/common/ui/subject-select";
import { ACTION_ICON_SIZE } from "@/configs/icon";
import { Column, useFormContext } from "@/features/register/contexts/ta-step-2";
import RippleActionIcon from "@/modules/mantine-ripple/components/ripple-action-icon";

const LinkResource = ({ index }: { index: number }) => {
  const form = useFormContext();
  return <TextInput variant="unstyled" {...form.getInputProps(`list.${index}.linkResource`)} />;
};

const Major = ({ index }: { index: number }) => {
  const form = useFormContext();

  return <MajorSelect {...form.getInputProps(`list.${index}.major_id`)} />;
};

const Subject = ({ index }: { index: number }) => {
  const form = useFormContext();

  return (
    <SubjectSelect
      major_id={form.values.list[index].major_id}
      disabled={!form.values.list[index].major_id}
      {...form.getInputProps(`list.${index}.subjectId`)}
    />
  );
};

const GPA = ({ index }: { index: number }) => {
  const form = useFormContext();
  return (
    <NumberInput
      min={0}
      max={10}
      step={0.1}
      precision={1}
      classNames={{
        input: "text-center",
      }}
      variant="unstyled"
      {...form.getInputProps(`list.${index}.gpa`)}
    />
  );
};

const TrashButton = ({ index }: { index: number }) => {
  const form = useFormContext();

  return (
    <RippleActionIcon
      className="mx-auto"
      color="blue"
      variant="filled"
      onClick={() => {
        form.setFieldValue(
          "list",
          form.values.list.filter((_, i) => i !== index),
        );
      }}
    >
      <IconTrash size={ACTION_ICON_SIZE} fill="currentColor" />
    </RippleActionIcon>
  );
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
    render: (_, index) => <TrashButton index={index} />,
  },
];

export default function TACourseTable() {
  const form = useFormContext();

  const handleAppend = () => {
    form.setFieldValue("list", [
      ...form.values.list,
      {
        gpa: 0,
        linkResource: "string",
        subjectId: 0,
        major_id: 0,
        id: uid(),
      },
    ]);
  };

  return (
    <Stack>
      <DataTable
        minHeight={150}
        withBorder
        borderRadius="md"
        fontSize="md"
        withColumnBorders
        striped
        highlightOnHover
        records={form.values.list}
        verticalSpacing="sm"
        noRecordsText="Không có dữ liệu"
        columns={columns}
      />
      <Button onClick={handleAppend}>Thêm môn trợ giảng</Button>
    </Stack>
  );
}
