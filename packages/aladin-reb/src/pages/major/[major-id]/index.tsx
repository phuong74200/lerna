import { generatePath, useParams } from "react-router-dom";
import {
  ActionIcon,
  Flex,
  Group,
  Menu,
  Pagination,
  rem,
  Stack,
  Text,
  TextInput,
  useMantineTheme,
} from "@mantine/core";
import { IconDots, IconEdit, IconPencil, IconPlus, IconSearch } from "@tabler/icons-react";
import { DataTable, DataTableColumn } from "mantine-datatable";

import { components } from "@/api/v1";
import useRedirect from "@/common/hooks/use-redirect";
import ExternalLink from "@/common/ui/external-link";
import NavigateButton from "@/common/ui/navigate-btn";
import TableIndex from "@/common/ui/table-index";
import { ACTION_ICON_SIZE } from "@/configs/icon";
import HideButton from "@/features/subject/components/hide-button";
import useGetAllSubjectOfMajor from "@/features/subject/services/get-all-subject-of-major";
import RippleActionIcon from "@/modules/mantine-ripple/components/ripple-action-icon";
import RippleButton from "@/modules/mantine-ripple/components/ripple-button";
import parseDec from "@/utils/parse-dec";

const SUBJECT_PAGINATION_SIZE = 20;

const columns: DataTableColumn<components["schemas"]["SubjectResponse"]>[] = [
  {
    accessor: "index",
    title: "STT",
    textAlignment: "center",
    render: (_, index) => <TableIndex index={index} pageSize={SUBJECT_PAGINATION_SIZE} />,
    width: "5%",
  },
  { accessor: "name", title: "Tên môn", width: "20%" },
  { accessor: "institutionName", title: "Tên trường", width: "20%" },
  { accessor: "majorName", title: "Tên khoa", width: "20%" },
  {
    accessor: "resource",
    title: "Tài liệu",
    width: "10%",
    textAlignment: "center",
    render: ({ resource }) =>
      resource ? <ExternalLink to={resource}>Xem</ExternalLink> : <i>Không có</i>,
  },
  {
    accessor: "exams",
    title: "Đề thi",
    width: "10%",
    textAlignment: "center",
    render: ({ exams }) => (exams ? <ExternalLink to={exams}>Xem</ExternalLink> : <i>Không có</i>),
  },
  {
    accessor: "ebook",
    title: "Ebook",
    width: "10%",
    textAlignment: "center",
    render: ({ ebook }) => (ebook ? <ExternalLink to={ebook}>Xem</ExternalLink> : <i>Không có</i>),
  },
  {
    accessor: "actions",
    title: "Tác vụ",
    width: "10%",
    textAlignment: "center",
    render: (domain) => (
      <Group noWrap spacing="sm">
        <NavigateButton
          variant="filled"
          color="blue"
          to={generatePath("/admin/subject/:subjectId/update", {
            subjectId: `${domain.subjectId}`,
          })}
        >
          <IconPencil size={ACTION_ICON_SIZE} fill="currentColor" />
        </NavigateButton>
        <HideButton domain={domain} />
      </Group>
    ),
  },
];

export default function ViewMajor() {
  const theme = useMantineTheme();

  const { onRedirectWithState } = useRedirect();

  const { majorId } = useParams<{
    majorId: string;
  }>();

  const {
    data: major,
    isFetching,
    range,
    pagination,
  } = useGetAllSubjectOfMajor({
    path: {
      major_id: parseDec(majorId),
    },
    query: {
      size: SUBJECT_PAGINATION_SIZE,
    },
  });

  return (
    <Stack className="flex h-0 w-full flex-1">
      <div className="absolute right-2 top-2">
        <Menu width={200} shadow="md">
          <Menu.Target>
            <ActionIcon>
              <IconDots size="1.125rem" />
            </ActionIcon>
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Item icon={<IconEdit size={rem(14)} />}>Chỉnh sửa thông tin</Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </div>
      <Stack className="flex-1">
        <Flex className="w-full justify-between align-middle">
          <Flex gap="sm" align="end" justify="space-between" className="w-full">
            <TextInput
              variant="filled"
              icon={<IconSearch size={theme.fontSizes.md} />}
              placeholder="Tìm kiếm"
            />
            <Flex gap="sm">
              <RippleButton
                leftIcon={<IconPlus size={theme.fontSizes.md} />}
                onClick={onRedirectWithState("/admin/subject/create", {
                  state: {
                    majorId,
                  },
                })}
              >
                Tạo môn mới
              </RippleButton>
              <RippleActionIcon variant="filled" color="blue">
                <IconDots size={theme.fontSizes.lg} />
              </RippleActionIcon>
            </Flex>
          </Flex>
        </Flex>
        <DataTable
          withBorder
          borderRadius="md"
          fontSize="md"
          withColumnBorders
          striped
          highlightOnHover
          records={major?.list || []}
          fetching={isFetching}
          verticalSpacing="sm"
          noRecordsText="Không có dữ liệu"
          columns={columns}
          idAccessor="subjectId"
        />
        <Flex justify="space-between" align="center">
          <Text size="sm">
            <b>
              {range[0]} đến {range[1]}
            </b>{" "}
            của {major?.pageNumber}
          </Text>
          <Pagination total={50} onChange={pagination.setPage} value={pagination.active} />
        </Flex>
      </Stack>
    </Stack>
  );
}
