import { ComponentType } from "react";
import { LoaderFunction, Outlet } from "react-router-dom";
import { nanoid } from "nanoid";

import { Context, RouteMap, RouteObject } from "@/types";

type RouteType = "pane" | "page";

type Path = `${RouteType} ${string}`;

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

function parsePath(path: Path) {
  const [type, ...segments] = path.split(" ");

  return {
    type: type as RouteType,
    segments: resolvePath(segments.join(" ")),
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
  };

  private route: Record<RouteType, RouteObject[]> = {
    pane: [],
    page: [],
  };

  constructor() {
    this.map.page["/"] = createEmptyRoute();
    this.map.pane["/"] = createEmptyRoute();

    this.route.page.push(this.map.page["/"]);
    this.route.pane.push(this.map.pane["/"]);
  }

  createRoute(type: RouteType, route: RouteObject) {
    const { parent, url, relative } = resolvePath(route.path);

    console.log(url);

    const newRoute: RouteObject = {
      ...route,
      path: relative,
      children: [],
    };

    this.map[type][url] = newRoute;

    if (parent?.url) this.push(type, parent.url, newRoute);

    return newRoute;
  }

  find(type: RouteType, path: string) {
    const { url } = resolvePath(path);

    return this.map[type][url];
  }

  push(type: RouteType, path: string, route: RouteObject) {
    const { parent } = resolvePath(path);

    console.log("p", parent);

    let resolvedParent = parent ? this.map[type][parent.url] : null;

    while (!resolvedParent && parent?.url) {
      resolvedParent = this.createRoute(type, createEmptyRoute(parent.url));
    }

    resolvedParent!.children.push(route);
  }

  page(path: string, loader: LoaderFunction | null, Component: ComponentType) {
    const { url } = resolvePath(path);

    const route = this.createRoute("page", {
      path: url,
      id: nanoid(),
      children: [],
      Component,
      loader: loader || (() => null),
    });

    this.route["page"].push(route);

    return route;
  }
}
