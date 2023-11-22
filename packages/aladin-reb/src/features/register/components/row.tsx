import { ReactNode } from "react";
import { Grid, Text } from "@mantine/core";

export const Row = ({
  label,
  value,
  cols,
}: {
  label?: ReactNode;
  value?: ReactNode;
  cols?: [number?, number?];
}) => (
  <Grid>
    <Grid.Col span={cols?.[0] || 2}>
      <Text weight="bold">{label}</Text>
    </Grid.Col>
    <Grid.Col span={cols?.[1] || 12 - (cols?.[0] || 2)}>{value}</Grid.Col>
  </Grid>
);
