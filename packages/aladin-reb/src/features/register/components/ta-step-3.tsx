import { Button, Center, Image, Text } from "@mantine/core";
import { IconArrowNarrowRight } from "@tabler/icons-react";

import useRedirect from "@/hooks/use-redirect";
import { generatePlaceHolderImage } from "@/utils/generate-place-holder-image";

export default function TAStep3() {
  const { onRedirect } = useRedirect();

  return (
    <>
      <Center mt="md">
        <Image src={generatePlaceHolderImage({ width: 340, height: 340 })} width={340} />
      </Center>
      <Text size="lg" mt="lg" align="center">
        Đơn đăng ký của bạn đã được gửi thành công
        <br /> và đang chờ admin Aladin xét duyệt trong tối đa{" "}
        <Text size="lg" component="span" weight="bold">
          5 ngày
        </Text>
      </Text>
      <Center mt="lg">
        <Button onClick={onRedirect("revise")} variant="light" rightIcon={<IconArrowNarrowRight />}>
          Xem lại đơn đăng ký
        </Button>
      </Center>
    </>
  );
}
