import { useCallback, useState } from "react";
import { v4 } from "uuid";

export type RippleType = {
  key: React.Key;
  x: number;
  y: number;
  size: number;
};

export function useRipple() {
  const [ripples, setRipples] = useState<RippleType[]>([]);

  const onClick = useCallback((event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const trigger = event.currentTarget;

    const size = Math.max(trigger.clientWidth, trigger.clientHeight);
    const rect = trigger.getBoundingClientRect();

    setRipples((prevRipples) => [
      ...prevRipples,
      {
        key: v4(),
        size,
        x: event.clientX - rect.x - size / 2,
        y: event.clientY - rect.y - size / 2,
      },
    ]);
  }, []);

  const onClear = useCallback((key: React.Key) => {
    setRipples((prevState) => prevState.filter((ripple) => ripple.key !== key));
  }, []);

  return { ripples, onClick, onClear };
}

export type UseRippleReturn = ReturnType<typeof useRipple>;
