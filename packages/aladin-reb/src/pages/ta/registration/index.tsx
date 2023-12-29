import { generatePath } from "react-router-dom";
import {
  ActionIcon,
  Badge,
  Flex,
  Menu,
  Pagination,
  rem,
  Stack,
  Text,
  TextInput,
  useMantineTheme,
} from "@mantine/core";
import { IconDots, IconEdit, IconSearch } from "@tabler/icons-react";
import { DataTable, DataTableColumn } from "mantine-datatable";

import useRedirect from "@/common/hooks/use-redirect";
import TableIndex from "@/common/ui/table-index";
import { TA_REGISTRATION_PAGE_SIZE } from "@/configs/page-size";
import { TeachingAssistant } from "@/domains/ta";
import useGetAllTARegistration from "@/features/ta/services/use-get-all-ta-registration";
import RippleActionIcon from "@/modules/mantine-ripple/components/ripple-action-icon";

const TA_PAGINATION_SIZE = 20;

const columns: DataTableColumn<TeachingAssistant>[] = [
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
    accessor: "status",
    title: "Trạng thái",
    width: "20%",
    textAlignment: "center",
    render: ({ status, statusColor }) => <Badge color={statusColor}>{status}</Badge>,
  },
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

export default function TARegistrationListPage() {
  const theme = useMantineTheme();

  const { redirectWithState } = useRedirect();

  const {
    data: tas,
    isFetching,
    range,
    pagination,
  } = useGetAllTARegistration({
    size: TA_REGISTRATION_PAGE_SIZE,
    page: 0,
    sort: ["status"],
  });

  return (
    <Stack className="flex h-0 w-full flex-1">
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
          // rowExpansion={{
          //   allowMultiple: true,
          //   content: ({ record }) => record.userId && <StudentDetail user_id={record.userId} />,
          // }}
          onRowClick={(record) =>
            redirectWithState(
              generatePath(`/admin/lecture/registration/:taId`, {
                taId: `${record.userId}`,
              }),
            )
          }
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
    </Stack>
  );
}
