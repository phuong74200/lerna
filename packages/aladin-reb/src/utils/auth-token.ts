export function getToken(): {
  accessToken: string | null;
  refreshToken: string | null;
} {
  try {
    return (
      JSON.parse(localStorage.getItem("token") || "") || {
        accessToken: null,
        refreshToken: null,
      }
    );
  } catch {
    return {
      accessToken: null,
      refreshToken: null,
    };
  }
}

export function clsToken() {
  return localStorage.removeItem("token");
}
