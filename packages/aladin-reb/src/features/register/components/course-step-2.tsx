import { faker } from "@faker-js/faker";
import {
  Accordion,
  AccordionProps,
  AccordionStylesParams,
  Button,
  Divider,
  Flex,
  Group,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { IconChalkboard, IconZoomMoney } from "@tabler/icons-react";

import MoreInfo from "@/components/more-info";
import RadioWithImage from "@/components/radio-with-image";
import { ControlTitle } from "@/features/register/components/control-title";
import { Row } from "@/features/register/components/row";
import { MantineStyles } from "@/types";
import { toVND } from "@/utils/converter";
import logger from "@/utils/dev-log";
import { generateCourse } from "@/utils/entity-generator";
import { getDiscountedPrice, getDiscountedValue } from "@/utils/get-discount";

const styles: MantineStyles<AccordionProps, AccordionStylesParams> = () => ({
  item: {
    borderBottom: "1px solid transparent",
  },
  content: {
    padding: "0.5rem",
    paddingInline: 20,
  },
});

const course = generateCourse();

export default function CourseStep2() {
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
        Xác nhận thông tin thanh toán
      </Title>
      <Accordion defaultValue={["payment-info", "method-info"]} styles={styles} multiple>
        <Accordion.Item value="payment-info">
          <Accordion.Control icon={<IconZoomMoney size={20} />}>
            <Divider label={<ControlTitle>Thông tin thanh toán</ControlTitle>} />
          </Accordion.Control>
          <Accordion.Panel>
            <Row
              cols={[3]}
              label="Mã khuyến mãi"
              value={
                <Text className="text-[1rem] leading-none" align="right" color="dimmed">
                  ALADIN123
                </Text>
              }
            />
            <Row
              cols={[3]}
              label="Tạm tính"
              value={
                <Text className="text-[1rem] leading-none" align="right">
                  {toVND(course.price)}
                  <sup>đ</sup>
                </Text>
              }
            />
            <Row
              cols={[3]}
              label={
                <Flex align="center" gap="xs">
                  Chi phí khác <MoreInfo label="Hello world" />
                </Flex>
              }
              value={
                <Text className="text-[1rem] leading-none" align="right">
                  {toVND(course.otherPrice)}
                  <sup>đ</sup>
                </Text>
              }
            />
            {course.discount && (
              <Row
                cols={[3]}
                label="Giảm giá"
                value={
                  <Text color="green" className="text-[1rem] leading-none" align="right">
                    -{toVND(getDiscountedValue(course.price, course.discount))}
                    <sup>đ</sup>
                  </Text>
                }
              />
            )}
            <Divider my="sm" />
            <Row
              cols={[3]}
              label="Tổng thanh toán"
              value={
                <Text className="text-[1rem] leading-none" color="red" align="right">
                  {toVND(getDiscountedPrice(course.price, course.discount))}
                  <sup>đ</sup>
                </Text>
              }
            />
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="method-info">
          <Accordion.Control icon={<IconChalkboard size={20} />}>
            <Divider label={<ControlTitle>Hình thức thanh toán</ControlTitle>} />
          </Accordion.Control>
          <Accordion.Panel>
            <RadioWithImage.Group
              name="favoriteFramework"
              label="Select your favorite framework/library"
              description="This is anonymous"
              withAsterisk
              onChange={(value) => logger.log(value)}
            >
              <Group noWrap>
                <RadioWithImage
                  description="Thanh toán"
                  title="Momo"
                  image={faker.image.urlLoremFlickr()}
                  value="zalo"
                />
                <RadioWithImage
                  description="Thanh toán"
                  title="Zalo"
                  image={faker.image.urlLoremFlickr()}
                  value="momo"
                />
                <RadioWithImage
                  description="Thanh toán"
                  title="Ngân hàng"
                  image={faker.image.urlLoremFlickr()}
                  value="banking"
                />
              </Group>
            </RadioWithImage.Group>
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
