import { ReactNode } from "react";
import {
  LoaderFunctionArgs as _LoaderFunctionArgs,
  NonIndexRouteObject,
} from "react-router-dom";

export type RouteObject = Omit<NonIndexRouteObject, "id"> & {
  id: string;
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
  id: string;
};

export interface Response extends NodeJS.fetch._Response {}
export type DataFunctionValue = Response | NonNullable<unknown> | null;

export interface LoaderFunction {
  (args: LoaderFunctionArgs): Promise<DataFunctionValue> | DataFunctionValue;
}
