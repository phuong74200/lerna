import { Button, Center, Group, Image, Stack, Title } from "@mantine/core";

import { UseStepType } from "@/hooks/use-step";
import { generatePlaceHolderImage } from "@/utils/generate-place-holder-image";

export default function CourseStep3(props: UseStepType) {
  return (
    <Stack>
      <Title
        transform="uppercase"
        order={2}
        mt="md"
        weight="bold"
        align="center"
        className="w-full"
      >
        Thanh toán qua momo
      </Title>
      <Center mt="md">
        <Image src={generatePlaceHolderImage({ width: 300, height: 350 })} width={300} />
      </Center>
      <Group noWrap>
        <Button variant="outline">Quay lại</Button>
        <Button fullWidth onClick={props.next}>
          Xác nhận đã thanh toán
        </Button>
      </Group>
    </Stack>
  );
}
