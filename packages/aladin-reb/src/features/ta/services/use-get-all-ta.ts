import { useQuery } from "@tanstack/react-query";

import { queryKeys } from "@/api";
import useQueryPagination from "@/common/hooks/use-query-pagination";
import { TeachingAssistantList } from "@/domains/ta-list";

export default function useGetAllTA(size = 10) {
  const { pagination, range } = useQueryPagination({
    pageSizes: size,
    total: 50,
  });

  const query = useQuery({
    ...queryKeys.ta.all(pagination.active - 1, size),
    select: (data) => ({
      ...data,
      list: new TeachingAssistantList(data.list || []),
    }),
  });

  return {
    ...query,
    pagination,
    range,
  };
}
