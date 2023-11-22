import { Affix, AffixProps, Stack } from "@mantine/core";

import { FeatureFlag, FLAGS } from "@/configs/feature-flag";
import ReactQueryAffix from "@/features/dev/components/react-query-affix";
import TableOfFeatureFlag from "@/features/dev/components/table-of-feature-flag";
import TableOfRoleAffix from "@/features/dev/components/table-of-role-affix";
import TableOfRouteAffix from "@/features/dev/components/table-of-route-affix";

export default function DevPanel(props: AffixProps) {
  return (
    <FeatureFlag feature={FLAGS.DEV}>
      <Affix {...props}>
        <Stack spacing="md">
          <TableOfFeatureFlag />
          <TableOfRoleAffix />
          <TableOfRouteAffix />
          <ReactQueryAffix toggleButtonProps={{ className: "!static !p-0 !m-0" }} />
        </Stack>
      </Affix>
    </FeatureFlag>
  );
}
