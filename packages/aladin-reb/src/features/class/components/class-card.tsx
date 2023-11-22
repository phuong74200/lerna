import {
  ActionIcon,
  Badge,
  Box,
  Button,
  Card,
  Flex,
  Group,
  HoverCard,
  Image,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { IconBookmark, IconClock, IconSchool } from "@tabler/icons-react";
import dayjs from "dayjs";
import Overflow from "rc-overflow";

import TextWithIcon from "@/components/text-width-icon";
import useRedirect from "@/hooks/use-redirect";
import { toVND } from "@/utils/converter";
import { CourseModel } from "@/utils/entity-generator";
import getClassTime from "@/utils/get-class-time";
import { getDiscountedPrice } from "@/utils/get-discount";
import getNearestTimeLeft from "@/utils/get-nearest-time-left";

type Props = CourseModel;

function renderItem(item: string) {
  return <Badge mr="xs">{item}</Badge>;
}

function renderRest(items: string[]) {
  return (
    <HoverCard width={280} shadow="md">
      <HoverCard.Target>
        <Badge className="cursor-pointer" variant="filled" mr="xs">
          +{items.length}
        </Badge>
      </HoverCard.Target>
      <HoverCard.Dropdown>
        <Flex gap="xs" wrap="wrap">
          {items.map((item) => (
            <Badge key={item}>{item}</Badge>
          ))}
        </Flex>
      </HoverCard.Dropdown>
    </HoverCard>
  );
}

export default function ClassCard({
  id,
  name,
  discount,
  image,
  isFavorite,
  lecture,
  price,
  subscription,
  tags,
  time,
}: Props) {
  const { onRedirectWithState } = useRedirect();

  return (
    <Card shadow="md" padding="lg" className="flex h-full flex-col">
      <Card.Section className="relative overflow-hidden">
        <Image src={image} height={160} alt="Norway" />
        {discount && (
          <div className="bg-slate-100 text-blue-700 absolute right-0 top-0 m-[-1px] rounded-bl-3xl bg-opacity-80 px-4 py-2 font-bold backdrop-blur-3xl">
            -{discount}%
          </div>
        )}
        <Box
          bg="red"
          className="text-white absolute bottom-0 left-0 w-full p-2 text-center font-bold"
        >
          Còn {~~dayjs.duration(getNearestTimeLeft(time)).asDays()} ngày nữa diễn ra lớp học
        </Box>
      </Card.Section>

      <Stack spacing="sm" className="flex-1">
        <Group position="apart">
          <Title order={3} mt="md" weight="bold">
            {name}
          </Title>
        </Group>

        <Button mt="auto" variant="light" radius="xs" fullWidth>
          Còn {subscription} lượt đăng ký
        </Button>

        {time.map((item) => (
          <TextWithIcon key={item[0].getTime()} leftIcon={<IconClock size="1.125rem" />}>
            <Text>{getClassTime(item)}</Text>
          </TextWithIcon>
        ))}

        <TextWithIcon
          onClick={onRedirectWithState(`/lecture/${lecture.id}/rating`)}
          leftIcon={<IconSchool size="1.125rem" />}
        >
          {lecture.name}
          <Text span>
            {" "}
            ({lecture.rating.toFixed(1)}{" "}
            <Text span color="yellow">
              ★
            </Text>
            )
          </Text>
        </TextWithIcon>

        <Group align="flex-end" spacing="xs">
          {discount && (
            <Text strikethrough className="leading-non" color="blue">
              {toVND(price)}
              <sup>đ</sup>
            </Text>
          )}
          <Text size="xl" className="leading-non font-bold" color="blue">
            {toVND(getDiscountedPrice(price, discount || 0))}
            <sup>đ/người</sup>
          </Text>
        </Group>

        <Group noWrap spacing="sm">
          <ActionIcon
            variant={isFavorite ? "filled" : "outline"}
            radius="md"
            size={34}
            color="blue"
          >
            <IconBookmark size="1.125rem" />
          </ActionIcon>
          <Button color="blue" fullWidth onClick={onRedirectWithState(`${id}/register`)}>
            Đăng ký
          </Button>
        </Group>
        <Overflow
          className="flex"
          data={tags}
          renderItem={renderItem}
          renderRest={renderRest}
          maxCount="responsive"
        />
      </Stack>
    </Card>
  );
}
