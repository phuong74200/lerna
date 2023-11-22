import { Radio, SimpleGrid, Stack, Text, Textarea, TextInput, Title } from "@mantine/core";

import TACourseTable from "@/features/register/components/ta-course-table";

export default function TARegisterModify() {
  return (
    <>
      <Text my="lg" weight="bold" size="xl" align="center" transform="uppercase">
        CHỈNH SỬA ĐƠN ĐĂNG KÝ HỢP TÁC DẠY HỌC TẠI ALADIN IU
      </Text>
      <SimpleGrid cols={2}>
        <Stack>
          <Title order={3} className="text-blue-600">
            Thông tin cá nhân
          </Title>
          <TextInput label="Họ và tên" placeholder="Họ và tên" />
          <TextInput label="Email" placeholder="Email" />
          <TextInput label="Số điện thoại" placeholder="Số điện thoại" />
          <TextInput label="Mã số sinh viên" placeholder="Mã số sinh viên" />
          <TextInput label="Link facebook" placeholder="Link facebook" />
        </Stack>
        <Stack>
          <Title order={3} className="text-blue-600">
            Thông tin khác
          </Title>
          <TextInput label="Số điện thoại trợ giảng giới thiệu" placeholder="Số điện thoại" />
          <Title order={3} className="text-blue-600">
            Khảo sát về dạy học
          </Title>
          <Radio.Group
            name="experience"
            label="Bạn đã từng có kinh nghiệm trợ giảng chưa? "
            withAsterisk
          >
            <Stack mt="xs">
              <Radio value="yes" label="Có" />
              <Radio value="no" label="Chưa" />
            </Stack>
          </Radio.Group>
          <Textarea
            placeholder="Kinh nghiệm giảng dạy"
            label="Sơ lược về kinh nghiệm giảng dạy"
            description="Nếu bạn chưa có kinh nghiệm vui lòng bỏ qua phần này!"
          />
        </Stack>
        <div className="col-span-2">
          <Text my="lg" weight="bold" size="xl" align="center" transform="uppercase">
            ĐĂNG KÝ MÔN
          </Text>
          <TACourseTable />
        </div>
      </SimpleGrid>
    </>
  );
}
