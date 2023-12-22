type ReqInterceptor = (request: { url: string; options: RequestInit }) => void;
type ResInterceptor = (response: Response, request: { url: string; options: RequestInit }) => void;

export class FetchInstance {
  req_interceptors: ReqInterceptor[] = [];
  res_interceptors: ResInterceptor[] = [];

  fetch = async (url: string, options?: RequestInit): Promise<Response> => {
    // Apply request interceptors
    const request = {
      url,
      options: options || {},
    };

    await Promise.all(this.req_interceptors.map((interceptor) => interceptor(request)));

    // Make the actual fetch request
    const response = await window.fetch(request.url, request.options);

    // Apply response interceptors
    await Promise.all(this.res_interceptors.map((interceptor) => interceptor(response, request)));

    return response;
  };

  onResponse = (interceptor: ResInterceptor) => {
    this.res_interceptors.push(interceptor);
  };

  onRequest = (interceptor: ReqInterceptor) => {
    this.req_interceptors.push(interceptor);
  };
}
