import { NavigateOptions, useLocation, useNavigate } from "react-router-dom";

export default function useRedirect() {
  const navigate = useNavigate();
  const location = useLocation();

  const back = () => navigate(-1);

  const redirect = (path?: string, options?: NavigateOptions) => path && navigate(path, options);

  const onRedirect =
    (...args: Parameters<typeof redirect>) =>
    () =>
      redirect(...args);

  const redirectWithState = (path?: string, options?: NavigateOptions) =>
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
