import { Button, Card, Group, Image, Stack, Text, Title } from "@mantine/core";

import useRedirect from "@/common/hooks/use-redirect";
import { generateCourse } from "@/utils/entity-generator";

const course = generateCourse();

export default function CourseCard() {
  const { onRedirectWithState } = useRedirect();

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder className="flex h-fit flex-col">
      <Card.Section className="relative overflow-hidden">
        <Image src={course.image} height={160} alt="Norway" />
        <div className="absolute right-0 top-0 m-[-1px] rounded-bl-3xl bg-oc-red-7 bg-opacity-80 px-4 py-2 font-bold backdrop-blur-3xl">
          Môn hot
        </div>
      </Card.Section>

      <Stack spacing="sm" className="flex-1">
        <Group position="apart">
          <Title order={3} mt="md" weight="bold">
            {course.name}
          </Title>
        </Group>
        <Text>Khoa/ngành: Công nghệ thông tin</Text>
        <Button color="blue" fullWidth onClick={onRedirectWithState(`/`)}>
          Thêm môn dạy
        </Button>
      </Stack>
    </Card>
  );
}
