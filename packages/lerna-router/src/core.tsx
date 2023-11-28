import { ComponentType } from "react";
import {
  createBrowserRouter,
  NonIndexRouteObject,
  Outlet,
  RouterProvider,
  RouterProviderProps,
  useLocation,
  useRoutes,
} from "react-router-dom";
import { nanoid } from "nanoid";

import { Context, LoaderFunction, RouteMap } from "@/types";

export default class Router {
  private pagesMap: RouteMap = {
    "/": {
      path: "/",
      Component: Outlet,
      children: [],
      id: nanoid(),
    },
  };
  private modalMap: RouteMap = {
    "/": {
      path: "/",
      Component: Outlet,
      children: [],
      id: nanoid(),
    },
  };

  pagesRoutes: NonIndexRouteObject[] = [this.pagesMap["/"]];
  modalRoutes: NonIndexRouteObject[] = [this.modalMap["/"]];

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
    loaders: LoaderFunction[] | null,
    Component: ComponentType,
  ) {
    const { currentPath, parentPath, pathSegments } = this.resolvePath(path);

    map[currentPath] = {
      path: pathSegments[pathSegments.length - 1],
      Component,
      children: [],
      id: id,
    };

    map[currentPath].loader = async (args) => {
      for (const loader of loaders || []) {
        await loader({
          ...args,
          ...map[currentPath],
          context: this.context,
        });
      }
    };

    this.ensurePath(path, map);

    map[parentPath].children?.push(map[currentPath]);
  }

  /**
   * @description full-page: page will be displayed as fullpage
   */
  page(
    path: string,
    loaders: LoaderFunction[] | null,
    Component: ComponentType,
  ) {
    const id = nanoid();
    this.type(id, this.pagesMap, path, loaders, Component);
  }

  /**
   * @description both-type: page will be displayed as both fullpage and modal
   */
  both(
    path: string,
    loaders: LoaderFunction[] | null,
    Component: ComponentType,
  ) {
    const pid = nanoid();
    const mid = nanoid();
    this.type(pid, this.pagesMap, path, loaders, Component);
    this.type(mid, this.modalMap, path, loaders, Component);
  }

  /**
   * @description pane-page: page will be displayed at bottom of current page
   */
  pane(
    path: string,
    loaders: LoaderFunction[] | null,
    Component: ComponentType,
  ) {
    const id = nanoid();
    this.type(id, this.modalMap, path, loaders, Component);

    this.context.set(id, {
      floated: true,
    });
  }

  get useRouteContext() {
    return () => {
      const location = useLocation();

      const data =
        this.modalMap[this.removeLeadingSlash(location.pathname)] ||
        this.pagesMap[this.removeLeadingSlash(location.pathname)];

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
