import { generatePath, useParams } from "react-router-dom";
import {
  ActionIcon,
  Flex,
  Group,
  Image,
  Menu,
  Pagination,
  rem,
  Stack,
  Text,
  TextInput,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { IconDots, IconEdit, IconPlus, IconSearch } from "@tabler/icons-react";
import { DataTable, DataTableColumn } from "mantine-datatable";
import { uid } from "uid";

import { components } from "@/api/v1";
import useRedirect from "@/common/hooks/use-redirect";
import EditBtn from "@/common/ui/edit-btn";
import EmptyImage from "@/common/ui/empty-image";
import TableIndex from "@/common/ui/table-index";
import useGetAllMajorsOfInstitution from "@/features/major/services/use-get-all-majors-of-institution";
import useGetInstitutionById from "@/features/university/services/use-get-institution-by-id";
import RippleActionIcon from "@/modules/mantine-ripple/components/ripple-action-icon";
import RippleButton from "@/modules/mantine-ripple/components/ripple-button";

const MAJOR_PAGINATION_SIZE = 20;

const columns: DataTableColumn<components["schemas"]["MajorResponse"]>[] = [
  {
    accessor: "index",
    title: "STT",
    textAlignment: "center",
    render: (_, index) => <TableIndex index={index} pageSize={MAJOR_PAGINATION_SIZE} />,
    width: "10%",
  },
  { accessor: "name", title: "Tên khoa", width: "40%" },
  { accessor: "numberOfSubjects", title: "Số môn", width: "40%" },
  {
    accessor: "actions",
    title: "Tác vụ",
    width: "10%",
    textAlignment: "center",
    render: ({ majorId }) => (
      <EditBtn
        to={generatePath("/admin/major/:majorId/update", {
          majorId: `${majorId}`,
        })}
      />
    ),
  },
];

export default function ViewUniversityPage() {
  const theme = useMantineTheme();

  const { onRedirectWithState, redirect } = useRedirect();

  const { institutionId } = useParams<{
    institutionId: string;
  }>();

  const { data: institution } = useGetInstitutionById(institutionId);
  const {
    data: major,
    isFetching,
    range,
    pagination,
  } = useGetAllMajorsOfInstitution({
    path: {
      institution_id: institutionId || "",
    },
    query: {
      size: MAJOR_PAGINATION_SIZE,
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
          <Group align="start">
            <Image
              width={128}
              height={128}
              src={institution?.data?.image}
              radius="md"
              withPlaceholder
              placeholder={<EmptyImage />}
            />
            <div>
              <Title>{institution?.data?.name}</Title>
              <Text color="dimmed" w={448}>
                {institution?.data?.description || <i>Không có mô tả</i>}
              </Text>
            </div>
          </Group>
          <Flex gap="sm" align="end">
            <TextInput
              variant="filled"
              icon={<IconSearch size={theme.fontSizes.md} />}
              placeholder="Tìm kiếm"
            />
            <RippleButton
              onClick={onRedirectWithState("/admin/major/create", {
                state: {
                  institutionId,
                },
              })}
              leftIcon={<IconPlus size={theme.fontSizes.md} />}
            >
              Thêm khoa
            </RippleButton>
            <RippleActionIcon variant="filled" color="blue">
              <IconDots size={theme.fontSizes.lg} />
            </RippleActionIcon>
          </Flex>
        </Flex>
        <DataTable
          withBorder
          borderRadius="md"
          fontSize="md"
          withColumnBorders
          striped
          highlightOnHover
          records={major?.toArray() || []}
          fetching={isFetching}
          verticalSpacing="sm"
          noRecordsText="Không có dữ liệu"
          columns={columns}
          idAccessor={(record) => record.majorId ?? uid()}
          onRowClick={({ majorId }) =>
            redirect(
              generatePath("/admin/major/:majorId", {
                majorId: `${majorId}`,
              }),
            )
          }
        />
        <Flex justify="space-between" align="center">
          <Text size="sm">
            <b>
              {range[0]} đến {range[1]}
            </b>{" "}
            của {major?.totalElements}
          </Text>
          <Pagination
            total={major?.totalPages || 0}
            onChange={pagination.setPage}
            value={pagination.active}
          />
        </Flex>
      </Stack>
    </Stack>
  );
}
