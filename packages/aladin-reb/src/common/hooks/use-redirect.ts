import { NavigateOptions, useLocation, useNavigate } from "react-router-dom";

import { Path } from "@/router/path";

export default function useRedirect() {
  const navigate = useNavigate();
  const location = useLocation();

  const back = () => navigate(-1);

  const redirect = (path?: Path, options?: NavigateOptions) => path && navigate(path, options);

  const onRedirect =
    (...args: Parameters<typeof redirect>) =>
    () =>
      redirect(...args);

  const redirectWithState = (path?: Path, options?: NavigateOptions) =>
    path &&
    navigate(path, {
      ...options,
      state: {
        ...options?.state,
        background: location,
      },
    });

  const onRedirectWithState =
    (...args: Parameters<typeof redirectWithState>) =>
    () =>
      redirectWithState(...args);

  return { back, onRedirect, redirect, onRedirectWithState, redirectWithState };
}
