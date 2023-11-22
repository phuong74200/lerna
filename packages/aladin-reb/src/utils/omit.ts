export default function omit<T extends object, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> {
  const result: Omit<T, K> = {} as Omit<T, K>;

  Object.keys(obj).forEach((key) => {
    if (!keys.includes(key as K)) {
      const _key = key as keyof Omit<T, K>;
      result[_key] = obj[_key];
    }
  });

  return result;
}
