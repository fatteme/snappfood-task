import { camelToSnakeCase } from './string';

export const transformToSnakeCase = (obj: Object) =>
  Object.fromEntries(Object.entries(obj).map(([key, value]) => [camelToSnakeCase(key), value]));
