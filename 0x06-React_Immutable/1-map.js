const { Map } = require('immutable');
function getImmutableObject(object){
    return Map(object);
}

const my_object={
    fear: true,
    smell: -1033575916.9145899,
    wall: false,
    thing: -914767132
}

const imutabl_object = getImmutableObject(my_object);
console.log(my_object);
