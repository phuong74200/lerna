/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from "react";
import { useLoaderData } from "react-router-dom";

type ResponseFunction = (node: ReactNode) => void;
type ContextObject = Record<string, any>;
type MiddlewareFunction<T extends ContextObject> = (
  response: ResponseFunction,
  ctx: T,
) => unknown;

export function pagev3<T extends ContextObject>(
  ...middlewares: MiddlewareFunction<T>[]
) {
  const context: T = {} as T;

  const route = {
    loader: async () => {
      let Render = null;

      const response = (node: ReactNode) => {
        Render = node;
      };

      for (const middleware of middlewares) {
        await middleware(response, context);
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
