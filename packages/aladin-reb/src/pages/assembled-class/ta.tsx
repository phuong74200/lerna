import { Outlet } from "react-router-dom";
import { Container, SimpleGrid } from "@mantine/core";

import ClassCardWithTable from "@/features/class/components/class-card-with-table";
import TATabBar from "@/layout/components/ta-tab-bar";
import { generateCourse } from "@/utils/entity-generator";
import generateFilledArray from "@/utils/generate-filled-array";

const classes = generateFilledArray(20, () => generateCourse({ maxTime: 3 }));

export default function ListTAAssembledClass() {
  return (
    <>
      <Outlet />
      <Container my="lg">
        <SimpleGrid cols={2} spacing="lg" mb="md">
          <h1>Filters</h1>
        </SimpleGrid>
        <TATabBar />
        <SimpleGrid cols={2} spacing="lg">
          {classes.map((item) => (
            <ClassCardWithTable {...item} key={item.id} />
          ))}
        </SimpleGrid>
      </Container>
    </>
  );
}
