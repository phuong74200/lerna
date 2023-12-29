import { Flex, Pagination, Stack, Text, TextInput, useMantineTheme } from "@mantine/core";
import { IconPlus, IconSearch } from "@tabler/icons-react";
import { DataTable, DataTableColumn } from "mantine-datatable";

import useRedirect from "@/common/hooks/use-redirect";
import TableIndex from "@/common/ui/table-index";
import { Discount } from "@/domains/discount";
import useGetAllDiscount from "@/features/discount/services/use-get-all-discount";
import RippleButton from "@/modules/mantine-ripple/components/ripple-button";

const DISCOUNT_PAGE_SIZE = 20;

const columns: DataTableColumn<Discount>[] = [
  {
    accessor: "index",
    title: "STT",
    textAlignment: "center",
    render: (_, index) => <TableIndex index={index} pageSize={DISCOUNT_PAGE_SIZE} />,
    width: "5%",
  },
  { accessor: "discountId", title: "ID", width: "20%" },
  { accessor: "displayValue", textAlignment: "center", title: "Giá trị", width: "20%" },
  { accessor: "validFrom", textAlignment: "center", title: "Ngày bắt đầu", width: "20%" },
  { accessor: "validThru", textAlignment: "center", title: "Ngày kết thúc", width: "20%" },
  {
    accessor: "actions",
    title: "Tác vụ",
    width: "10%",
    textAlignment: "center",
  },
];

export default function ListDiscountPage() {
  const theme = useMantineTheme();
  const { onRedirectWithState } = useRedirect();

  const { data, pagination, isFetching, range } = useGetAllDiscount(DISCOUNT_PAGE_SIZE);

  return (
    <Stack className="flex h-0 w-full flex-1">
      <Flex justify="space-between" align="center">
        <TextInput
          variant="filled"
          icon={<IconSearch size={theme.fontSizes.md} />}
          placeholder="Tìm kiếm"
        />
        <RippleButton
          onClick={onRedirectWithState("/admin/discount/create")}
          leftIcon={<IconPlus size={theme.fontSizes.md} />}
        >
          Tạo discount
        </RippleButton>
      </Flex>
      <DataTable
        withBorder
        borderRadius="md"
        fontSize="md"
        withColumnBorders
        striped
        highlightOnHover
        records={data?.list.toArray() || []}
        fetching={isFetching}
        verticalSpacing="sm"
        noRecordsText="Không có dữ liệu"
        columns={columns}
        idAccessor="id"
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
