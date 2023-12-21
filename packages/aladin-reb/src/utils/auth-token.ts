export function getToken() {
  return localStorage.getItem("token");
}

export function clsToken() {
  return localStorage.removeItem("token");
}
