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
//     accessorKey: "type", //simple recommended way to define a column
//     header: "Phân loại",
//   },
//   {
//     accessorKey: "location", //simple recommended way to define a column
//     header: "Địa điểm",
//   },
//   {
//     header: "Thời gian",
//     accessorFn: (dataRow) =>
//       dataRow.time?.map((item) => <Text key={item[0].getTime()}>{getClassTime(item)}</Text>),
//   },
//   {
//     header: "Tiền nhận",
//     accessorFn: (dataRow) => <Text>{toVND(dataRow.price)}</Text>,
//   },
// ];

export default function ListTAHistory() {
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
