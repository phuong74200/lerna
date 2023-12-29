import { HTMLAttributes } from "react";
import { Button, ButtonProps } from "@mantine/core";

import Ripple from "@/modules/mantine-ripple/components/ripple";
import { useRipple } from "@/modules/mantine-ripple/hooks/use-ripple";

type Props = HTMLAttributes<HTMLButtonElement> & ButtonProps;

export default function RippleButton({ children, onClick, ...others }: Props) {
  const { onClick: onRippleClickHandler, onClear: onClearRipple, ripples } = useRipple();

  return (
    <Button
      pos="relative"
      className="overflow-hidden"
      {...others}
      onClick={(e) => {
        onClick?.(e);
        onRippleClickHandler(e);
      }}
    >
      {children}
      <Ripple onClear={onClearRipple} ripples={ripples} />
    </Button>
  );
}
