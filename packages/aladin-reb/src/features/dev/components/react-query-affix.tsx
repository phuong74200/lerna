import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { FeatureFlag, FLAGS } from "@/configs/feature-flag";

export default function ReactQueryAffix(props: Parameters<typeof ReactQueryDevtools>[0]) {
  return (
    <FeatureFlag feature={FLAGS.DEV}>
      <ReactQueryDevtools {...props} />
    </FeatureFlag>
  );
}
