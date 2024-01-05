import { DataTable, DataTableProps } from "mantine-datatable";

import { Domain } from "@/interfaces/domain";
import { DomainList } from "@/interfaces/domain-list";

type Props<T extends Domain> = DataTableProps<T> & {
  list: DomainList<T> | undefined;
};

export default function PaginateTable<T extends Domain>({ ...tableProps }: Props<T>) {
  return (
    <>
      <DataTable
        withBorder
        borderRadius="md"
        fontSize="md"
        withColumnBorders
        striped
        highlightOnHover
        verticalSpacing="sm"
        noRecordsText="Không có dữ liệu"
        {...tableProps}
      />
    </>
  );
}

// type EProps = ReturnType<typeof useQueryPagination> & {
//   total: number | undefined;
// };

// export function PaginationCounter({ pagination, range }: EProps) {
//   return (
//     <Flex justify="space-between" align="center">
//       <Text size="sm">
//         <b>
//           {range[0]} đến {range[1]}
//         </b>{" "}
//         của {major?.totalElements}
//       </Text>
//       <Pagination
//         total={major?.totalPages || 0}
//         onChange={pagination.setPage}
//         value={pagination.active}
//       />
//     </Flex>
//   );
// }
