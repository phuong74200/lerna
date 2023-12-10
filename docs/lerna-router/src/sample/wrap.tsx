import { Outlet } from "react-router-dom";

export const Wrapper = () => {
  return (
    <div>
      <h1>This is header of wrapper layout</h1>
      <Outlet />
    </div>
  );
};
