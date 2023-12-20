import { ComponentType } from "react";
import {
  createBrowserRouter,
  LoaderFunction,
  matchRoutes,
  Outlet,
  RouterProvider,
  RouterProviderProps,
  useLocation,
  useRoutes,
} from "react-router-dom";
import { nanoid } from "nanoid";

import { Context, RouteMap, RouteObject } from "@/types";

enum RouteType {
  PAGE = "page",
  PANE = "pane",
  WRAP = "wrap",
  FULL = "full",
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
  private context: Map<string, Context> = new Map();

  private map: Record<RouteType, RouteMap> = {
    [RouteType.PAGE]: {},
    [RouteType.PANE]: {},
    [RouteType.WRAP]: {},
    [RouteType.FULL]: {},
  };

  private route: Record<RouteType, RouteObject[]> = {
    [RouteType.PAGE]: [],
    [RouteType.PANE]: [],
    [RouteType.WRAP]: [],
    [RouteType.FULL]: [],
  };

  paths: {
    path: string;
  }[] = [];

  constructor() {
    // initialize empty route
    this.map[RouteType.PAGE]["/"] = createEmptyRoute();
    this.map[RouteType.PANE]["/"] = createEmptyRoute();

    this.map[RouteType.WRAP]["/"] = createEmptyRoute();

    this.route[RouteType.PAGE].push(this.map.page["/"]);
    this.route[RouteType.PANE].push(this.map.pane["/"]);

    this.route[RouteType.FULL].push(createEmptyRoute());
  }

  createRoute(type: RouteType, route: Omit<RouteObject, "id">) {
    const { url, relative } = resolvePath(route.path);

    this.paths.push({ path: url });

    const newRoute: RouteObject = {
      ...route,
      path: relative,
      children: [],
      id: type + "_" + nanoid(),
    };

    this.map[type][url] = newRoute;

    this.push(type, url, newRoute);

    return newRoute;
  }

  find(type: RouteType, path: string) {
    const { url } = resolvePath(path);

    return this.map[type][url];
  }

  push(type: RouteType, path: string, route: RouteObject) {
    const { parent } = resolvePath(path);

    let resolvedParent = parent ? this.map[type][parent.url] : null;

    if (!resolvedParent && parent?.url)
      resolvedParent = this.createRoute(type, createEmptyRoute(parent.url));

    /**
     * this condition is the reason why <#id: line-wrap> must be put after this.push
     * #id: line-push-if
     */
    if (this.map[RouteType.WRAP][path]) {
      const wrap = this.map[RouteType.WRAP][path];
      wrap.children.push(route);
      route.parent = {
        $ref: wrap,
        at: wrap.children.length - 1,
      };
      route.path = "";

      return route;
    }

    if (resolvedParent) {
      route.parent = {
        $ref: resolvedParent,
        at: resolvedParent?.children.length || 0,
      };

      resolvedParent.children.push(route);

      return route;
    }

    return route;
  }

  page(path: string, loader: LoaderFunction | null, Component: ComponentType) {
    const { url } = resolvePath(path);

    const route = this.createRoute(RouteType.PAGE, {
      path: url,
      children: [],
      Component,
      loader: loader || (() => null),
    });

    return route;
  }

  pane(path: string, loader: LoaderFunction | null, Component: ComponentType) {
    const { url } = resolvePath(path);

    const route = this.createRoute(RouteType.PANE, {
      path: url,
      children: [],
      Component,
      loader: loader || (() => null),
    });

    return route;
  }

  wrap(path: string, loader: LoaderFunction | null, Component: ComponentType) {
    const { url, relative } = resolvePath(path);

    const route: RouteObject = {
      path: relative,
      children: [],
      id: RouteType.WRAP + "_" + nanoid(),
      loader: loader || (() => null),
      Component,
    };

    if (
      this.map[RouteType.PAGE][url]?.parent &&
      this.map[RouteType.PAGE][url]?.parent?.$ref
    ) {
      this.map[RouteType.PAGE][url].parent!.$ref.children[
        this.map[RouteType.PAGE][url].parent!.at
      ] = route;
      const target = this.map[RouteType.PAGE][url];
      target.path = "";
      route.children.push(target);

      if (target.parent) {
        target.parent.$ref = route;
        target.parent.at = route.children.length;
      }
    } else {
      this.push(RouteType.PAGE, url, route);
    }

    /**
     * the order of this line if very important it must be put after this.push
     * #id: line-wrap
     */
    this.map[RouteType.WRAP][url] = route;

    return route;
  }

  get useRouteContext() {
    return () => {
      const location = useLocation();

      const routes = matchRoutes(this.paths, location);

      const pathPattern = routes?.[0]?.route?.path;

      if (!pathPattern) return null;

      const data =
        this.map[RouteType.PAGE][pathPattern] ||
        this.map[RouteType.PANE][pathPattern];

      const context = this.context.get(data?.id || "");

      return context;
    };
  }

  private get Root() {
    return () => {
      const location = useLocation();

      const context = this.useRouteContext();

      const background =
        location.state && location.state.background && context?.floated;

      const modalRoutes = useRoutes(
        this.route[RouteType.PANE][0].children || [],
      );
      const pagesRoutes = useRoutes(
        this.route[RouteType.PAGE][0].children || [],
        background || location,
      );

      return (
        <>
          {pagesRoutes}
          {background && modalRoutes}
        </>
      );
    };
  }

  get RouterProvider() {
    const modalRoutes = this.route[RouteType.PANE][0].children || [];
    const pagesRoutes = this.route[RouteType.PAGE][0].children || [];
    const routes = [...modalRoutes, ...pagesRoutes];

    const router = createBrowserRouter([
      {
        path: "/",
        Component: this.Root,
        children: routes,
      },
    ]);

    return (props: Omit<RouterProviderProps, "router">) => {
      return (
        <RouterProvider
          fallbackElement={<h1>Loading</h1>}
          router={router}
          {...props}
        />
      );
    };
  }
}
