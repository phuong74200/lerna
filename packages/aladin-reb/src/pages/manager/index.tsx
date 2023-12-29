import { Flex, Pagination, Stack, Text, TextInput, useMantineTheme } from "@mantine/core";
import { IconPlus, IconSearch } from "@tabler/icons-react";
import { DataTable, DataTableColumn } from "mantine-datatable";

import useRedirect from "@/common/hooks/use-redirect";
import TableIndex from "@/common/ui/table-index";
import { Manager } from "@/domains/manager";
import useGetAllManager from "@/features/manager/services/use-get-all-manager";
import RippleButton from "@/modules/mantine-ripple/components/ripple-button";

const MANAGER_PAGE_SIZE = 20;

const columns: DataTableColumn<Manager>[] = [
  {
    accessor: "index",
    title: "STT",
    textAlignment: "center",
    render: (_, index) => <TableIndex index={index} pageSize={MANAGER_PAGE_SIZE} />,
    width: "5%",
  },
  { accessor: "fullName", title: "Tên nhân sự", width: "20%" },
  { accessor: "phoneNumber", textAlignment: "center", title: "Số điện thoại", width: "20%" },
  { accessor: "position", title: "Chức vụ", width: "20%" },
  { accessor: "email", title: "Email", width: "20%" },
  {
    accessor: "actions",
    title: "Tác vụ",
    width: "10%",
    textAlignment: "center",
  },
];

export default function ListManagerPage() {
  const theme = useMantineTheme();
  const { redirect, onRedirectWithState } = useRedirect();

  const { data, pagination, isFetching, range } = useGetAllManager(MANAGER_PAGE_SIZE);

  return (
    <Stack className="flex h-0 w-full flex-1">
      <Flex justify="space-between" align="center">
        <TextInput
          variant="filled"
          icon={<IconSearch size={theme.fontSizes.md} />}
          placeholder="Tìm kiếm"
        />
        <RippleButton
          onClick={onRedirectWithState("/admin/mod/create")}
          leftIcon={<IconPlus size={theme.fontSizes.md} />}
        >
          Tạo tài khoản
        </RippleButton>
      </Flex>
      <DataTable
        withBorder
        borderRadius="md"
        fontSize="md"
        withColumnBorders
        striped
        highlightOnHover
        records={data?.list.toArray()}
        fetching={isFetching}
        verticalSpacing="sm"
        noRecordsText="Không có dữ liệu"
        columns={columns}
        onRowClick={() => redirect("/")}
        idAccessor="institutionId"
      />
      <Flex justify="space-between" align="center">
        <Text size="sm">
          <b>
            {range[0]} đến {range[1]}
          </b>{" "}
          của {data?.totalPages}
        </Text>
        <Pagination total={50} onChange={pagination.setPage} value={pagination.active} />
      </Flex>
    </Stack>
  );
}
