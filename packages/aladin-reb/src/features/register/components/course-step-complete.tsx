import { Box, Button, Center, Group, Image, Stack, Text, Title } from "@mantine/core";

import { generatePlaceHolderImage } from "@/utils/generate-place-holder-image";

export default function CourseStepComplete() {
  return (
    <Stack>
      <Title order={3} align="center">
        Hoàn thành
        <Center mt="md">
          <Image src={generatePlaceHolderImage({ width: 300, height: 200 })} width={300} />
        </Center>
        <Text align="center" mt="md">
          Thanh toán của bạn sẽ được Aladin xác nhận lại
        </Text>
        <Box>
          <Text align="center" maw={500} mx="auto">
            Thường xuyên kiểm tra mail và thông báo để đảm bạn có thể thuận lợi tham gia lớp học nhé
          </Text>
        </Box>
      </Title>
      <Group noWrap>
        <Button fullWidth>Xác nhận</Button>
      </Group>
    </Stack>
  );
}
