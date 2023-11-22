import { Box, Button, Group, Image, Paper, PinInput, Stack, Text, Title } from "@mantine/core";

import { generatePlaceHolderImage } from "@/utils/generate-place-holder-image";

export default function RecoveryOTP() {
  return (
    <Paper p="lg" shadow="lg" className="bg-gray-50 w-[450px]">
      <Stack spacing="lg">
        <Stack spacing="0">
          <Title order={1} className="text-blue-700">
            OTP
          </Title>
          <Text>Khôi phục tài khoản</Text>
        </Stack>
        <Paper p="lg" shadow="lg">
          <Stack spacing="md">
            <Image src={generatePlaceHolderImage({ width: 400, height: 300 })} />
            <Box>
              <Text className="text-gray-500 text-center">
                Vui lòng nhập mã 6 số nhận được từ email
              </Text>
              <Text className="text-center" weight="bold">
                aladin@gmail.com
              </Text>
            </Box>
            <PinInput size="xl" oneTimeCode length={6} className="justify-between" />
            <Group noWrap>
              <Button variant="outline" className="w-full">
                Quay lại
              </Button>
              <Button variant="filled" className="w-full">
                Xác thực
              </Button>
            </Group>
            <Button variant="light" className="w-full">
              Gửi lại mã xác thực
            </Button>
          </Stack>
        </Paper>
      </Stack>
    </Paper>
  );
}
