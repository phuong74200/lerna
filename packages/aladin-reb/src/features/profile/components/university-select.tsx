import CustomSelect, { CustomSelectProps } from "@/components/custom-select";
import { FeatureFlag, FLAGS } from "@/configs/feature-flag";
import useGetAllInstitution from "@/features/university/services/use-get-all-institution";

export default function UniversitySelect(props: Omit<CustomSelectProps, "data">) {
  const { data } = useGetAllInstitution();

  return (
    <FeatureFlag feature={FLAGS.PROFILE}>
      <CustomSelect
        label="Bạn đang học tại"
        placeholder="Nơi đang học"
        data={data?.list.toSelectList() || []}
        {...props}
      />
    </FeatureFlag>
  );
}
