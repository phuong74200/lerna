import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";

import { queryKeys } from "@/api";
import useToken from "@/common/hooks/use-token";

export default function useLogout() {
  const queryClient = useQueryClient();
  const [, , remove] = useToken();
  const navigate = useNavigate();

  const logout = () => {
    queryClient.removeQueries(queryKeys.generalUser.user("current").queryKey);
    remove();
    navigate("/");
  };

  return logout;
}
