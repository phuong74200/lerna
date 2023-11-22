import { useQuery } from "@tanstack/react-query";

import { queryKeys } from "@/api";
import { VoucherList } from "@/domains/voucher-list";
import useQueryPagination from "@/hooks/use-query-pagination";

export default function useGetAllVoucher(size = 10) {
  const { pagination, range } = useQueryPagination({
    pageSizes: size,
    total: 50,
  });

  const query = useQuery({
    ...queryKeys.voucher.all(pagination.active - 1, size),
    select: (data) => ({
      ...data,
      list: new VoucherList(data.list || []),
    }),
  });

  return {
    ...query,
    pagination,
    range,
  };
}
