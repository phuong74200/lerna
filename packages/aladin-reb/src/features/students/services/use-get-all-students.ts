import { useQuery } from "@tanstack/react-query";

import { queryKeys } from "@/api";
import useQueryPagination from "@/common/hooks/use-query-pagination";
import { StudentList } from "@/domains/student-list";

export default function useGetAllStudents(size = 10) {
  const { pagination, range } = useQueryPagination({
    pageSizes: size,
    total: 50,
  });

  const query = useQuery({
    ...queryKeys.student.all(pagination.active - 1, size),
    select: (data) => ({
      ...data,
      list: new StudentList(data.list || []),
    }),
  });

  return {
    ...query,
    pagination,
    range,
  };
}
