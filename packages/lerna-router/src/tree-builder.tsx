import { RouteObject } from "@/types";
import { createEmptyRoute, resolvePath } from "@/utils";

export default class TreeBuilder {
  nested: RouteObject[] = [];
  map: Record<string, RouteObject> = {};

  constructor() {
    this.map["/"] = createEmptyRoute();

    this.nested = [this.map["/"]];
  }

  check(path: string | undefined) {
    if (!path) return false;
    return Boolean(this.map[path]);
  }

  find(path: string) {
    const { url } = resolvePath(path);

    return this.map[url];
  }

  push(path: string) {
    const { url, relative, parent } = resolvePath(path);

    const route = createEmptyRoute(relative);

    this.map[url] = route;

    if (parent && parent.url && this.map[parent.url] === undefined)
      this.push(parent.url);

    if (parent) {
      const parentRoute = this.find(parent.url);

      parentRoute.children.push(route);
    }

    return route;
  }
}
