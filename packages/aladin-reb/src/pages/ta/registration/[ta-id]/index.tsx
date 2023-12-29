import { useParams } from "react-router-dom";
import { Image } from "@mantine/core";

import { ASSET_RED_CLIPBOARD } from "@/assets";
import Loading from "@/common/ui/loading";
import TARegisterForm from "@/features/ta/components/register-form";
import useGetTARegistration from "@/features/ta/services/use-get-ta-registration";

export default function AdminViewTARegistrationPage() {
  const { taId } = useParams();

  const { data, isFetching } = useGetTARegistration(taId || "");

  if (isFetching)
    return (
      <div className="h-[765.98px] w-full">
        <Loading />
      </div>
    );

  if (!data) return <Image src={ASSET_RED_CLIPBOARD} />;

  return <TARegisterForm data={data} />;
}
