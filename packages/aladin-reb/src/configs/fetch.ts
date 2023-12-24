import { FetchInstance } from "fetch-instance";

import { clsToken, getToken } from "@/utils/auth-token";

export const fetchInstance = new FetchInstance();

fetchInstance.onRequest(async (request) => {
  const accessToken = getToken().accessToken;

  if (accessToken)
    request.options.headers = {
      Authorization: `Bearer ${accessToken}`,
      "content-type": "application/json",
      ...request.options.headers,
    };
});

// exchange refresh token to access token
fetchInstance.onResponse(async (response) => {
  const refreshToken = getToken().refreshToken;

  if (response.status === 401 && refreshToken) {
    try {
      const token = await fetch(
        "http://aladin-env-v1.ap-southeast-1.elasticbeanstalk.com/api/v1/new-access-token",
        {
          headers: {
            Authorization: `Bearer ${refreshToken}`,
            "content-type": "application/json",
          },
        },
      );

      const json = await token.json();

      localStorage.setItem(
        "token",
        JSON.stringify({
          accessToken: json.accessToken,
          refreshToken: json.refreshToken,
        }),
      );
    } catch (e) {
      clsToken();

      throw e;
    }
  }

  if (response.status === 401 && !refreshToken) {
    clsToken();
  }
});
