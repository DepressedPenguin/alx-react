import { List } from 'immutable';

// CONVER OBJECT TO LIST IMMUTABLE
export function getListObject(array) {
    return List(array)
}

// ADD ELEMNT TO LIST
export function addElementToList(list, element) {
    return list.push(element);
}
