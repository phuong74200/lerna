import { Center, Image, Text, Title } from "@mantine/core";

import { generatePlaceHolderImage } from "@/utils/generate-place-holder-image";

export default function TAStepcomplete() {
  return (
    <>
      <Center>
        <Image src={generatePlaceHolderImage({ width: 340, height: 340 })} width={340} />
      </Center>
      <Title mt="lg" order={2} className="text-blue-700 text-center">
        Chúc mừng bạn
      </Title>
      <Text size="lg" align="center" mt="sm">
        Chúc mừng bạn! Đơn trở thành trợ giảng của bạn đã được duyệt thành công
        <br /> Aladin sẽ liên hệ xác nhận hợp tác với bạn trong thời gian sớm nhất
      </Text>
    </>
  );
}
