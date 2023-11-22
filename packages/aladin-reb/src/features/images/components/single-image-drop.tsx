import { ReactNode } from "react";
import { Box, Stack, Text, Title } from "@mantine/core";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";

import RadioWithImage from "@/components/radio-with-image";
import useImageDrop from "@/hooks/use-image-drop";
import convertFileSize from "@/utils/convert-file-size";
import emptyFn from "@/utils/empty-fn";

interface Props {
  onDrop?: (file: string) => void;
  title?: ReactNode;
  description?: ReactNode;
}

export default function SingleImageDrop({ onDrop = emptyFn, description, title }: Props) {
  const { handleDrop, files } = useImageDrop({
    onDrop: (files) => onDrop(files[0].name),
  });

  return (
    <Stack>
      <Dropzone multiple={false} onDrop={handleDrop} accept={IMAGE_MIME_TYPE} radius="md">
        <Box className="h-full w-full">
          <Title order={5} mb="xs">
            {title}
          </Title>
          <Text>{description}</Text>
        </Box>
      </Dropzone>
      {files.length > 0 && (
        <RadioWithImage.Group value={files[0]?.name}>
          <Stack>
            {files.map((file, index) => (
              <RadioWithImage
                value={file.name}
                image={URL.createObjectURL(file)}
                key={index}
                label={file.name}
                description={`${convertFileSize(file.size, "B", "KB")} KB`}
              />
            ))}
          </Stack>
        </RadioWithImage.Group>
      )}
    </Stack>
  );
}
