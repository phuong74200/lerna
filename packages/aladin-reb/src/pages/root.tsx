import { Navigate, useLoaderData } from "react-router-dom";

import useGetCurrentUser from "@/common/services/use-get-current-user";
import { currentUserLoader } from "@/loaders/current-user";

export const Root = () => {
  const userData = useLoaderData() as Awaited<ReturnType<ReturnType<typeof currentUserLoader>>>;

  const queryData = useGetCurrentUser(userData);

  if (queryData?.data) return <Navigate to="/admin" replace={true} />;

  return <Navigate to="/login" replace={true} />;
};
