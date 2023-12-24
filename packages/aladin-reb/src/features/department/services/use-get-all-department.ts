import { useQuery } from "@tanstack/react-query";

import { queryKeys } from "@/api";
import useQueryPagination from "@/common/hooks/use-query-pagination";
import { DepartmentList } from "@/domains/department-list";

export default function useGetAllDepartment(size = 10) {
  const { pagination, range } = useQueryPagination({
    pageSizes: size,
    total: 50,
  });

  const query = useQuery({
    ...queryKeys.department.all(pagination.active - 1, size),
    select: (data) => ({
      ...data,
      list: new DepartmentList(data?.list || []),
    }),
  });

  return {
    ...query,
    pagination,
    range,
  };
}
