import { forwardRef, HTMLAttributes } from "react";
import { ActionIcon, ActionIconProps, clsx } from "@mantine/core";

import Ripple from "@/modules/mantine-ripple/components/ripple";
import { useRipple } from "@/modules/mantine-ripple/hooks/use-ripple";

type Props = HTMLAttributes<HTMLButtonElement> & ActionIconProps;

const RippleActionIcon = forwardRef<HTMLButtonElement, Props>(
  ({ onClick, children, className, ...others }, ref) => {
    const { onClick: onRippleClickHandler, onClear: onClearRipple, ripples } = useRipple();

    return (
      <ActionIcon
        className={clsx("relative overflow-hidden", className)}
        onClick={(e) => {
          onRippleClickHandler(e);
          onClick?.(e);
        }}
        ref={ref}
        {...others}
      >
        {children}
        <Ripple onClear={onClearRipple} ripples={ripples}></Ripple>
      </ActionIcon>
    );
  },
);

export default RippleActionIcon;
