import { ReactNode } from "react";
import {
  createBrowserRouter,
  LoaderFunction,
  NonIndexRouteObject,
  Outlet,
  RouterProvider,
  useLocation,
  useRoutes,
} from "react-router-dom";
import { nanoid } from "nanoid";

type Request = object;

export type Handler<T = unknown> = (req: T, next: () => string) => ReactNode;

type RouteMap = Record<string, NonIndexRouteObject>;

export class Router {
  pagesMap: RouteMap = {
    "/": {
      path: "/",
      Component: Outlet,
      children: [],
    },
  };
  modalMap: RouteMap = {
    "/": {
      path: "/",
      Component: Outlet,
      children: [],
    },
  };

  pagesRoutes: NonIndexRouteObject[] = [this.pagesMap["/"]];
  modalRoutes: NonIndexRouteObject[] = [this.modalMap["/"]];

  private nextId = nanoid();
  private next = () => {
    return this.nextId;
  };

  removeLeadingSlash(url: string) {
    if (url.startsWith("/")) {
      return url.substring(1);
    }
    return url;
  }

  resolvePath(path: string) {
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
   * @description ensure that all the path segments are created
   */
  ensurePath(path: string, target: RouteMap) {
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
        };

        target[parentPath].children?.push(target[currentPath]);
      }
    }
  }

  type<T = Request>(
    id: string,
    map: RouteMap,
    path: string,
    loader: LoaderFunction | null,
    ...handlers: Handler<T>[]
  ) {
    const req: T = {} as T;

    const Component = () => {
      for (let i = 0; i < handlers.length; i++) {
        const handler = handlers[i];
        const view = handler(req, this.next);

        if (view !== this.nextId) {
          return view;
        }
      }
    };

    const { currentPath, parentPath, pathSegments } = this.resolvePath(path);

    map[currentPath] = {
      path: pathSegments[pathSegments.length - 1],
      Component: Component,
      children: [],
      id: id,
    };

    if (loader) map[currentPath].loader = loader;

    // make sure that all the parent paths are created in the pagesMap
    this.ensurePath(path, map);

    map[parentPath].children?.push(map[currentPath]);
  }

  page<T = Request>(
    path: string,
    loader: LoaderFunction | null,
    ...handlers: Handler<T>[]
  ) {
    const id = nanoid();
    this.type(id, this.pagesMap, path, loader, ...handlers);
  }

  modal<T = Request>(
    path: string,
    loader: LoaderFunction | null,
    ...handlers: Handler<T>[]
  ) {
    const id = nanoid();
    this.type(id, this.modalMap, path, loader, ...handlers);
  }

  get Root() {
    return () => {
      const location = useLocation();
      const background = location.state && location.state.background;

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
    const router = createBrowserRouter([
      {
        path: "/",
        Component: this.Root,
        children: (this.modalRoutes[0].children || []).concat(
          this.pagesRoutes[0].children || [],
        ),
      },
    ]);

    return () => {
      return (
        <RouterProvider router={router} fallbackElement={<h1>Loading</h1>} />
      );
    };
  }
}
