import { MouseEvent } from "react";
import { Anchor, AnchorProps } from "@mantine/core";

import useRedirect from "@/common/hooks/use-redirect";

interface Props {
  src: string | undefined;
  label: string;

  anchorProps?: AnchorProps;
}

export default function ImageView({ src, label, anchorProps }: Props) {
  const { redirectWithState } = useRedirect();

  const openImage = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    redirectWithState(`/image/${src}`);
  };

  if (!src) return "Chưa có hình";

  return (
    <Anchor onClick={openImage} {...anchorProps}>
      {label}
    </Anchor>
  );
}
