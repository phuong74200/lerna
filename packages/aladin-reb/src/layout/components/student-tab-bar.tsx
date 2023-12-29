import { memo } from "react";
import { useLocation } from "react-router-dom";
import { Center, SegmentedControl } from "@mantine/core";

import useRedirect from "@/common/hooks/use-redirect";
import { Path } from "@/router/path";

const StudentTabBar = () => {
  const { redirect } = useRedirect();
  const location = useLocation();

  return (
    <Center mb="md">
      <SegmentedControl
        value={location.pathname}
        onChange={(e) => redirect(e as Path)}
        data={[
          { label: "Nhóm ghép", value: "/assembled-class" },
          { label: "Lớp học", value: "/class" },
          { label: "Record", value: "/record" },
          { label: "Đã lưu", value: "/favorite" },
        ]}
      />
    </Center>
  );
};

export default memo(StudentTabBar);
