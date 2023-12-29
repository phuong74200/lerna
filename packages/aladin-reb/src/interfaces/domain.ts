export interface Domain<T extends object = object> {
  props: T;

  id: string | number;

  name: string | undefined;

  toRaw(): T;

  description?: string;
}
