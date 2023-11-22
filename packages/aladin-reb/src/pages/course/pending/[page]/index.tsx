import { Container } from "@mantine/core";

// import { MantineReactTable, MRT_ColumnDef } from "mantine-react-table";

// const courses = generateFilledArray(10, () => generateCourse({ maxTime: 5 })).map((item) => ({
//   ...item,
//   id: item.id.split("-")[0],
// }));

// const columns: MRT_ColumnDef<Partial<CourseModel & { index: number }>>[] = [
//   {
//     accessorKey: "index", //simple recommended way to define a column
//     header: "STT",
//   },
//   {
//     accessorKey: "name", //simple recommended way to define a column
//     header: "Tên môn học",
//   },
//   {
//     accessorKey: "Khoa", //simple recommended way to define a column
//     header: "",
//   },
//   {
//     accessorKey: "type", //simple recommended way to define a column
//     header: "Khoa",
//   },
//   {
//     header: "Tài liệu",
//     accessorFn: () => <Anchor>Xem tài liệu</Anchor>,
//   },
//   {
//     accessorKey: "createdAt",
//     header: "Ngày đăng ký",
//   },
// ];

export default function ListPendingCourse() {
  // const table = useTable({
  //   columns,
  //   data: courses,
  // });

  return (
    <Container mt="lg" size="xl">
      <h1>Filter</h1>
      {/* <MantineReactTable table={table} /> */}
    </Container>
  );
}
