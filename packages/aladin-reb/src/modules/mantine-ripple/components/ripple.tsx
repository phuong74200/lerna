import { FC, HTMLProps } from "react";
import { AnimatePresence, HTMLMotionProps, motion } from "framer-motion";

export type RippleType = {
  key: React.Key;
  x: number;
  y: number;
  size: number;
};

export interface RippleProps extends HTMLProps<"span"> {
  ripples: RippleType[];
  color?: string;
  motionProps?: HTMLMotionProps<"span">;
  style?: React.CSSProperties;
  onClear: (key: React.Key) => void;
}

const clamp = (value: number, min: number, max: number) => {
  return Math.min(Math.max(value, min), max);
};

const Ripple: FC<RippleProps> = (props) => {
  const { ripples = [], motionProps, color = "currentColor", style, onClear } = props;

  return (
    <>
      {ripples.map((ripple) => {
        const duration = clamp(0.01 * ripple.size, 0.2, ripple.size > 100 ? 0.75 : 0.5);

        return (
          <AnimatePresence key={ripple.key} mode="popLayout">
            <motion.span
              animate={{ transform: "scale(2)", opacity: 0 }}
              className="nextui-ripple"
              exit={{ opacity: 0 }}
              initial={{ transform: "scale(0)", opacity: 0.35 }}
              style={{
                position: "absolute",
                backgroundColor: color,
                borderRadius: "100%",
                transformOrigin: "center",
                pointerEvents: "none",
                zIndex: 10,
                top: ripple.y,
                left: ripple.x,
                width: `${ripple.size}px`,
                height: `${ripple.size}px`,
                ...style,
              }}
              transition={{ duration }}
              onAnimationComplete={() => {
                onClear(ripple.key);
              }}
              {...motionProps}
            />
          </AnimatePresence>
        );
      })}
    </>
  );
};

export default Ripple;
