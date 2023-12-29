import { useQuery } from "@tanstack/react-query";

import { queryKeys } from "@/api";
import useQueryPagination from "@/common/hooks/use-query-pagination";
import { TeachingAssistantList } from "@/domains/ta-list";

export default function useGetAllTARegistration({
  page,
  size,
  sort = undefined,
}: {
  page: number;
  size: number;
  sort?: string[];
}) {
  const { pagination, range } = useQueryPagination({
    pageSizes: size,
    total: 50,
    active: page,
  });

  const query = useQuery({
    ...queryKeys.ta.registrations(pagination.active - 1, size, sort),
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
