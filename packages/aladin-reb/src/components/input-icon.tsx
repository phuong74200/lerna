import { TablerIconsProps } from "@tabler/icons-react";

type Props = {
  Render: (props: TablerIconsProps) => JSX.Element;
};

export default function InputIcon({ Render }: Props) {
  return <Render size="1.125rem" />;
}
