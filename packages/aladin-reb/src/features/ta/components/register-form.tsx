import { Anchor, Flex, Radio, SimpleGrid, Stack, Textarea, TextInput, Title } from "@mantine/core";
import { DataTable, DataTableColumn } from "mantine-datatable";

import { components } from "@/api/v1";
import RippleButton from "@/modules/mantine-ripple/components/ripple-button";

const columns: DataTableColumn<{
  taSubjectRegisterId?: number | undefined;
  subjectId?: number | undefined;
  subjectName?: string | undefined;
  gpa?: number | undefined;
  linkResource?: string | undefined;
  confirmed?: boolean | undefined;
  createdAt?: Date | undefined;
}>[] = [
  {
    accessor: "subjectId",
    title: "Tên môn học",
    textAlignment: "center",
    width: "20%",
    render: ({ subjectName }) => <div>{subjectName}</div>,
  },
  {
    accessor: "gpa",
    title: "Điểm GPA",
    width: "20%",
    textAlignment: "center",
  },
  {
    accessor: "linkResource",
    title: "Tài liệu dạy môn",
    width: "20%",
    textAlignment: "center",
    render: ({ linkResource }) => (
      <Anchor component="a" href={linkResource} target="_blank">
        {linkResource}
      </Anchor>
    ),
  },
];

type Props = {
  data: components["schemas"]["TARegistrationResponse"];
};

export default function TARegisterForm({ data }: Props) {
  return (
    <Stack>
      <SimpleGrid cols={2}>
        <Stack>
          <Title order={3} className="text-blue-600">
            Thông tin cá nhân
          </Title>
          <TextInput
            withAsterisk
            label="Họ và tên"
            placeholder="Họ và tên"
            disabled
            value={data?.userResponse?.fullName}
          />
          <TextInput
            withAsterisk
            label="Email"
            placeholder="Email"
            disabled
            value={data?.userResponse?.email}
          />
          <TextInput
            withAsterisk
            label="Số điện thoại"
            placeholder="Số điện thoại"
            disabled
            value={data?.userResponse?.phoneNumber}
          />
          <TextInput
            withAsterisk
            label="Mã số sinh viên"
            placeholder="Mã số sinh viên"
            value={data?.studentCode}
          />
          <TextInput
            withAsterisk
            label="Link facebook"
            placeholder="Link facebook"
            value={data?.linkFacebook}
          />
        </Stack>
        <Stack>
          <Title order={3} className="text-blue-600">
            Thông tin khác
          </Title>
          <TextInput
            label="Số điện thoại trợ giảng giới thiệu"
            placeholder="Số điện thoại"
            value={data?.referenceTAPhoneNumber}
          />
          <Title order={3} className="text-blue-600">
            Khảo sát về dạy học
          </Title>
          <Radio.Group
            name="experience"
            label="Bạn đã từng có kinh nghiệm trợ giảng chưa? "
            withAsterisk
            value={data?.usedToBeTA ? "yes" : "no"}
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
            value={data?.teachingExperience}
          />
        </Stack>
      </SimpleGrid>
      <DataTable
        minHeight={150}
        withBorder
        fontSize="md"
        withColumnBorders
        striped
        highlightOnHover
        records={data?.taSubjectRegisters || []}
        verticalSpacing="sm"
        noRecordsText="Không có dữ liệu"
        columns={columns}
      />
      <Flex gap="md">
        <RippleButton variant="outline" fullWidth color="red">
          Từ chối
        </RippleButton>
        <RippleButton variant="light" fullWidth color="yellow">
          Yêu cầu thay đổi
        </RippleButton>
        <RippleButton fullWidth color="green">
          Duyệt
        </RippleButton>
      </Flex>
    </Stack>
  );
}
