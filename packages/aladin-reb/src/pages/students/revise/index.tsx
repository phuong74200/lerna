import { faker } from "@faker-js/faker";
import { Container, Grid, Image, SimpleGrid } from "@mantine/core";

import ReviseCard from "@/features/revise/components/revise-card";
import generateFilledArray from "@/utils/generate-filled-array";
import { generatePlaceHolderImage } from "@/utils/generate-place-holder-image";

const courses = generateFilledArray(50, () => ({
  title: faker.commerce.productName(),
  university: faker.location.street(),
  specialization: faker.commerce.product(),
  image: faker.image.urlPicsumPhotos(),
  tags: generateFilledArray(2, () => faker.word.adjective()),
}));

export default function Revise() {
  return (
    <Container mt="lg">
      <Grid>
        <Grid.Col span={9}>
          <SimpleGrid cols={3} spacing="md">
            {courses.map((course) => (
              <ReviseCard key={course.title} {...course} />
            ))}
          </SimpleGrid>
        </Grid.Col>
        <Grid.Col span={3}>
          <Image
            className="sticky top-[29px]"
            radius="lg"
            src={generatePlaceHolderImage({
              width: 200,
              height: 500,
            })}
          />
        </Grid.Col>
      </Grid>
    </Container>
  );
}
