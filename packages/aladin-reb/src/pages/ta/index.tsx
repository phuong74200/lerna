import {
  ActionIcon,
  Container,
  Flex,
  Menu,
  MultiSelect,
  Pagination,
  rem,
  Stack,
  Text,
  TextInput,
  useMantineTheme,
} from "@mantine/core";
import { IconDots, IconEdit, IconSearch } from "@tabler/icons-react";
import { DataTable, DataTableColumn } from "mantine-datatable";

import TableIndex from "@/components/table-index";
import { Student } from "@/domains/student";
import StudentDetail from "@/features/students/components/student-detail";
import useGetAllTA from "@/features/ta/services/use-get-all-ta";
import useGetAllInstitution from "@/features/university/services/use-get-all-institution";
import RippleActionIcon from "@/modules/mantine-ripple/components/ripple-action-icon";

const TA_PAGINATION_SIZE = 20;

const columns: DataTableColumn<Student>[] = [
  {
    accessor: "index",
    title: "STT",
    textAlignment: "center",
    render: (_, index) => <TableIndex index={index} pageSize={TA_PAGINATION_SIZE} />,
    width: "5%",
  },
  { accessor: "fullName", title: "Tên trợ giảng", width: "20%" },
  { accessor: "institutionName", title: "Tên trường", width: "20%" },
  { accessor: "phoneNumber", textAlignment: "center", title: "Số điện thoại", width: "20%" },
  { accessor: "email", title: "Email", width: "20%" },
  {
    accessor: "actions",
    title: "Tác vụ",
    width: "10%",
    textAlignment: "center",
    // render: ({ userId }) => (
    //   <Group noWrap className="justify-center">
    //     <NavigateButton to={`ban/${userId}`} Icon={IconBan} />
    //   </Group>
    // ),
  },
];

export default function TAListPage() {
  const theme = useMantineTheme();

  const { data: tas, isFetching, range, pagination } = useGetAllTA(TA_PAGINATION_SIZE);
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
          records={tas?.list.toArray() || []}
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
            của {0}
          </Text>
          <Pagination total={50} onChange={pagination.setPage} value={pagination.active} />
        </Flex>
      </Stack>
    </Container>
  );
}
