import { Outlet } from "react-router-dom";
import { Container, Paper, Stack, Text } from "@mantine/core";

import Conditional from "@/features/register/components/ta-conditional";
import RegisterGuide from "@/features/register/components/ta-guide";

export default function TARegister() {
  return (
    <Container mt="lg" size="xl">
      <div className="grid grid-flow-row-dense grid-cols-3 gap-4">
        <div className="col-span-1">
          <Stack>
            <Paper p="lg" shadow="lg">
              <Text className="text-center text-lg font-bold">
                Điều kiện trở thành trợ giảng Aladin
              </Text>
              <Conditional />
            </Paper>
            <Paper p="lg" shadow="lg">
              <Text className="text-center text-lg font-bold">
                Các bước đăng ký trở thành
                <br />
                trợ giảng tại Aladin
              </Text>
              <RegisterGuide />
            </Paper>
          </Stack>
        </div>
        <div className="col-span-2">
          <Paper p="lg" shadow="lg">
            <Outlet />
          </Paper>
        </div>
      </div>
    </Container>
  );
}
