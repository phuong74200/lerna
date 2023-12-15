import { Outlet } from "react-router-dom";
import { MiddlewareFunction } from "lerna-router";

export const wrapperDecorator: MiddlewareFunction = () => {
  const Render = () => {
    return <Outlet />;
  };

  return {
    loader: async () => {},
    Component: Render,
  };
};
