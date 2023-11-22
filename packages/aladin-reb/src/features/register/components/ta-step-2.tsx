import { Button, Group, Text } from "@mantine/core";

import TACourseTable from "@/features/register/components/ta-course-table";

export default function TAStep2() {
  return (
    <>
      <Text my="lg" weight="bold" size="xl" align="center" transform="uppercase">
        ĐĂNG KÝ HỢP TÁC DẠY HỌC TẠI ALADIN IU
      </Text>
      <TACourseTable />
      <Group mt="lg" position="right">
        <Button variant="outline">Quay lại</Button>
        <Button>Gửi phiếu đăng ký</Button>
      </Group>
    </>
  );
}
