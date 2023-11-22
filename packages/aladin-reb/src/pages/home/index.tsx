import Marquee from "react-fast-marquee";
import { faker } from "@faker-js/faker";
import {
  Avatar,
  createStyles,
  Flex,
  Group,
  Image,
  Paper,
  SimpleGrid,
  Space,
  Stack,
  Text,
  Title,
  UnstyledButton,
} from "@mantine/core";
import { IconBolt, IconChecks, IconNorthStar, IconPigMoney } from "@tabler/icons-react";

import { generatePerson } from "@/utils/entity-generator";
import { generatePlaceHolderImage } from "@/utils/generate-place-holder-image";

const Review = () => {
  const user = generatePerson();

  return (
    <Paper w={400} shadow="xs" p="lg" withBorder>
      <UnstyledButton>
        <Group>
          <Avatar src={user.avatar} size={40}></Avatar>
          <div>
            <Text>{user.name}</Text>
            <Text size="xs" color="dimmed">
              {user.email}
            </Text>
          </div>
        </Group>
      </UnstyledButton>
      <Text lineClamp={2}>{faker.lorem.paragraph()}</Text>
    </Paper>
  );
};

const useStyles = createStyles(() => ({
  container: {
    ".child": {
      marginRight: 24,
    },
  },
}));

export default function Home() {
  const { classes } = useStyles();

  return (
    <>
      <Image src={generatePlaceHolderImage({ width: 1920, height: 730 })} />
      <Stack my={60} spacing="md">
        <Flex align="center" justify="center" gap={16}>
          <IconNorthStar size="2.125rem" />
          <Title transform="uppercase">Tinh thần Aladin</Title>
          <IconNorthStar size="2.125rem" />
        </Flex>
        <SimpleGrid cols={3} className="w-fit" mx="auto">
          <Paper p="md" shadow="lg">
            <Stack align="center">
              <IconBolt size="3.125rem" />
              <Title order={3}>Nhanh nhất</Title>
              <Text>Luôn đảm bảo dịch vụ nhanh chóng và kịp thời</Text>
            </Stack>
          </Paper>
          <Paper p="md" shadow="lg">
            <Stack align="center">
              <IconChecks size="3.125rem" />
              <Title order={3}>Thuận tiện nhất</Title>
              <Text>Quy trình và cách thức tối ưu nhất cho sinh viên</Text>
            </Stack>
          </Paper>
          <Paper p="md" shadow="lg">
            <Stack align="center">
              <IconPigMoney size="3.125rem" />
              <Title order={3}>Tiết kiệm nhất</Title>
              <Text>Luôn đảm bảo giá cả hợp lý nhất cho sinh viên</Text>
            </Stack>
          </Paper>
        </SimpleGrid>
        <Space h={100} />
        <Flex align="center" justify="center" gap={16}>
          <IconNorthStar size="2.125rem" />
          <Title transform="uppercase">Nhận xét từ sinh viên</Title>
          <IconNorthStar size="2.125rem" />
        </Flex>
        <Stack spacing={24}>
          <Marquee className={classes.container} autoFill={true}>
            <Review />
          </Marquee>
          <Marquee className={classes.container} direction="right" autoFill={true}>
            <Review />
          </Marquee>
        </Stack>
      </Stack>
    </>
  );
}
