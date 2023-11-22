import {
  Anchor,
  Avatar,
  Box,
  Code,
  CopyButton,
  Group,
  LoadingOverlay,
  Paper,
  SimpleGrid,
  Text,
} from "@mantine/core";

import useGetStudentById from "@/features/students/services/use-get-student-by-id";
import useRedirect from "@/hooks/use-redirect";

type Props = {
  user_id: string;
};

const Label = ({ children }: { children: React.ReactNode }) => (
  <Text className="font-bold">{children}</Text>
);

const Data = ({ children }: { children: React.ReactNode }) => <Text>{children}</Text>;

export default function StudentDetail({ user_id }: Props) {
  const student = useGetStudentById(user_id);
  const { onRedirect } = useRedirect();

  return (
    <Box className="relative" bg="gray.1">
      <LoadingOverlay visible={student.isFetching} overlayBlur={2} />

      <SimpleGrid cols={4} p="lg">
        <Paper p="md">
          <Group className="h-full items-start">
            <Avatar
              src={student.data?.avatar}
              size="43.375px"
              className="self-start rounded-full"
              color="grape"
            />
            <Box>
              <Label>Email</Label>
              <Data>{student?.data?.email}</Data>
            </Box>
          </Group>
        </Paper>

        <Paper p="md">
          <Label>ID</Label>
          <Data>
            <CopyButton value={student?.data?.userId || ""}>
              {({ copy }) => (
                <Code className="cursor-copy" onClick={copy}>
                  {student?.data?.userId}
                </Code>
              )}
            </CopyButton>
          </Data>
        </Paper>
        <Paper p="md">
          <Label>Họ và tên</Label>
          <Data>{student?.data?.fullName}</Data>
        </Paper>

        <Paper p="md">
          <Label>Số điện thoại</Label>
          <Data>{student?.data?.phoneNumber}</Data>
        </Paper>

        <Paper p="md">
          <Label>Tên trường</Label>
          <Data>
            <Anchor onClick={onRedirect(`/university/${student.data?.institutionId}`)}>
              {student?.data?.institutionName}
            </Anchor>
          </Data>
        </Paper>

        <Paper p="md">
          <Label>Giới tính</Label>
          <Data>{student?.data?.gender}</Data>
        </Paper>

        <Paper p="md">
          <Label>Trạng thái</Label>
          <Data>{student?.data?.status}</Data>
        </Paper>

        <Paper p="md">
          <Label>Role</Label>
          <Data>{student?.data?.roleId}</Data>
        </Paper>
      </SimpleGrid>
    </Box>
  );
}
