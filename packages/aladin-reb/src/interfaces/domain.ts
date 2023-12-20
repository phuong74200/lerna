export interface Domain<T extends object = object> {
  props: T;

  id: string;

  name: string;

  toRaw(): T;
}
