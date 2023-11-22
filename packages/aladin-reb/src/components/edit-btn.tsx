import { MouseEvent } from "react";
import { Tooltip } from "@mantine/core";
import { IconPencil } from "@tabler/icons-react";

import { ACTION_ICON_SIZE } from "@/configs/icon";
import useRedirect from "@/hooks/use-redirect";
import RippleActionIcon from "@/modules/mantine-ripple/components/ripple-action-icon";

type Props = {
  to?: string | undefined;
};

export default function EditBtn({ to }: Props) {
  const { redirectWithState } = useRedirect();

  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    redirectWithState(to);
  };

  return (
    <Tooltip label="Chỉnh sửa">
      <RippleActionIcon mx="auto" variant="filled" color="blue" onClick={handleClick}>
        <IconPencil size={ACTION_ICON_SIZE} fill="currentColor" />
      </RippleActionIcon>
    </Tooltip>
  );
}
