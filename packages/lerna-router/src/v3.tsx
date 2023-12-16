import { ReactNode } from "react";
import { useLoaderData } from "react-router-dom";

export default class Routerv3 {
  page(...middlewares: ((response: (node: ReactNode) => void) => void)[]) {
    const route = {
      loader: async () => {
        let Render = null;

        const response = (node: ReactNode) => {
          Render = node;
        };

        for (const middleware of middlewares) {
          await middleware(response);
        }

        return Render;
      },

      Component: () => {
        const Render = useLoaderData() as ReactNode;
        return Render;
      },
    };

    return route;
  }
}
