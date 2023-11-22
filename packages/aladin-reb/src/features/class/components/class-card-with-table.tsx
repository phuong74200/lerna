import {
  ActionIcon,
  Badge,
  Box,
  Button,
  Card,
  Flex,
  Group,
  Image,
  Stack,
  Table,
  Text,
  Title,
} from "@mantine/core";
import { IconBookmark, IconCheck, IconSchool } from "@tabler/icons-react";
import dayjs from "dayjs";

import MoreInfo from "@/components/more-info";
import TextWithIcon from "@/components/text-width-icon";
import useRedirect from "@/hooks/use-redirect";
import { toVND } from "@/utils/converter";
import { CourseModel } from "@/utils/entity-generator";
import generateFilledArray from "@/utils/generate-filled-array";
import { getClassHours } from "@/utils/get-class-time";
import { getDiscountedPrice } from "@/utils/get-discount";
import getNearestTimeLeft from "@/utils/get-nearest-time-left";

type Props = CourseModel;

export default function ClassCardWithTable({
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
    <Card shadow="sm" padding="lg" radius="md" withBorder className="flex h-fit flex-col">
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

        <Table withColumnBorders className="w-full table-fixed rounded-md">
          <thead>
            <tr>
              <th className="bg-gray-200 w-[120px] whitespace-nowrap p-3">Thời gian</th>
              <th className="bg-gray-200 p-3">2</th>
              <th className="bg-gray-200 p-3">3</th>
              <th className="bg-gray-200 p-3">4</th>
              <th className="bg-gray-200 p-3">5</th>
              <th className="bg-gray-200 p-3">6</th>
              <th className="bg-gray-200 p-3">7</th>
              <th className="bg-gray-200 p-3">CN</th>
            </tr>
          </thead>
          <tbody>
            {time.map((item) => (
              <tr key={item[0].getTime()}>
                <td className="max-w-[100%] whitespace-nowrap">{getClassHours(item)}</td>
                {generateFilledArray(7, (i, index) => (
                  <td key={index} className="text-center">
                    {dayjs(item[0]).get("day") === index ? <IconCheck size={12} /> : null}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>

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

        <Flex align="center" gap="xs">
          <MoreInfo label="Hello world" />
          Số tiền:{" "}
          <Text span size="xl" className="leading-non font-bold" color="blue">
            {toVND(getDiscountedPrice(price, discount || 0))}
            <sup>đ</sup>
          </Text>
        </Flex>

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
        <Group spacing={8}>
          {tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </Group>
      </Stack>
    </Card>
  );
}
