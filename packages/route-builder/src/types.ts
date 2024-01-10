import { ComponentType, ReactNode } from "react";
import {
  LoaderFunctionArgs as _LoaderFunctionArgs,
  NonIndexRouteObject,
} from "react-router-dom";

export type RouteObject = Omit<
  NonIndexRouteObject,
  "id" | "path" | "children"
> & {
  id: string;
  path: string;
  children: RouteObject[];

  parent?: {
    $ref: RouteObject;
    at: number;
  };

  sibling?: RouteObject;
};

export type RouteMap = Record<string, RouteObject>;

export type Context = {
  floated: boolean;
};

export type Handler = (
  req: Map<string, Context>,
  next: () => string,
) => ReactNode;

export type LoaderFunctionArgs = Omit<
  _LoaderFunctionArgs<Map<string, Context>> & NonIndexRouteObject,
  "context"
> & {
  context: Map<string, Context>;
  id: string | undefined;
};

export type DataFunctionValue = Response | NonNullable<unknown> | null;

export interface LoaderFunction {
  (args: LoaderFunctionArgs): Promise<DataFunctionValue> | DataFunctionValue;
}

export type RouteOptions = Omit<
  NonIndexRouteObject,
  "path" | "id" | "loader" | "children" | "element" | "Component"
>;

export enum RouteType {
  PAGE = "page",
  PANE = "pane",
}

export type Route = RouteObject | string;

export type ResolvePath = {
  segments: string[];
  parent: ResolvePath | null;
  url: string;
  relative: string;
};

export type NextData = {
  path: string;
  loader: LoaderFunction | null;
  Component: ComponentType;
  options?: Partial<RouteObject>;
};

export type MiddlewareFunction = () => Partial<
  Omit<RouteObject, "children" | "path" | "id" | "parent">
>;
