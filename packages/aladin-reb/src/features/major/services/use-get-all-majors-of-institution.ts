import { useQuery } from "@tanstack/react-query";

import { queryKeys } from "@/api";
import { operations } from "@/api/v1";
import useQueryPagination from "@/common/hooks/use-query-pagination";
import { MajorList } from "@/domains/major-list";

export default function useGetAllMajorsOfInstitution(
  params: operations["getAllMajorsOfInstitution"]["parameters"],
) {
  const { pagination, range } = useQueryPagination({
    pageSizes: params.query?.size,
    total: 10,
  });

  const query = useQuery({
    ...queryKeys.major.getAllMajorsOfInstitution({
      ...params,
      query: {
        ...params.query,
        page: pagination.active - 1,
      },
    }),
    select: ({ data }) => {
      if (data) return new MajorList(data);
    },
  });

  return {
    ...query,
    pagination,
    range,
  };
}
