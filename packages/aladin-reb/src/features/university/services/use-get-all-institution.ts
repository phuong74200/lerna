import { useQuery } from "@tanstack/react-query";

import { queryKeys } from "@/api";
import useQueryPagination from "@/common/hooks/use-query-pagination";
import { InsitutionList } from "@/domains/institution-list";

export default function useGetAllInstitution(size = 10) {
  const { pagination, range } = useQueryPagination({
    pageSizes: size,
    total: 50,
  });

  const query = useQuery({
    ...queryKeys.institution.all(pagination.active - 1, size),
    select: (data) => ({
      ...data?.data,
      list: new InsitutionList(data.data?.list || []),
    }),
  });

  return {
    ...query,
    pagination,
    range,
  };
}
