import { ActionIcon, Popover, SimpleGrid } from "@mantine/core";
import { IconUserCircle } from "@tabler/icons-react";

import RadioWithImage from "@/common/ui/radio-with-image";
import { FeatureFlag, FLAGS } from "@/configs/feature-flag";
import { useAuthContext } from "@/features/auth/contexts/auth";
import { Role } from "@/types/enums/role";

export default function TableOfRoleAffix() {
  const { handleRoleChange, role } = useAuthContext();

  return (
    <FeatureFlag feature={FLAGS.DEV}>
      <Popover
        width={400}
        position="left-end"
        shadow="md"
        transitionProps={{
          transition: "rotate-left",
        }}
      >
        <Popover.Target>
          <ActionIcon size={40} variant="filled" color="blue" radius="lg">
            <IconUserCircle size="1.5rem" />
          </ActionIcon>
        </Popover.Target>
        <Popover.Dropdown>
          <RadioWithImage.Group
            name="favoriteFramework"
            label="Select your favorite framework/library"
            description="This is anonymous"
            withAsterisk
            onChange={handleRoleChange}
            value={role}
          >
            <SimpleGrid cols={2} spacing="lg">
              <RadioWithImage
                title="TA"
                image="https://cdn3d.iconscout.com/3d/free/thumb/free-teacher-explaining-while-sitting-on-armchair-6346494-5231017.png?f=webp"
                value={Role.TA}
              />
              <RadioWithImage
                title="Student"
                image="https://cdn3d.iconscout.com/3d/premium/thumb/student-studying-on-laptop-while-sitting-on-big-books-5711045-4779537.png?f=webp"
                value={Role.STUDENT}
              />
            </SimpleGrid>
          </RadioWithImage.Group>
        </Popover.Dropdown>
      </Popover>
    </FeatureFlag>
  );
}
