import { faker } from "@faker-js/faker";
import { Chip, Group, Modal, ScrollArea, Stack, Text } from "@mantine/core";

import useModalRouteTrasition from "@/common/hooks/use-modal-route-transition";
import Star from "@/common/ui/star";
import RatingRow from "@/features/rating/components/rating-row";
import { generatePerson } from "@/utils/entity-generator";
import generateFilledArray from "@/utils/generate-filled-array";

const ratings = {
  lecture: generatePerson(),
  ratings: generateFilledArray(50, () => ({
    id: faker.string.uuid(),
    comment: faker.lorem.sentences(),
    rating: faker.number.int({ min: 1, max: 5 }),
    by: generatePerson(),
  })),
};

export default function LectureRating() {
  const { open, goBack } = useModalRouteTrasition();

  return (
    <Modal.Root
      opened={open}
      onClose={goBack}
      size="55%"
      centered
      transitionProps={{ transition: "slide-up" }}
    >
      <Modal.Overlay blur={3} opacity={0.55} />
      <Modal.Content maw={720}>
        <Modal.Header>
          <Modal.Title className="w-full text-center text-lg font-bold">
            <Stack spacing={0}>
              <Text>
                Đánh giá của trợ giảng {ratings.lecture.name} 4.6 <Star />
                <Text span className="w-full text-center text-lg font-normal">
                  {" "}
                  (6 lượt)
                </Text>
              </Text>
              <Chip.Group multiple>
                <Group position="center" mt="md">
                  <Chip value="5-star">
                    5<Star /> (6)
                  </Chip>
                  <Chip value="4-star">
                    4 <Star /> (0)
                  </Chip>
                  <Chip value="3-star">
                    3 <Star /> (2)
                  </Chip>
                  <Chip value="2-star">
                    2 <Star /> (4)
                  </Chip>
                  <Chip value="1-star">
                    1 <Star /> (5)
                  </Chip>
                </Group>
              </Chip.Group>
            </Stack>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ScrollArea>
            <Stack spacing="lg">
              {ratings.ratings.map((item) => (
                <RatingRow key={item.id} {...item} />
              ))}
            </Stack>
          </ScrollArea>
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  );
}
