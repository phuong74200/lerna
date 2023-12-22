import { useLocalStorage } from "@mantine/hooks";

export default function useToken() {
  return useLocalStorage<{
    accessToken: string | null | undefined;
    refreshToken: string | null | undefined;
  }>({
    key: "token",
  });
}
