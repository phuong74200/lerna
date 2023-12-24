export function getToken(): {
  accessToken: string | null;
  refreshToken: string | null;
  empty: boolean;
} {
  try {
    return (
      JSON.parse(localStorage.getItem("token") || "") || {
        accessToken: null,
        refreshToken: null,
        empty: true,
      }
    );
  } catch {
    return {
      accessToken: null,
      refreshToken: null,
      empty: true,
    };
  }
}

export function clsToken() {
  return localStorage.removeItem("token");
}
