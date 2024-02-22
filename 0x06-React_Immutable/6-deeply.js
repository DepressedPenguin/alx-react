import { Map } from "immutable";

export function mergeDeeplyElements(page1, page2) {
    const mergedMap = Map(page1).mergeDeep(page2);
    return mergedMap.toList();
}
