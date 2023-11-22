import { Outlet } from "react-router-dom";
import { Button, Center, Container, Paper, SimpleGrid, Title } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";

import ClassCard from "@/features/class/components/class-card";
import StudentTabBar from "@/features/layout/components/student-tab-bar";
import { generateCourse } from "@/utils/entity-generator";
import generateFilledArray from "@/utils/generate-filled-array";

const classes = generateFilledArray(20, () => generateCourse({ maxTime: 3 }));

export default function Group() {
  return (
    <>
      <Outlet />
      <Container my="lg">
        <SimpleGrid cols={2} spacing="lg" mb="md">
          <Paper shadow="md" p="lg">
            <Title order={3} className="text-blue-700" mt="md" weight="bold" align="center">
              Mong muốn ghép nhóm nhưng không tìm được thời gian phù hợp?
            </Title>
            <Center mt="md">
              <Button variant="light" rightIcon={<IconArrowRight />}>
                Tạo nhóm ghép ngay
              </Button>
            </Center>
          </Paper>
          <Paper shadow="md" p="lg">
            <Title order={3} className="text-blue-700" mt="md" weight="bold" align="center">
              Thời gian và địa điểm linh hoạt cùng với Tạo nhóm riêng
            </Title>
            <Center mt="md">
              <Button variant="light" rightIcon={<IconArrowRight />}>
                Tạo nhóm riêng ngay
              </Button>
            </Center>
          </Paper>
        </SimpleGrid>
        <StudentTabBar />
        <SimpleGrid cols={3} spacing="lg">
          {classes.map((item) => (
            <ClassCard {...item} key={item.id} />
          ))}
        </SimpleGrid>
      </Container>
    </>
  );
}
