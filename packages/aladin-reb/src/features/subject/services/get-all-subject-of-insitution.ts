import { useQuery } from "@tanstack/react-query";

import { queryKeys } from "@/api";
import { operations } from "@/api/v1";
import useQueryPagination from "@/common/hooks/use-query-pagination";
import { SubjectList } from "@/domains/subject-list";

export default function useGetAllSubjectOfInstitution(
  params: operations["getAllSubjectsOfInstitution"]["parameters"],
) {
  const { pagination, range } = useQueryPagination({
    pageSizes: params.query?.size,
    total: 50,
  });

  const query = useQuery({
    ...queryKeys.subject.getAllSubjectsOfInstitution({
      ...params,
      query: {
        ...params.query,
        page: pagination.active - 1,
        sort: ["name"],
      },
    }),
    select: (data) => new SubjectList(data),
  });

  return {
    ...query,
    pagination,
    range,
  };
}
