import { MouseEvent } from "react";
import { Tooltip } from "@mantine/core";
import { IconPencil } from "@tabler/icons-react";

import useRedirect from "@/common/hooks/use-redirect";
import { ACTION_ICON_SIZE } from "@/configs/icon";
import RippleActionIcon from "@/modules/mantine-ripple/components/ripple-action-icon";
import { Path } from "@/router/path";

type Props = {
  to?: Path | undefined;
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
