import {
  Accordion,
  AccordionProps,
  AccordionStylesParams,
  Button,
  Divider,
  Group,
  Stack,
  Title,
} from "@mantine/core";
import { IconChalkboard, IconUser } from "@tabler/icons-react";

import { ControlTitle } from "@/features/register/components/control-title";
import { Row } from "@/features/register/components/row";
import { MantineStyles } from "@/types";
import { generateCourse, generatePerson } from "@/utils/entity-generator";
import getClassTime from "@/utils/get-class-time";
import getNearestTime from "@/utils/get-nearest-time";

const styles: MantineStyles<AccordionProps, AccordionStylesParams> = () => ({
  item: {
    borderBottom: "1px solid transparent",
  },
  content: {
    padding: "0.5rem",
    paddingInline: 20,
  },
});

const user = generatePerson();
const course = generateCourse();

export default function CourseStep1() {
  return (
    <Stack>
      <Title
        transform="uppercase"
        order={2}
        mt="md"
        weight="bold"
        align="center"
        className="w-full"
      >
        Xác nhận thông tin
      </Title>
      <Accordion defaultValue={["personal-info", "course-info"]} styles={styles} multiple>
        <Accordion.Item value="personal-info">
          <Accordion.Control icon={<IconUser size={20} />}>
            <Divider label={<ControlTitle>Thông tin cá nhân</ControlTitle>} />
          </Accordion.Control>
          <Accordion.Panel>
            <Row label="Họ và tên" value={user.name} />
            <Row label="Email" value={user.email} />
            <Row label="Số điện thoại" value={user.phone} />
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="course-info">
          <Accordion.Control icon={<IconChalkboard size={20} />}>
            <Divider label={<ControlTitle>Thông tin buổi học</ControlTitle>} />
          </Accordion.Control>
          <Accordion.Panel>
            <Row label="Môn học" value={course.name} />
            <Row label="Nội dung" value={course.description} />
            <Row label="Thời gian" value={getClassTime(getNearestTime([...course.time]))} />
            <Row label="Địa điểm" value={course.location} />
            <Row label="Trợ giảng" value={course.lecture.name} />
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
      <Group noWrap>
        <Button variant="outline">Quay lại</Button>
        <Button fullWidth>Tiếp theo</Button>
      </Group>
    </Stack>
  );
}
