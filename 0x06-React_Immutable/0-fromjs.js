const { Map } = require('immutable');
// CREATE GET IMMUTABLEOBJECT
function getImmutableObject(object){
    return Map(object);
}

// CREATE OBJECT
const my_object = {
    fear: true,
    smell: -1033575916.9145899,
    wall: false,
    thing: -914767132
}

// DISPLAY THE RESULT
const immutableMap = getImmutableObject(my_object);
console.log(immutableMap);
