import { Badge, Flex, Pagination, Stack, Text, useMantineTheme } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import { DataTable, DataTableColumn } from "mantine-datatable";

import { ROLE_PAGE_SIZE } from "@/configs/page-size";
import { Role } from "@/domains/role";
import useGetAllRoles from "@/features/role/services/use-get-all-role";
import RippleButton from "@/modules/mantine-ripple/components/ripple-button";

const columns: DataTableColumn<Role>[] = [
  {
    accessor: "name",
    title: "Name",
    width: "10%",
  },
  { accessor: "description", title: "Description", width: "20%" },
  {
    accessor: "permissions",
    title: "Permissions",
    render: ({ permissions }) => (
      <Flex gap="md" wrap="wrap">
        {permissions?.map((permission) => <Badge key={permission}>{permission}</Badge>)}
      </Flex>
    ),
  },
];

export default function ListRolePage() {
  const theme = useMantineTheme();

  const { data, range, pagination } = useGetAllRoles({
    query: {
      page: 0,
      size: ROLE_PAGE_SIZE,
    },
  });

  return (
    <Stack className="flex h-0 w-full flex-1">
      <Flex justify="space-between" align="center">
        <RippleButton leftIcon={<IconPlus size={theme.fontSizes.md} />}>Tạo quyền</RippleButton>
      </Flex>
      <DataTable
        minHeight={150}
        withBorder
        borderRadius="md"
        fontSize="md"
        withColumnBorders
        striped
        highlightOnHover
        records={data?.list || []}
        verticalSpacing="sm"
        noRecordsText="Không có dữ liệu"
        columns={columns}
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
