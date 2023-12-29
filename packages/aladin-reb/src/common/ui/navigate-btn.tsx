import { HTMLAttributes, MouseEvent, ReactNode } from "react";
import { ActionIconProps } from "@mantine/core";

import useRedirect from "@/common/hooks/use-redirect";
import RippleActionIcon from "@/modules/mantine-ripple/components/ripple-action-icon";
import { Path } from "@/router/path";

type Props = ActionIconProps &
  HTMLAttributes<Element> & {
    to?: Path;
    children: ReactNode;
  };

export default function NavigateButton({ to, children, onClick, ...actionIconProps }: Props) {
  const { redirectWithState } = useRedirect();

  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    onClick?.(e);

    redirectWithState(to);
  };

  return (
    // <Tooltip label={label} disabled={!label}>
    <RippleActionIcon variant="filled" {...actionIconProps} onClick={handleClick}>
      {children}
    </RippleActionIcon>
    // </Tooltip>
  );
}
