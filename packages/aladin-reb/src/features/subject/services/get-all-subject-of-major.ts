import { useQuery } from "@tanstack/react-query";

import { queryKeys } from "@/api";
import { operations } from "@/api/v1";
import { SubjectList } from "@/domains/subject-list";
import useQueryPagination from "@/hooks/use-query-pagination";

export default function useGetAllSubjectOfMajor(
  params: operations["getAllSubjectsOfMajor"]["parameters"],
) {
  const { pagination, range } = useQueryPagination({
    pageSizes: params.query?.size,
    total: 50,
  });

  const query = useQuery({
    ...queryKeys.subject.getAllSubjectsOfMajor({
      ...params,
      query: {
        ...params.query,
        page: pagination.active - 1,
        sort: ["name"],
      },
    }),
    select: (data) => ({
      ...data?.data,
      list: new SubjectList(data?.data?.list || []),
    }),
  });

  return {
    ...query,
    pagination,
    range,
  };
}
