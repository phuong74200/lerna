import createClient from "openapi-fetch";

import { BASE_API_URL } from "@/configs/env";
import { fetchInstance } from "@/configs/fetch";

import { paths } from "./v1"; // generated from openapi-typescript

export const client = createClient<paths>({
  baseUrl: BASE_API_URL,
  fetch: (input, init) => fetchInstance.fetch(input.toString(), init),
});
