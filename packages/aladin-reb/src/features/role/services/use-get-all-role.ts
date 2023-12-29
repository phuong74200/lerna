import { useQuery } from "@tanstack/react-query";

import { queryKeys } from "@/api";
import { operations } from "@/api/v1";
import useQueryPagination from "@/common/hooks/use-query-pagination";
import { RoleList } from "@/domains/role-list";

export default function useGetAllRoles(params: operations["getAllRole"]["parameters"]) {
  const { pagination, range } = useQueryPagination({
    pageSizes: params.query?.size,
    total: 10,
  });

  const query = useQuery({
    ...queryKeys.role.all(params.query?.page, params.query?.size),
    select: (data) => {
      if (data) return new RoleList(data);
    },
  });

  return {
    ...query,
    pagination,
    range,
  };
}
