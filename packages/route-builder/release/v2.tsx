import { ComponentType } from "react";
import {
  createBrowserRouter,
  LoaderFunctionArgs,
  Location,
  matchRoutes,
  Outlet,
  RouterProvider,
  RouterProviderProps,
  useLocation,
  useRoutes,
} from "react-router-dom";
import { nanoid } from "nanoid";

import {
  Context,
  LoaderFunction,
  MiddlewareFunction,
  NextData,
  ResolvePath,
  Route,
  RouteMap,
  RouteObject,
  RouteType,
} from "@/types";

function createEmptyRoute(path: string = "/"): RouteObject {
  return {
    path: path,
    Component: Outlet,
    children: [],
    id: nanoid(),
  };
}

function getLocation(path?: string) {
  return {
    hash: window.location.hash,
    key: "",
    pathname: path || window.location.pathname,
    search: window.location.search,
    state: window.history.state,
  };
}

const generateId = (type: RouteType) => type + "_" + nanoid();

function stdRelativePath(path: string) {
  return path.replace(/^\/+|\/+$/g, "");
}

function createContext(): Record<string, unknown> {
  return {};
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
  context: Map<string, Context> = new Map();

  private map: Record<RouteType, RouteMap> = {
    [RouteType.PAGE]: {},
    [RouteType.PANE]: {},
  };

  private route: Record<RouteType, RouteObject[]> = {
    [RouteType.PAGE]: [],
    [RouteType.PANE]: [],
  };

  private nextQueue: MiddlewareFunction[] = [];

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
    const existedRoute = this.find(type, path);

    // if existed make it a wrapper
    if (existedRoute) {
      const { relative } = resolvePath(path);

      const route = createEmptyRoute(relative);

      Object.assign(route, {
        loader,
        Component,
        id: generateId(type),
      });

      return this.wrap(type, route, existedRoute);
    }

    const route = this.constructFrame(type, path);

    Object.assign(route, {
      loader,
      Component,
      id: generateId(type),
    });

    return route;
  }

  find(type: RouteType, path: string) {
    const { url } = resolvePath(path);

    return this.map[type][url];
  }

  constructFrame(type: RouteType, path: string) {
    const { url, parent, relative } = resolvePath(path);

    if (parent && !this.map[type][parent.url]) {
      this.constructFrame(type, parent.url);
    }

    if (!this.map[type][url]) {
      const route = createEmptyRoute(url);
      const container = this.map[type][parent!.url];

      route.path = relative;

      this.map[type][url] = route;
      container.children.push(route);

      route.parent = {
        at: container.children.length - 1,
        $ref: container,
      };

      return route;
    }

    return this.map[type][url];
  }

  refAll(type: RouteType, ...targets: Route[]) {
    return targets.reduce<RouteObject[]>((acc, target) => {
      if (typeof target === "string") {
        return acc.concat(this.map[type][target]);
      }

      return acc.concat(target);
    }, []);
  }

  // inherit(type: RouteType, from: Route, to: Route) {
  //   const [fromRoute, toRoute] = this.refAll(type, from, to);

  //   toRoute.children = [...fromRoute.children];
  //   toRoute.parent = {
  //     at: fromRoute.parent!.at,
  //     $ref: fromRoute.parent!.$ref,
  //   };

  //   return toRoute;
  // }

  // replace(type: RouteType, route: Route, replacement: Route) {
  //   const [routeRef, replacementRef] = this.refAll(type, route, replacement);

  //   const parent = routeRef.parent!.$ref;
  //   const at = routeRef.parent!.at;

  //   parent.children[at] = replacementRef;

  //   return replacementRef;
  // }

  wrap(type: RouteType, route: Route, wrapper: Route) {
    const [routeRef, wrapperRef] = this.refAll(type, route, wrapper);

    Object.assign(routeRef, {
      children: [...wrapperRef.children],
      path: "",
    });

    wrapperRef.children = [routeRef];

    return wrapperRef;
  }

  createLoader(path: string, loader: LoaderFunction | null) {
    return async (args: LoaderFunctionArgs) => {
      const location = this.matchPattern(getLocation(path));

      if (loader)
        return await loader({
          ...args,
          id: location?.id,
          context: this.context,
        });

      return null;
    };
  }

  page(
    path: string,
    loader: LoaderFunction | null,
    Component: ComponentType,
    options?: Partial<RouteObject>,
  ) {
    const ctx = createContext();

    this.applyMiddleware(
      {
        path,
        loader,
        Component,
        options,
      },
      ctx,
    );

    const route = this.createRoute(
      RouteType.PAGE,
      path,
      this.createLoader(path, loader),
      Component,
    );

    if (options) {
      Object.assign(route, options);
    }

    this.paths.push({ path });

    return route;
  }

  pane(
    path: string,
    loader: LoaderFunction | null,
    Component: ComponentType,
    options?: Partial<RouteObject>,
  ) {
    const ctx = createContext();

    this.applyMiddleware(
      {
        path,
        loader,
        Component,
        options,
      },
      ctx,
    );

    const route = this.createRoute(
      RouteType.PANE,
      path,
      this.createLoader(path, loader),
      Component,
    );

    if (options) {
      Object.assign(route, options);
    }

    this.paths.push({ path });
    this.context.set(route.id, {
      floated: true,
    });

    return route;
  }

  applyMiddleware(nextData: NextData, ctx: Record<string, unknown>) {
    this.nextQueue.shift()?.call(this, this, nextData, ctx);
  }

  next(...middlewares: MiddlewareFunction[]) {
    this.nextQueue.push(...middlewares);
  }

  matchPattern(location: Location) {
    const routes = matchRoutes(this.paths, location);

    const pathPattern = routes?.[0]?.route?.path || "";

    if (pathPattern)
      return (
        this.find(RouteType.PAGE, pathPattern) ||
        this.find(RouteType.PANE, pathPattern)
      );

    return null;
  }

  get useRouteContext() {
    return () => {
      const location = useLocation();

      const data = this.matchPattern(location);

      if (data?.id) return this.context.get(data.id || "");

      return null;
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
