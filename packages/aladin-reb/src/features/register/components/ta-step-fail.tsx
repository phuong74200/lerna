import { Anchor, Button, Center, Image, Text } from "@mantine/core";
import { IconArrowNarrowRight } from "@tabler/icons-react";

import { generatePlaceHolderImage } from "@/utils/generate-place-holder-image";

export default function TAStepFail() {
  return (
    <>
      <Center>
        <Image src={generatePlaceHolderImage({ width: 340, height: 340 })} width={340} />
      </Center>
      <Text size="lg" mt="lg" align="center">
        Đơn trở thành trợ giảng của bạn đã được Aladin xem qua và chưa được duyệt{" "}
        <Anchor component="div" size="lg" className="italic">
          “Lý do không được duyệt ở đây”
        </Anchor>
      </Text>
      <Center mt="lg">
        <Button variant="light" rightIcon={<IconArrowNarrowRight />}>
          Chỉnh sửa lại đơn đăng ký
        </Button>
      </Center>
    </>
  );
}
