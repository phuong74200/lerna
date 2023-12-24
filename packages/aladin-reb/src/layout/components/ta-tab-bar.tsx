import { useLocation } from "react-router-dom";
import { Center, SegmentedControl } from "@mantine/core";

import useRedirect from "@/common/hooks/use-redirect";

export default function TATabBar() {
  const redirect = useRedirect();
  const location = useLocation();

  return (
    <Center mb="md">
      <SegmentedControl
        value={location.pathname}
        onChange={redirect.redirect}
        data={[
          { label: "Nhóm ghép", value: "/assembled-class" },
          { label: "Nhóm riêng", value: "/private-class" },
          { label: "Lớp học", value: "/class" },
        ]}
      />
    </Center>
  );
}
