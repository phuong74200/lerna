import useRedirect from "@/hooks/use-redirect";
import RippleButton from "@/modules/mantine-ripple/components/ripple-button";

export default function PreviewComponent() {
  const { onRedirectWithState } = useRedirect();

  return <RippleButton onClick={onRedirectWithState("/preview")}>Redirect</RippleButton>;
}
