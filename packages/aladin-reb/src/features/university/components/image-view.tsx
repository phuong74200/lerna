import { MouseEvent } from "react";
import { generatePath } from "react-router-dom";
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

    if (src)
      redirectWithState(
        generatePath(`/image/:imageId`, {
          imageId: src,
        }),
      );
  };

  if (!src) return "Chưa có hình";

  return (
    <Anchor onClick={openImage} {...anchorProps}>
      {label}
    </Anchor>
  );
}
