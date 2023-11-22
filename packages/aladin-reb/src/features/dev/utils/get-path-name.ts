import { capitalCase } from "change-case";

export default function getPathName(path?: string) {
  if (!path) return null;

  return capitalCase(path.split("/").pop() || "Home");
}
