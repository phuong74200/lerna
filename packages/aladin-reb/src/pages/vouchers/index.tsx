import {
  Container,
  Flex,
  Pagination,
  Stack,
  Text,
  TextInput,
  useMantineTheme,
} from "@mantine/core";
import { IconPencil, IconPlus, IconSearch } from "@tabler/icons-react";
import { DataTable, DataTableColumn } from "mantine-datatable";

import NavigateButton from "@/components/navigate-btn";
import TableIndex from "@/components/table-index";
import { ACTION_ICON_SIZE } from "@/configs/icon";
import { Voucher } from "@/domains/voucher";
import useGetAllVoucher from "@/features/voucher/services/use-get-all-voucher";
import useRedirect from "@/hooks/use-redirect";
import RippleButton from "@/modules/mantine-ripple/components/ripple-button";

const VOUCHER_PAGE_SIZE = 20;

const columns: DataTableColumn<Voucher>[] = [
  {
    accessor: "index",
    title: "STT",
    textAlignment: "center",
    render: (_, index) => <TableIndex index={index} pageSize={VOUCHER_PAGE_SIZE} />,
    width: "8%",
  },
  { accessor: "voucherId", title: "Mã", width: "20%" },
  {
    accessor: "displayValue",
    title: "Giá trị",
    textAlignment: "center",
    width: "10%",
  },
  {
    accessor: "validFrom",
    title: "Bắt đầu",
    textAlignment: "center",
    width: "10%",
  },
  {
    accessor: "validThru",
    title: "Kết thúc",
    textAlignment: "center",
    width: "10%",
  },
  {
    accessor: "totalQuantity",
    title: "Số lượng",
    textAlignment: "center",
    width: "10%",
  },
  {
    accessor: "usedQuantity",
    title: "Đã dùng",
    textAlignment: "center",
    width: "10%",
  },
  {
    accessor: "actions",
    title: "Tác vụ",
    width: "10%",
    textAlignment: "center",
    render: ({ voucherId }) => (
      <NavigateButton color="blue" mx="auto" to={`update/${voucherId}`}>
        <IconPencil size={ACTION_ICON_SIZE} fill="currentColor" />
      </NavigateButton>
    ),
  },
];

export default function ListVoucherPage() {
  const theme = useMantineTheme();
  const { onRedirectWithState } = useRedirect();

  const { data, pagination, isFetching, range } = useGetAllVoucher(VOUCHER_PAGE_SIZE);

  return (
    <Container my="lg" size="xl" className="flex h-0 w-full flex-1">
      <Stack className="flex-1">
        <Flex justify="space-between" align="center">
          <TextInput
            variant="filled"
            icon={<IconSearch size={theme.fontSizes.md} />}
            placeholder="Tìm kiếm"
          />
          <RippleButton
            onClick={onRedirectWithState("create")}
            leftIcon={<IconPlus size={theme.fontSizes.md} />}
          >
            Tạo voucher
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
          idAccessor="voucherId"
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
    </Container>
  );
}
