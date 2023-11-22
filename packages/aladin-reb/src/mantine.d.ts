import { DefaultMantineColor } from "@mantine/core";

type ExtendedCustomColors = "aladin-blue" | "aladin-neutral" | DefaultMantineColor;

declare module "@mantine/core" {
  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedCustomColors, Tuple<string, 10>>;
  }
}
