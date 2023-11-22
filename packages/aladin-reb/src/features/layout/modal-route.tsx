import { useLocation, useRoutes } from "react-router-dom";

import { modalRoutes, normalRoutes } from "@/router";

export default function ModalRoute() {
  const location = useLocation();
  const background = location.state && location.state.background;

  const element = useRoutes(normalRoutes, background || location);
  const element2 = useRoutes(modalRoutes);

  return (
    <>
      {element}
      {background && element2}
    </>
  );
}
