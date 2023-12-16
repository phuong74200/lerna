/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Outlet } from "react-router-dom";
import { nanoid } from "nanoid";

import { ResolvePath, RouteObject, RouteType } from "@/types";

export function createEmptyRoute(path: string = "/"): RouteObject {
  return {
    path: path,
    Component: Outlet,
    children: [],
    id: nanoid(),
  };
}

export function getLocation(path?: string) {
  return {
    hash: window.location.hash,
    key: "",
    pathname: path || window.location.pathname,
    search: window.location.search,
    state: window.history.state,
  };
}

export const generateId = (type: RouteType) => type + "_" + nanoid();

export function stdRelativePath(path: string) {
  return path.replace(/^\/+|\/+$/g, "");
}

export function createContext(): Record<string, unknown> {
  return {};
}

export function resolvePath(path: string): ResolvePath {
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

// safeLog is use in the case of maximum call stack exceeded. it will prevent the infinity logs
export const safeLog = (() => {
  const DEFAULT_MAX_STACK = 30;

  const map: Record<string, [number, number, boolean]> = {};

  const getId = (ms = 30) => (Date.now() - (Date.now() % ms)).toString();

  const log = (ms: number) => (data: any) => {
    const id = getId(ms);

    if (map[id][0]++ < map[id][1] && map[id][2]) {
      console.log(data);
    } else if (map[id][2]) {
      map[id][2] = false;
      console.log("%cbreak;", "background:red;color:white;padding:2px 4px;");
    }
    return safeLog(ms);
  };

  const max = (ms: number) => (n: number) => {
    const id = getId(ms);

    map[id][1] = n;

    return safeLog(ms);
  };

  return (ms = 3000) => {
    const id = getId(ms);

    if (!map[id]) map[id] = [0, DEFAULT_MAX_STACK, true];

    return {
      log: log(ms),
      max: max(ms),
      map,
    };
  };
})();
