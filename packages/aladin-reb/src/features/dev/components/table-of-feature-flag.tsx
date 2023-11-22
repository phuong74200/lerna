import { ActionIcon, Popover, SimpleGrid, Switch } from "@mantine/core";
import { IconFlag2Filled } from "@tabler/icons-react";

import {
  Feature,
  FeatureFlag,
  FLAGS,
  useFeatureFlag,
  useFeatureFlagContext,
} from "@/configs/feature-flag";

interface FeatureSwitchProps {
  feature: Feature;
}

const FeatureSwitch = ({ feature }: FeatureSwitchProps) => {
  const [featureFlag, setFeatureFlag] = useFeatureFlag(feature);

  const handleSwitch = () => setFeatureFlag(!featureFlag);

  return <Switch label={feature} checked={featureFlag} onChange={handleSwitch} />;
};

export default function TableOfFeatureFlag() {
  const { featureFlags } = useFeatureFlagContext();

  return (
    <FeatureFlag feature={FLAGS.DEV}>
      <Popover
        position="left-end"
        shadow="md"
        transitionProps={{
          transition: "rotate-left",
        }}
      >
        <Popover.Target>
          <ActionIcon size={40} variant="filled" color="blue" radius="lg">
            <IconFlag2Filled size="1.5rem" />
          </ActionIcon>
        </Popover.Target>
        <Popover.Dropdown>
          <SimpleGrid cols={3}>
            {Object.keys(featureFlags).map((feature) => (
              <FeatureSwitch key={feature} feature={feature as Feature} />
            ))}
          </SimpleGrid>
        </Popover.Dropdown>
      </Popover>
    </FeatureFlag>
  );
}
