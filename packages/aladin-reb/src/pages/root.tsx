import { Navigate, useLoaderData } from "react-router-dom";

import { currentUserLoader } from "@/loaders/current-user";

export const Root = () => {
  const userData = useLoaderData() as Awaited<ReturnType<ReturnType<typeof currentUserLoader>>>;

  if (userData) return <Navigate to="/admin" replace={true} />;

  return <Navigate to="/login" replace={true} />;
};
