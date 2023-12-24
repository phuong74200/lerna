import { RouteObject, useMatch } from "react-router-dom";
import { Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconChevronDown } from "@tabler/icons-react";

import useRedirect from "@/common/hooks/use-redirect";
import CollapseList, { CollapseListProps } from "@/common/ui/collapse-list";
import { FeatureFlag, FLAGS } from "@/configs/feature-flag";
import getPathName from "@/features/dev/utils/get-path-name";
// import { getTree } from "@/router";

interface CustomCollapseListProps extends Partial<CollapseListProps> {
  children?: React.ReactNode;
  path?: string;
}

const CustomCollapseList = ({ children, path, ...others }: CustomCollapseListProps) => {
  const [opened, { toggle }] = useDisclosure(true);
  const matchPath = useMatch(path || "");

  return (
    <CollapseList
      opened={opened}
      className="data-[active=true]:bg-slate-300 font-mono"
      data-active={Boolean(matchPath)}
      icon={
        <IconChevronDown
          size={12}
          onClick={toggle}
          data-opened={opened}
          data-disabled={!children}
          className="cursor-pointer transition-all data-[disabled=true]:pointer-events-none data-[opened=true]:rotate-180 data-[disabled=true]:opacity-50"
        />
      }
      {...others}
    >
      {children}
    </CollapseList>
  );
};

const BuildTree = ({ tree }: { tree: RouteObject[] }) => {
  const { onRedirect } = useRedirect();

  return tree.map((item, index) => {
    return (
      <CustomCollapseList
        key={(item.path || 0) + index.toString()}
        path={item.path}
        title={
          <Text className="cursor-pointer font-mono" span onClick={onRedirect(item.path)}>
            {getPathName(item.path) || "[empty]"}
          </Text>
        }
      >
        {item.children && <BuildTree tree={item.children} />}
      </CustomCollapseList>
    );
  });
};

export default function TableOfRouteAffix() {
  return (
    <FeatureFlag feature={FLAGS.DEV}>
      {/* <Popover
        width={400}
        position="left-end"
        shadow="md"
        transitionProps={{
          transition: "rotate-left",
        }}
      >
        <Popover.Target>
          <ActionIcon size={40} variant="filled" color="blue" radius="lg">
            <IconListTree size="1.5rem" />
          </ActionIcon>
        </Popover.Target>
        <Popover.Dropdown>
          <ScrollArea h="50vh">
            <List>
              <BuildTree tree={getTree()} />
            </List>
          </ScrollArea>
        </Popover.Dropdown>
      </Popover> */}
    </FeatureFlag>
  );
}
