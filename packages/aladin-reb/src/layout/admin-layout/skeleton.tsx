import { Flex, Skeleton, Stack } from "@mantine/core";

export default function AdminLayoutSkeleton() {
  return (
    <Stack className="flex h-0 w-full flex-1">
      <Flex justify="space-between" align="center">
        <Skeleton height={37} w={300} />
        <Skeleton height={37} w={50} />
      </Flex>
      <Skeleton className="h-full" />
    </Stack>
  );
}
