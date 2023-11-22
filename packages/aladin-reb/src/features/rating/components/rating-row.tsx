import { Avatar, Group, Rating, Stack, Text } from "@mantine/core";

import { Person } from "@/utils/entity-generator";

interface Props {
  id: string;
  comment: string;
  rating: number;
  by: Person;
}

export default function RatingRow({ comment, rating, by }: Props) {
  return (
    <Stack>
      <Group>
        <Avatar src={by.avatar} size={40} color="blue" className="rounded-full" />
        <div>
          <Text>
            <span className="font-bold">{by.name} </span>
            <Text span className="text-gray-500">
              học
              <Text span weight="bold" className="text-gray-500">
                {" "}
                {by.course}
              </Text>
            </Text>
          </Text>
          <Rating value={rating} fractions={2} readOnly />
        </div>
      </Group>
      <Stack spacing={8}>
        <Text>{comment}</Text>
        <Text className="text-gray-500">Gửi lúc 08:30 - 30.02.2023</Text>
      </Stack>
    </Stack>
  );
}
