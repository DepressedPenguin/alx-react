import { List, Map } from "immutable";

export function concatElements(page1, page2) {
  const cont_array = List(page1).concat(page2);
  return List(cont_array);
}

export function mergeElements(page1, page2) {
  return List(Map(page1).merge(page2).toArray());
}
