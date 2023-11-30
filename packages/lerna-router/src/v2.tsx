import { Outlet } from "react-router-dom";
import { nanoid } from "nanoid";

import { Context, RouteMap, RouteObject } from "@/types";

type RouteType = "pane" | "page" | "both";

type Path = `${RouteType} ${string}`;

type ResolvePath = {
  segments: string[];
  parent: ResolvePath | null;
  value: string;
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
    value: stdPath || "/",
    relative: segments[segments.length - 1],
  };
}

function mutate<T extends object>(target: T, overide: Partial<T>) {
  return Object.assign(target, overide);
}

export default class Router {
  private context: Map<string, Context> = new Map();

  private map: Record<RouteType, RouteMap> = {
    pane: {},
    page: {},
    both: {},
  };

  private route: Record<RouteType, RouteObject[]> = {
    pane: [],
    page: [],
    both: [],
  };

  constructor() {
    this.map.page["/"] = createEmptyRoute();
    this.map.pane["/"] = createEmptyRoute();
    this.map.both["/"] = createEmptyRoute();

    this.route.page.push(this.map.page["/"]);
    this.route.pane.push(this.map.pane["/"]);
    this.route.both.push(this.map.both["/"]);
  }

  createRoute(type: RouteType, route: RouteObject) {
    const { parent, value, relative } = resolvePath(route.path);

    let parentRoute = parent ? this.map[type][parent.value] : null;

    if (!parentRoute && parent?.value)
      parentRoute = this.createRoute(type, createEmptyRoute(parent.value));

    const newRoute: RouteObject = {
      ...route,
      path: relative,
      children: [],
      id: nanoid(),
    };

    if (parentRoute) {
      parentRoute.children.push(newRoute);
    }

    this.map[type][value] = newRoute;

    return newRoute;
  }

  get(path: Path) {}
}
