import { Container, SimpleGrid } from "@mantine/core";

import TAPrivateClassCard from "@/features/class/components/ta-private-class-card";
import TATabBar from "@/features/layout/components/ta-tab-bar";
import { generateCourse } from "@/utils/entity-generator";
import generateFilledArray from "@/utils/generate-filled-array";

const classes = generateFilledArray(20, () => generateCourse({ maxTime: 3 }));

export default function TAClass() {
  return (
    <Container mt="lg" size="xl">
      <SimpleGrid cols={2} spacing="lg" mb="md">
        <h1>Filters</h1>
      </SimpleGrid>
      <TATabBar />
      <SimpleGrid cols={4} spacing="lg">
        {classes.map((item) => (
          <TAPrivateClassCard {...item} key={item.id} />
        ))}
      </SimpleGrid>
    </Container>
  );
}
