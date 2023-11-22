import { LoadingOverlay } from "@mantine/core";

export default function Suspense() {
  return <LoadingOverlay visible overlayBlur={2} loaderProps={{ size: "lg", variant: "bars" }} />;
}
