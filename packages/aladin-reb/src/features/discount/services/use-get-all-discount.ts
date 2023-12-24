import { useQuery } from "@tanstack/react-query";

import { queryKeys } from "@/api";
import useQueryPagination from "@/common/hooks/use-query-pagination";
import { DiscountList } from "@/domains/discount-list";

export default function useGetAllDiscount(size = 10) {
  const { pagination, range } = useQueryPagination({
    pageSizes: size,
    total: 50,
  });

  const query = useQuery({
    ...queryKeys.discount.all(pagination.active - 1, size),
    select: (data) => ({
      ...data,
      list: new DiscountList(data.list || []),
    }),
  });

  return {
    ...query,
    pagination,
    range,
  };
}
