import { ComponentType } from "react";
import {
  createBrowserRouter,
  matchRoutes,
  NonIndexRouteObject,
  Outlet,
  RouterProvider,
  RouterProviderProps,
  useLocation,
  useRoutes,
} from "react-router-dom";
import { nanoid } from "nanoid";

import { Context, LoaderFunction, RouteMap, RouteOptions } from "@/types";

export default class Router {
  private pagesMap: RouteMap = {
    "/": {
      path: "/",
      Component: Outlet,
      children: [],
      id: nanoid(),
    },
  };
  private paneMap: RouteMap = {
    "/": {
      path: "/",
      Component: Outlet,
      children: [],
      id: nanoid(),
    },
  };
  private wrapMap: RouteMap = {};

  paths: {
    path: string;
  }[] = [];

  pagesRoutes: NonIndexRouteObject[] = [this.pagesMap["/"]];
  modalRoutes: NonIndexRouteObject[] = [this.paneMap["/"]];

  private context: Map<string, Context> = new Map();

  /**
   * @description remove leading slash from url. e.g. /home -> home.
   */
  private removeLeadingSlash(url: string) {
    if (url.startsWith("/")) {
      return url.substring(1);
    }
    return url;
  }

  /**
   * @description resolve path to parentPath, currentPath, and pathSegments
   * @description e.g. /home/1/2 -> { parentPath: "/home/1", currentPath: "/home/1/2", pathSegments: ["home", "1", "2"] }
   */
  private resolvePath(path: string) {
    if (!path.startsWith("/")) path = "/" + path;

    const pathSegments = path.split("/");

    const parentPath =
      this.removeLeadingSlash(pathSegments.slice(0, -1).join("/")) || "/";
    const currentPath = this.removeLeadingSlash(pathSegments.join("/"));

    return {
      parentPath,
      currentPath,
      pathSegments,
    };
  }

  /**
   *
   * @param pathSegments path segments
   * @param target pagesMap or modalMap
   *
   * @description ensure that all the path segments are created to prevent error when creating nested routes
   */
  private ensurePath(path: string, target: RouteMap) {
    const { pathSegments } = this.resolvePath(path);

    for (let i = 0; i < pathSegments.length; i++) {
      const { currentPath, parentPath } = this.resolvePath(
        pathSegments.slice(0, i + 1).join("/"),
      );
      const segment = pathSegments[i];

      if (!target[currentPath]) {
        target[currentPath] = {
          path: segment,
          Component: Outlet,
          children: [],
          id: nanoid(),
        };

        target[parentPath].children?.push(target[currentPath]);
      }
    }
  }

  /**
   * @description create a key map for the page
   */
  private type(
    id: string,
    map: RouteMap,
    path: string,
    loaders: LoaderFunction[] | LoaderFunction | null | undefined,
    Component: ComponentType,
    options?: RouteOptions,
  ) {
    const { currentPath, parentPath, pathSegments } = this.resolvePath(path);

    this.paths.push({ path: currentPath });

    map[currentPath] = {
      path: pathSegments[pathSegments.length - 1],
      Component,
      children: [],
      id: id,
    };

    const _loaders = loaders
      ? Array.isArray(loaders)
        ? loaders
        : [loaders]
      : [];

    map[currentPath].loader = async (args) => {
      for (const loader of _loaders) {
        const data = await loader({
          ...args,
          ...map[currentPath],
          context: this.context,
        });
        if (data) return data;
      }

      return null;
    };

    map[currentPath] = {
      ...map[currentPath],
      ...options,
    };

    this.ensurePath(path, map);

    if (this.wrapMap[currentPath]) {
      map[currentPath].parent = {
        $ref: this.wrapMap[currentPath],
        at: this.wrapMap[currentPath].children?.length || 0,
      };

      map[currentPath].path = "";

      this.wrapMap[currentPath].children?.push(map[currentPath]);
    } else {
      if (map[currentPath]) {
        map[currentPath].parent = {
          $ref: map[currentPath],
          at: map[currentPath].children?.length || 0,
        };
        map[parentPath].children?.push(map[currentPath]);
      }
    }

    return map[currentPath];
  }

