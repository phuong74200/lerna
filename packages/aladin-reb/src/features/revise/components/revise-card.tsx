import { Badge, Card, Image, SimpleGrid, Text } from "@mantine/core";

interface Props {
  title: string;
  university: string;
  specialization: string;
  image: string;
  tags: string[];
}

export default function ReviseCard(props: Props) {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image src={props.image} height={160} alt="Norway" />
      </Card.Section>

      <Text weight={700} mt="md" className="text-lg">
        {props.title}
      </Text>

      <Text className="text-slate-500">Trường: {props.university}</Text>
      <Text className="text-slate-500">Khoa/ngành: {props.specialization}</Text>

      <SimpleGrid cols={3} mt="md">
        {props.tags.map((tag) => (
          <Badge variant="outline" key={tag}>
            {tag}
          </Badge>
        ))}
      </SimpleGrid>
    </Card>
  );
}
