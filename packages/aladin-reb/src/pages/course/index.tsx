import { Container, SimpleGrid, Stack, Title } from "@mantine/core";

import CourseCard from "@/features/course/components/course-card";
import generateFilledArray from "@/utils/generate-filled-array";

export default function ListCourses() {
  return (
    <Container my="lg">
      <Stack>
        <Title>Filter</Title>
        <SimpleGrid cols={3} spacing="lg">
          {generateFilledArray(10).map(() => (
            <CourseCard key={Math.random()} />
          ))}
        </SimpleGrid>
      </Stack>
    </Container>
  );
}
