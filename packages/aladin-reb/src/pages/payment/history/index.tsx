import { Outlet } from "react-router-dom";
import { Button, Container, Group, Paper, TextInput } from "@mantine/core";

// import { MantineReactTable, MRT_ColumnDef, MRT_RowSelectionState } from "mantine-react-table";

// const courses = generateFilledArray(10, () => generateCourse({ maxTime: 5 })).map((item) => ({
//   ...item,
//   id: item.id.split("-")[0],
// }));

// const columns: MRT_ColumnDef<Partial<CourseModel & { index: number }>>[] = [
//   {
//     accessorKey: "index", //simple recommended way to define a column
//     header: "#",
//   },
//   {
//     accessorKey: "id", //simple recommended way to define a column
//     header: "ID",
//   },
//   {
//     accessorKey: "name", //simple recommended way to define a column
//     header: "Tên môn học",
//   },
//   {
//     accessorKey: "status", //simple recommended way to define a column
//     header: "Trạng thái",
//   },
//   {
//     accessorKey: "type", //simple recommended way to define a column
//     header: "Phân loại",
//   },
//   {
//     accessorKey: "location",
//     header: "Địa điểm",
//   },
//   {
//     header: "Trợ giảng",
//     accessorFn: (dataRow) => dataRow.lecture?.name,
//   },
//   {
//     header: "Thời gian",
//     accessorFn: (dataRow) =>
//       dataRow.time?.map((item) => <Text key={item[0].getTime()}>{getClassTime(item)}</Text>),
//   },
//   {
//     header: "Giá",
//     accessorFn: (dataRow) => toVND(dataRow.price),
//   },
// ];

export default function PaymentHistory() {
  // const [rowSelection, setRowSelection] = useState<MRT_RowSelectionState>({});

  // const table = useTable({
  //   columns,
  //   data: courses,
  //   enableRowSelection: true,
  //   getRowId: (row) => row.id,
  //   onRowSelectionChange: setRowSelection,
  //   state: { rowSelection },
  // });

  return (
    <>
      <Outlet />
      <Container mt="lg" size="xl">
        <Paper p="lg">
          <Group mb="md" position="apart">
            <Group>
              <Button radius="sm" variant="light">
                Chưa thanh toán
              </Button>
              <Button radius="sm" variant="outline">
                Đã thanh toán
              </Button>
              <Button radius="sm" variant="outline">
                Huỷ
              </Button>
            </Group>
            <Group>
              <TextInput placeholder="Tìm kiếm nhóm/lớp" />
              <Button>Tìm kiếm</Button>
            </Group>
          </Group>
          {/* <MantineReactTable table={table} /> */}
        </Paper>
      </Container>
    </>
  );
}
