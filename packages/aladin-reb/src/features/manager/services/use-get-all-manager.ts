import { useQuery } from "@tanstack/react-query";

import { queryKeys } from "@/api";
import { ManagerList } from "@/domains/manager-list";
import useQueryPagination from "@/hooks/use-query-pagination";

export default function useGetAllManager(size = 10) {
  const { pagination, range } = useQueryPagination({
    pageSizes: size,
    total: 50,
  });

  const query = useQuery({
    ...queryKeys.manager.all(pagination.active - 1, size),
    select: (data) => ({
      ...data,
      list: new ManagerList(data?.list || []),
    }),
  });

  return {
    ...query,
    pagination,
    range,
  };
}