  private findRoute(path: string) {
    const { currentPath } = this.resolvePath(path);

    const pane = this.paneMap[currentPath];
    const page = this.pagesMap[currentPath];

    return [pane, page].filter(Boolean);
  }

  wrap(
    path: string,
    loaders: LoaderFunction[] | LoaderFunction | null | undefined,
    Component: ComponentType,
    options?: RouteOptions,
  ) {
    const existed = this.findRoute(path);

    const id = nanoid();

    const { currentPath, pathSegments, parentPath } = this.resolvePath(path);

    this.paths.push({ path: currentPath });

    this.wrapMap[currentPath] = {
      path: pathSegments[pathSegments.length - 1],
      Component,
      children: [],
      id: id,
    };

    const _loaders = loaders
      ? Array.isArray(loaders)
        ? loaders
        : [loaders]
      : [];

    this.wrapMap[currentPath].loader = async (args) => {
      for (const loader of _loaders) {
        const data = await loader({
          ...args,
          ...this.wrapMap[currentPath],
          context: this.context,
        });
        if (data) return data;
      }

      return null;
    };

    this.wrapMap[currentPath] = {
      ...this.wrapMap[currentPath],
      ...options,
    };

    this.ensurePath(path, this.pagesMap);
    this.ensurePath(path, this.paneMap);

    // this.wrapMap[currentPath].parent = {
    //   $ref: this.paneMap[currentPath],
    //   at: this.paneMap[currentPath].children?.length || 0,
    // };
    // this.paneMap[parentPath].children?.push(this.wrapMap[currentPath]);

    this.wrapMap[currentPath].parent = {
      $ref: this.pagesMap[currentPath],
      at: this.pagesMap[currentPath].children?.length || 0,
    };
    this.pagesMap[parentPath].children?.push(this.wrapMap[currentPath]);

    for (const page of existed) {
      if (page) {
        page.path = "";
        this.wrapMap[currentPath].children?.push(page);

        if (page.parent?.$ref.children) {
          page.parent.$ref.children[page.parent?.at] =
            this.wrapMap[currentPath];
        }

        page.parent = {
          $ref: this.wrapMap[currentPath],
          at: this.wrapMap[currentPath].children?.length || 0,
        };
      }
    }

    return this.wrapMap[currentPath];
  }

  /**
   * @description full-page: page will be displayed as fullpage
   */
  page(
    path: string,
    loaders: LoaderFunction[] | LoaderFunction | null | undefined,
    Component: ComponentType,
    options?: RouteOptions,
  ) {
    const id = nanoid();
    return this.type(id, this.pagesMap, path, loaders, Component, options);
  }

  /**
   * @description both-type: page will be displayed as both fullpage and modal
   */
  both(
    path: string,
    loaders: LoaderFunction[] | LoaderFunction | null | undefined,
    Component: ComponentType,
    options?: RouteOptions,
  ) {
    const pid = nanoid();
    const mid = nanoid();
    return {
      pane: this.type(pid, this.pagesMap, path, loaders, Component, options),
      page: this.type(mid, this.paneMap, path, loaders, Component, options),
    };
  }

  /**
   * @description pane-page: page will be displayed at bottom of current page
   */
  pane(
    path: string,
    loaders: LoaderFunction[] | LoaderFunction | null | undefined,
    Component: ComponentType,
    options?: RouteOptions,
  ) {
    const id = nanoid();

    this.context.set(id, {
      floated: true,
    });

    return this.type(id, this.paneMap, path, loaders, Component, options);
  }

  get useRouteContext() {
    return () => {
      const location = useLocation();

      const routes = matchRoutes(this.paths, location);

      const pathPattern = routes?.[0]?.route?.path;

      if (!pathPattern) return null;

      const data = this.paneMap[pathPattern] || this.pagesMap[pathPattern];

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

      const modalRoutes = useRoutes(this.modalRoutes[0].children || []);
      const pagesRoutes = useRoutes(
        this.pagesRoutes[0].children || [],
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
    const modalRoutes = this.modalRoutes[0].children || [];
    const pagesRoutes = this.pagesRoutes[0].children || [];
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
