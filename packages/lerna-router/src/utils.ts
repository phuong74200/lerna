let cache: number | null = null;

export function sleep(ms: number) {
  if (cache) return cache;

  return new Promise((resolve) =>
    setTimeout(() => {
      cache = Math.random();

      return resolve({
        name: cache,
      });
    }, ms),
  );
}
