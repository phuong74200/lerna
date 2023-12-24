import {
  ActionIcon,
  Container,
  Flex,
  Group,
  Menu,
  MultiSelect,
  Pagination,
  rem,
  Stack,
  Text,
  TextInput,
  useMantineTheme,
} from "@mantine/core";
import { IconBan, IconDots, IconEdit, IconSearch, IconTrash } from "@tabler/icons-react";
import { DataTable, DataTableColumn } from "mantine-datatable";

import NavigateButton from "@/common/ui/navigate-btn";
import TableIndex from "@/common/ui/table-index";
import { FeatureFlag, FLAGS } from "@/configs/feature-flag";
import { ACTION_ICON_SIZE } from "@/configs/icon";
import { Student } from "@/domains/student";
import StudentDetail from "@/features/students/components/student-detail";
import useGetAllStudents from "@/features/students/services/use-get-all-students";
import useGetAllInstitution from "@/features/university/services/use-get-all-institution";
import RippleActionIcon from "@/modules/mantine-ripple/components/ripple-action-icon";

const STUDENT_PAGINATION_SIZE = 20;

const columns: DataTableColumn<Student>[] = [
  {
    accessor: "index",
    title: "STT",
    textAlignment: "center",
    render: (_, index) => <TableIndex index={index} pageSize={STUDENT_PAGINATION_SIZE} />,
    width: "5%",
  },
  { accessor: "fullName", title: "Tên sinh viên", width: "20%" },
  { accessor: "institutionName", title: "Tên trường", width: "20%" },
  { accessor: "phoneNumber", textAlignment: "center", title: "Số điện thoại", width: "20%" },
  { accessor: "email", title: "Email", width: "20%" },
  {
    accessor: "actions",
    title: "Tác vụ",
    width: "10%",
    textAlignment: "center",
    render: ({ userId }) => (
      <Group noWrap className="justify-center" spacing="sm">
        <NavigateButton to={`ban/${userId}`} label="Cấm tài khoản" color="orange">
          <IconBan size={ACTION_ICON_SIZE} />
        </NavigateButton>
        <FeatureFlag feature={FLAGS.DANGEROUS_ACTION}>
          <NavigateButton to={`delete/${userId}`} label="Xoá tài khoản" color="red">
            <IconTrash size={ACTION_ICON_SIZE} />
          </NavigateButton>
        </FeatureFlag>
      </Group>
    ),
  },
];

export default function StudentListPage() {
  const theme = useMantineTheme();

  const {
    data: students,
    isFetching,
    range,
    pagination,
  } = useGetAllStudents(STUDENT_PAGINATION_SIZE);
  const institutions = useGetAllInstitution();

  return (
    <Container my="lg" size="xl" className="flex h-0 w-full flex-1">
      <div className="absolute right-2 top-2">
        <Menu width={200} shadow="md">
          <Menu.Target>
            <ActionIcon>
              <IconDots size="1.125rem" />
            </ActionIcon>
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Item icon={<IconEdit size={rem(14)} />}>Chỉnh sửa thông tin</Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </div>
      <Stack className="flex-1">
        <Flex className="w-full items-start justify-between" gap="sm">
          <Flex gap="sm" align="start" className="w-full">
            <TextInput
              variant="filled"
              icon={<IconSearch size={theme.fontSizes.md} />}
              placeholder="Tìm kiếm"
            />
            <MultiSelect
              data={institutions.data?.list.toSelectList() || []}
              className="min-w-[200px]"
              placeholder="Tất cả trường"
            />
          </Flex>
          <Flex gap="sm">
            <RippleActionIcon variant="filled" color="blue">
              <IconDots size={theme.fontSizes.lg} />
            </RippleActionIcon>
          </Flex>
        </Flex>
        <DataTable
          withBorder
          borderRadius="md"
          fontSize="md"
          withColumnBorders
          striped
          highlightOnHover
          records={students?.list.toArray() || []}
          fetching={isFetching}
          verticalSpacing="sm"
          noRecordsText="Không có dữ liệu"
          columns={columns}
          rowExpansion={{
            allowMultiple: true,
            content: ({ record }) => record.userId && <StudentDetail user_id={record.userId} />,
          }}
          idAccessor="userId"
        />
        <Flex justify="space-between" align="center">
          <Text size="sm">
            <b>
              {range[0]} đến {range[1]}
            </b>{" "}
            của {students?.pageNumber}
          </Text>
          <Pagination total={50} onChange={pagination.setPage} value={pagination.active} />
        </Flex>
      </Stack>
    </Container>
  );
}
