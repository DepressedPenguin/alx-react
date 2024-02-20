import { fromJS } from 'immutable';


// FUNCTION THE DISPLA VALUE OF OBJECT
export default function accessImmutableObject(object, array) {
    const mapp_obj = fromJS(object);

    return mapp_obj.getIn(array, undefined);

}
