import { HTMLAttributes } from "react";
import { Button, ButtonProps } from "@mantine/core";

import { FLAGS, useFeatureFlag } from "@/configs/feature-flag";
import { GoogleIcon } from "@/features/auth/components/google-icon";

export function GoogleButton(props: ButtonProps & HTMLAttributes<HTMLButtonElement>) {
  const [googleAuth] = useFeatureFlag(FLAGS.GOOGLE_OAUTH);

  return (
    <Button
      disabled={!googleAuth}
      leftIcon={<GoogleIcon />}
      variant="default"
      color="gray"
      {...props}
    />
  );
}
