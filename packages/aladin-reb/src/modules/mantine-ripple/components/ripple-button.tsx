import { HTMLAttributes } from "react";
import { Button, ButtonProps, clsx } from "@mantine/core";

import Ripple from "@/modules/mantine-ripple/components/ripple";
import { useRipple } from "@/modules/mantine-ripple/hooks/use-ripple";
import emptyFn from "@/utils/empty-fn";

type Props = HTMLAttributes<HTMLButtonElement> &
  ButtonProps & {
    wrapperClassName?: string;
  };

export default function RippleButton({ children, wrapperClassName, ...others }: Props) {
  const { onClick: onRippleClickHandler, onClear: onClearRipple, ripples } = useRipple();

  return (
    <div
      className={clsx("relative overflow-hidden", wrapperClassName)}
      onClick={onRippleClickHandler}
      onKeyDown={emptyFn}
      tabIndex={0}
      role="button"
    >
      <Ripple onClear={onClearRipple} ripples={ripples}></Ripple>

      <Button {...others}>{children}</Button>
    </div>
  );
}
