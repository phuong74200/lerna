import { ComponentType } from "react";
import { LoaderFunction, Outlet } from "react-router-dom";
import { nanoid } from "nanoid";

import { RouteMap, RouteObject } from "@/types";

export enum RouteType {
  PAGE = "page",
  PANE = "pane",
}

type ResolvePath = {
  segments: string[];
  parent: ResolvePath | null;
  url: string;
  relative: string;
};

function createEmptyRoute(path: string = "/", override?: Partial<RouteObject>) {
  return {
    path: path,
    Component: Outlet,
    children: [],
    id: nanoid(),
    ...override,
  };
}

function stdRelativePath(path: string) {
  return path.replace(/^\/+|\/+$/g, "");
}

function resolvePath(path: string): ResolvePath {
  const stdPath = stdRelativePath(path);
  const segments = stdPath.split("/");
  const parent =
    path === "" ? null : resolvePath(segments.slice(0, -1).join("/"));

  return {
    segments,
    parent,
    url: stdPath || "/",
    relative: segments[segments.length - 1],
  };
}

export default class Router {
  private map: Record<RouteType, RouteMap> = {
    [RouteType.PAGE]: {},
    [RouteType.PANE]: {},
  };

  private route: Record<RouteType, RouteObject[]> = {
    [RouteType.PAGE]: [],
    [RouteType.PANE]: [],
  };

  paths: {
    path: string;
  }[] = [];

  constructor() {
    this.map[RouteType.PAGE]["/"] = createEmptyRoute();
    this.map[RouteType.PANE]["/"] = createEmptyRoute();

    this.route[RouteType.PAGE].push(this.map.page["/"]);
    this.route[RouteType.PANE].push(this.map.pane["/"]);
  }

  createRoute(
    type: RouteType,
    path: string,
    loader: LoaderFunction | null,
    Component: ComponentType,
  ) {
    const { url, relative } = resolvePath(path);

    const route = createEmptyRoute(url, {
      path: relative,
      Component,
      loader: loader || (() => null),
    });

    console.log(resolvePath(path));

    this.map[type][url] = route;
    this.route[type].push(route);
  }
}
