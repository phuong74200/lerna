import { PropsWithChildren } from "react";
import { Title } from "@mantine/core";

export const ControlTitle = ({ children }: PropsWithChildren) => (
  <Title color="blue" order={4}>
    {children}
  </Title>
);
