import { generatePath } from "react-router-dom";
import {
  Container,
  Flex,
  Image,
  Pagination,
  Stack,
  Text,
  TextInput,
  useMantineTheme,
} from "@mantine/core";
import { IconPencil, IconPlus, IconSearch } from "@tabler/icons-react";
import { DataTable, DataTableColumn } from "mantine-datatable";

import useRedirect from "@/common/hooks/use-redirect";
import EmptyImage from "@/common/ui/empty-image";
import NavigateButton from "@/common/ui/navigate-btn";
import TableIndex from "@/common/ui/table-index";
import { ACTION_ICON_SIZE } from "@/configs/icon";
import { Institution } from "@/domains/insitution";
import ImageView from "@/features/university/components/image-view";
import useGetAllInstitution from "@/features/university/services/use-get-all-institution";
import RippleButton from "@/modules/mantine-ripple/components/ripple-button";

const INSITUTION_PAGE_SIZE = 20;

const columns: DataTableColumn<Institution>[] = [
  {
    accessor: "index",
    title: "STT",
    textAlignment: "center",
    render: (_, index) => <TableIndex index={index} pageSize={INSITUTION_PAGE_SIZE} />,
    width: "8%",
  },
  {
    accessor: "image-preview",
    title: "Logo",
    textAlignment: "center",
    render: ({ image }) => (
      <Image src={image} withPlaceholder placeholder={<EmptyImage bg="transparent" />} />
    ),
    width: "60px",
  },
  { accessor: "institutionId", title: "Tên trường", width: "20%" },
  { accessor: "name", title: "Tên chi tiết", width: "40%" },
  {
    accessor: "image-detail",
    title: "Hỉnh ảnh",
    textAlignment: "center",
    render: ({ image }) => <ImageView label="Xem hình" src={image} />,
    width: "10%",
  },
  {
    accessor: "numberOfMajors",
    title: "Số khoa",
    textAlignment: "center",
    width: "10%",
  },
  {
    accessor: "actions",
    title: "Tác vụ",
    width: "10%",
    textAlignment: "center",
    render: ({ institutionId }) => (
      <NavigateButton
        color="blue"
        mx="auto"
        to={generatePath("/admin/institution/update/:institutionId", {
          institutionId: `${institutionId}`,
        })}
      >
        <IconPencil size={ACTION_ICON_SIZE} fill="currentColor" />
      </NavigateButton>
    ),
  },
];

export default function ListUniversityPage() {
  const theme = useMantineTheme();
  const { redirect, onRedirectWithState } = useRedirect();

  const { data, pagination, isFetching, range } = useGetAllInstitution(INSITUTION_PAGE_SIZE);

  return (
    <Container my="lg" size="xl" className="flex h-0 w-full flex-1">
      <Stack className="flex-1">
        <Flex justify="space-between" align="center">
          <TextInput
            variant="filled"
            icon={<IconSearch size={theme.fontSizes.md} />}
            placeholder="Tìm kiếm"
          />
          <RippleButton
            onClick={onRedirectWithState("create")}
            leftIcon={<IconPlus size={theme.fontSizes.md} />}
          >
            Thêm trường
          </RippleButton>
        </Flex>
        <DataTable
          withBorder
          borderRadius="md"
          fontSize="md"
          withColumnBorders
          striped
          highlightOnHover
          records={data?.list.toArray()}
          fetching={isFetching}
          verticalSpacing="sm"
          noRecordsText="Không có dữ liệu"
          columns={columns}
          onRowClick={({ institutionId }) => redirect(institutionId)}
          idAccessor="institutionId"
        />
        <Flex justify="space-between" align="center">
          <Text size="sm">
            <b>
              {range[0]} đến {range[1]}
            </b>{" "}
            của {data?.totalPages}
          </Text>
          <Pagination total={50} onChange={pagination.setPage} value={pagination.active} />
        </Flex>
      </Stack>
    </Container>
  );
}
