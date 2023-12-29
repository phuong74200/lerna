import { Outlet } from "react-router-dom";
import { Container, Divider, Stack, Title } from "@mantine/core";

export default function CreateUniversityFixedLayout() {
  return (
    <Container size="md">
      <Stack w="64em">
        <Title order={2}>Tạo trường</Title>
        <Divider my="md" />
        <Outlet />
      </Stack>
    </Container>
  );
}
