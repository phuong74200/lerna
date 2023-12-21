import { Outlet } from "react-router-dom";

import DevPanel from "@/features/dev/components/dev-panel";

export default function Dev() {
  return (
    <>
      <DevPanel className="bottom-0 right-0 p-2" />
      <Outlet />
    </>
  );
}
