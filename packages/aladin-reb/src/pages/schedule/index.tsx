import {
  ActionIcon,
  Badge,
  Box,
  Button,
  Container,
  Group,
  List,
  Paper,
  Select,
  Stack,
  Table,
  Text,
} from "@mantine/core";
import { Calendar } from "@mantine/dates";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import dayjs from "dayjs";

import { generateCourse } from "@/utils/entity-generator";
import generateFilledArray from "@/utils/generate-filled-array";
import { formatDays } from "@/utils/get-class-time";

const schedule = generateFilledArray(10, () => generateCourse({ maxTime: 1 })).map((item) => ({
  ...item,
  id: item.id.split("-")[0],
}));

export default function Schedule() {
  return (
    <Container mt="lg" size="xl">
      <Paper p="lg">
        <div className="grid grid-flow-row-dense grid-cols-[auto,1fr] gap-16">
          <Stack>
            <Calendar placeholder="" w="fit-content" />
            <Text weight="bold">Nhãn dán</Text>
            <List
              spacing="xs"
              size="sm"
              maw={200}
              center
              icon={<Box bg="orange" p={10} className="rounded-full" />}
            >
              <List.Item>Fundamentals of Financial Management</List.Item>
            </List>
            <List
              spacing="xs"
              size="sm"
              center
              maw={200}
              icon={<Box bg="yellow" p={10} className="rounded-full" />}
            >
              <List.Item>Fundamentals of Financial Management</List.Item>
            </List>
            <List
              spacing="xs"
              size="sm"
              center
              maw={200}
              icon={<Box bg="green" p={10} className="rounded-full" />}
            >
              <List.Item>Fundamentals of Financial Management</List.Item>
            </List>
          </Stack>
          <div>
            <Stack>
              <Group position="apart">
                <Button>Hôm nay</Button>
                <Badge className="h-[38px] rounded-[2rem] px-2">
                  <Group>
                    <ActionIcon variant="light" color="blue">
                      <IconChevronLeft />
                    </ActionIcon>
                    19 Tháng 3 - 2 Tháng 4, 2023
                    <ActionIcon variant="light" color="blue">
                      <IconChevronRight />
                    </ActionIcon>
                  </Group>
                </Badge>
                <Select placeholder="Lịch biểu" data={[]} />
              </Group>
              <Table withColumnBorders className="w-full rounded-md">
                <tbody>
                  {schedule.map((item) => (
                    <tr key={item.id}>
                      <td>{dayjs(item.time[0][0]).format("DD - dddd")}</td>
                      <td>{dayjs(item.time[0][0]).format("MMMM, YYYY")}</td>
                      <td>{formatDays([item.time[0][0], item.time[0][1]], "HH:mm").join(" - ")}</td>
                      <td>
                        <Box bg="green" p={10} w={0} className="rounded-full" />
                      </td>
                      <td>
                        <Text span weight="bold">
                          {item.id}
                        </Text>{" "}
                        <Text span>{item.name}</Text>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Stack>
          </div>
        </div>
      </Paper>
    </Container>
  );
}
