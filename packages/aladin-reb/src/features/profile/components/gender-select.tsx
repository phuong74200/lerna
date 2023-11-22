import { Select, SelectProps } from "@mantine/core";

const genders = [
  {
    label: "Nam",
    value: "male",
  },
  {
    label: "Nữ",
    value: "female",
  },
  {
    label: "Khác",
    value: "other",
  },
];

export default function GenderSelect(props: Omit<SelectProps, "data">) {
  return <Select data={genders} label="Giới tính" {...props} />;
}
