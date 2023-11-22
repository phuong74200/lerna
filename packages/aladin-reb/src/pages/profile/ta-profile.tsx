import {
  Button,
  Container,
  Grid,
  Group,
  Image,
  Paper,
  SimpleGrid,
  Stack,
  TextInput,
  Title,
} from "@mantine/core";

import AvatarModify from "@/features/profile/components/avatar-modify";
import GenderSelect from "@/features/profile/components/gender-select";
import UniversitySelect from "@/features/profile/components/university-select";
import { generatePlaceHolderImage } from "@/utils/generate-place-holder-image";

export default function TAProfile() {
  return (
    <Container mt="lg">
      <Grid>
        <Grid.Col span={9}>
          <Stack>
            <Paper p="lg" shadow="lg">
              <AvatarModify />
            </Paper>
            <Paper p="lg" shadow="lg">
              <Title order={3} mb="md" className="text-blue-600">
                Thông tin cá nhân
              </Title>
              <SimpleGrid cols={2}>
                <TextInput label="Họ và tên" className="w-full" />
                <TextInput label="Số điện thoại" className="w-full" />
                <GenderSelect />
                <UniversitySelect />
                <TextInput label="Email" className="w-full" />
                <TextInput label="Facebook" className="w-full" />
              </SimpleGrid>
              <Group position="right" mt="md">
                <Button variant="outline">Huỷ chỉnh sửa</Button>
                <Button>Lưu chỉnh sửa</Button>
              </Group>
            </Paper>
            <Paper p="lg" shadow="lg">
              <Title order={3} mb="md" className="text-blue-600">
                Đổi mật khẩu
              </Title>
              <SimpleGrid cols={2}>
                <TextInput label="Mật khẩu hiện tại" className="w-full" />
                <TextInput label="Mật khẩu mới" className="w-full" />
                <div className="invisible"></div>
                <TextInput label="Nhập lại mật khẩu mới" className="w-full" />
              </SimpleGrid>
              <Group position="right" mt="md">
                <Button variant="outline">Huỷ chỉnh sửa</Button>
                <Button>Đỗi mật khẩu</Button>
              </Group>
            </Paper>
          </Stack>
        </Grid.Col>
        <Grid.Col span={3}>
          <Image
            radius="lg"
            src={generatePlaceHolderImage({
              width: 200,
              height: 500,
            })}
          />
        </Grid.Col>
      </Grid>
    </Container>
  );
}
