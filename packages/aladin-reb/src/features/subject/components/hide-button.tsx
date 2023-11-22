import { MouseEvent } from "react";
import { Tooltip } from "@mantine/core";
import { IconEye, IconEyeOff } from "@tabler/icons-react";

import { components } from "@/api/v1";
import { ACTION_ICON_SIZE } from "@/configs/icon";
import useHideSubject from "@/features/subject/services/use-hide-subject";
import useRestoreSubject from "@/features/subject/services/use-restore-subject";
import RippleActionIcon from "@/modules/mantine-ripple/components/ripple-action-icon";

export default function HideButton({
  domain,
}: {
  domain: components["schemas"]["SubjectResponse"];
}) {
  const hide = useHideSubject();
  const restore = useRestoreSubject();

  const handleHide = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (domain.subjectId) hide.mutate(domain.subjectId);
  };

  const handleRestore = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (domain.subjectId) restore.mutate(domain.subjectId);
  };

  if (domain.status)
    return (
      <Tooltip label="Ẩn">
        <RippleActionIcon mx="auto" variant="filled" color="blue" onClick={handleHide}>
          <IconEye size={ACTION_ICON_SIZE} fill="currentColor" />
        </RippleActionIcon>
      </Tooltip>
    );

  return (
    <Tooltip label="Hiện">
      <RippleActionIcon mx="auto" variant="filled" color="blue" onClick={handleRestore}>
        <IconEyeOff size={ACTION_ICON_SIZE} fill="currentColor" />
      </RippleActionIcon>
    </Tooltip>
  );
}
