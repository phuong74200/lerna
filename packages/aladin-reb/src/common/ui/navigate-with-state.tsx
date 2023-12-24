import { Navigate, NavigateProps, useLocation } from "react-router-dom";

export default function NavigateWithState(props: NavigateProps) {
  const location = useLocation();

  return <Navigate {...props} state={{ background: location }} />;
}
