import { Button, Container, Group, Paper, Stack, Text, Title } from "@mantine/core";
import { IconCalendarEvent } from "@tabler/icons-react";

import useRedirect from "@/common/hooks/use-redirect";
// import { MRT_ColumnDef, MRT_Table } from "mantine-react-table";
import TextWithIcon from "@/common/ui/text-width-icon";

// const data: CourseModel[] = generateFilledArray(1, (_, index) => ({
//   index: index.toString(),
//   ...generateCourse({ type: ClassType.GROUP }),
// }));

// const columns: MRT_ColumnDef<Partial<CourseModel & { index: number }>>[] = [
//   {
//     accessorKey: "index", //simple recommended way to define a column
//     header: "#",
//   },
//   {
//     header: "Thời gian",
//     accessorFn: (dataRow) => getClassTime(dataRow.time?.[0]),
//   },
//   {
//     accessorKey: "type", //simple recommended way to define a column
//     header: "Hình thức",
//   },
//   {
//     accessorKey: "location", //simple recommended way to define a column
//     header: "Địa điểm",
//   },
// ];

export default function ModifyTAPrivateClass() {
  const { onRedirectWithState } = useRedirect();
  // const table = useTable({
  //   columns,
  //   data,
  // });

  return (
    <Container my="lg">
      <Paper p="lg" shadow="lg">
        <Stack>
          <Title
            order={3}
            my="md"
            weight="bold"
            className="w-full"
            align="center"
            transform="uppercase"
          >
            Chỉnh sửa thông tin nhóm riêng
          </Title>
          {/* <MRT_Table table={table} /> */}
          <TextWithIcon
            spacing={4}
            leftIcon={<IconCalendarEvent size={16} className="text-oc-blue-6" />}
          >
            <Text color="blue">Xem lại lịch dạy của bạn</Text>
          </TextWithIcon>
          <Group position="right" mt="1rem">
            <Button variant="outline">Huỷ chỉnh sửa</Button>
            <Button onClick={onRedirectWithState("/payment")}>Gửi yêu cầu</Button>
          </Group>
        </Stack>
      </Paper>
    </Container>
  );
}
