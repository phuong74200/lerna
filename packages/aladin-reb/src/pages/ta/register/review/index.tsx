import { Text } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";

import { queryKeys } from "@/api";
import TARegisterForm from "@/features/ta/components/register-form";

export default function TARegisterReviewPage() {
  const { data } = useQuery({
    ...queryKeys.ta.register(),
  });

  if (!data) return <h1>Form not found</h1>;

  return (
    <>
      <Text my="lg" weight="bold" size="xl" align="center" transform="uppercase">
        XEM ĐƠN ĐĂNG KÝ HỢP TÁC DẠY HỌC TẠI ALADIN IU
      </Text>
      <TARegisterForm data={data} />
    </>
  );
}
