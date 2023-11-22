import { Center, Paper, PaperProps } from "@mantine/core";
import { IconPhotoOff } from "@tabler/icons-react";

export default function EmptyImage(props: PaperProps) {
  return (
    <Paper radius="md" className="h-full w-full" bg="gray.2" {...props}>
      <Center className="h-full w-full">
        <IconPhotoOff />
      </Center>
    </Paper>
  );
}
