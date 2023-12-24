import {
  Button,
  Container,
  Group,
  List,
  MultiSelect,
  NumberInput,
  Paper,
  Select,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { IconCalendarEvent, IconPlus } from "@tabler/icons-react";

import useRedirect from "@/common/hooks/use-redirect";
// import { MRT_ColumnDef, MRT_Table } from "mantine-react-table";
import TextWithIcon from "@/common/ui/text-width-icon";
import useGetSelfMajor from "@/features/major/services/use-get-self-major";
import { generatePerson } from "@/utils/entity-generator";
import generateFilledArray from "@/utils/generate-filled-array";

const emails = generateFilledArray(100, () => generatePerson().email);

// const columns: MRT_ColumnDef<Partial<CourseModel & { index: number }>>[] = [
//   {
//     accessorKey: "index", //simple recommended way to define a column
//     header: "#",
//   },
//   {
//     header: "Thời gian",
//     accessorFn: (dataRow) => getClassTime(dataRow.time?.[0]),
//   },
//   {
//     accessorKey: "type", //simple recommended way to define a column
//     header: "Hình thức",
//   },
//   {
//     accessorKey: "location", //simple recommended way to define a column
//     header: "Địa điểm",
//   },
// ];

export default function RegisterPrivateGroupPage() {
  const { onRedirectWithState } = useRedirect();

  const major = useGetSelfMajor();

  return (
    <Container my="lg">
      <div className="grid grid-flow-row-dense grid-cols-3 gap-4">
        <div className="col-span-2">
          <Paper p="lg" shadow="lg">
            <Stack>
              <Title order={3} my="md" weight="bold" className="w-full" align="center">
                ĐĂNG KÝ TẠO NHÓM RIÊNG
              </Title>
              <Group noWrap>
                <Select
                  label="Môn đăng ký"
                  data={major.data?.toSelectList() || []}
                  withAsterisk
                  className="w-full"
                />
                <NumberInput label="Số lượng sinh viên" min={1} withAsterisk className="w-full" />
              </Group>
              <Select label="Nội dung buổi học" data={[]} withAsterisk />
              <Group position="apart">
                <Text size="sm" weight={500}>
                  Thông tin buổi học
                </Text>
                <Button compact variant="subtle" leftIcon={<IconPlus size={16} />}>
                  Thêm buổi học
                </Button>
              </Group>
              {/* <MRT_Table table={table} /> */}
              <TextWithIcon
                spacing={4}
                leftIcon={<IconCalendarEvent size={16} className="text-oc-blue-6" />}
              >
                <Text color="blue">Xem lại lịch học của bạn</Text>
              </TextWithIcon>
              <Stack spacing="xs">
                <Text weight="bold">Mời bạn bè vào nhóm riêng</Text>
                <List withPadding>
                  <List.Item>
                    Trường hợp đăng ký hộ, các bạn trong nhóm sẽ được gửi lời mời vào nhóm qua email
                    và tài khoản Aladin nếu có (đăng kí tài khoản bằng email bạn đã nhập).
                  </List.Item>
                  <List.Item>
                    Đảm bảo không công khai đường link để tránh mất lượt tham gia. Nhóm riêng sẽ
                    đóng khi đủ số lượng người vào.
                  </List.Item>
                </List>
              </Stack>
              <MultiSelect
                searchable
                data={emails}
                placeholder="nguyenvana@gmail.com"
                clearButtonProps={{ "aria-label": "Clear selection" }}
                clearable
              />
              <Group position="right" mt="1rem">
                <Button variant="outline">Huỷ đăng ký</Button>
                <Button onClick={onRedirectWithState("payment")}>Thanh toán</Button>
              </Group>
            </Stack>
          </Paper>
        </div>
        <div className="col-span-1">
          <Paper p="lg" shadow="lg">
            <Title order={3} my="md" weight="bold" className="w-full" align="center">
              Thông tin thanh toán
            </Title>
            <Stack>
              <TextInput label={<Text weight="bold">Mã khuyến mãi</Text>} placeholder="ALADIN012" />
              {/* <Row
                cols={[4]}
                label="Tạm tính"
                value={
                  <Text className="text-[1rem] leading-none" align="right">
                    {toVND(course.price)}
                    <sup>đ</sup>
                  </Text>
                }
              />
              <Row
                cols={[5]}
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
                  cols={[4]}
                  label="Giảm giá"
                  value={
                    <Text
                      color="green"
                      weight="bold"
                      className="text-[1rem] leading-none"
                      align="right"
                    >
                      -{toVND(getDiscountedValue(course.price, course.discount))}
                      <sup>đ</sup>
                    </Text>
                  }
                />
              )}
              <Divider />
              <Row
                cols={[6]}
                label="Tổng thanh toán"
                value={
                  <Text
                    className="text-[1rem] leading-none"
                    color="red"
                    weight="bold"
                    align="right"
                  >
                    {toVND(getDiscountedPrice(course.price, course.discount))}
                    <sup>đ</sup>
                  </Text>
                }
              /> */}
            </Stack>
          </Paper>
        </div>
      </div>
    </Container>
  );
}
