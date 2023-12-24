import { MouseEvent } from "react";
import { Anchor, AnchorProps } from "@mantine/core";

type Props = AnchorProps & {
  to: string | undefined;
};

export default function ExternalLink({ to, ...others }: Props) {
  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (to) window.open(to, "_blank");
  };

  return <Anchor {...others} onClick={handleClick} />;
}
