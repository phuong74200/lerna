export default function verifyOTPApi() {
  client.PUT("/v1/verification/code-confirm/{code}", {
    params: {
      path,
    },
  });
}
