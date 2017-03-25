
//Handlers
import types from '/JSUI/Source/V1.0/Classes/Receipts/Bind/types';

//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';
import getHandledType from '/JSUI/Source/V1.0/Utilities/TypeChecks/getHandledType';

let getType = getHandledType.bind(null, types);

export default getType;

exports(getType).as('/JSUI/Source/V1.0/Classes/Receipts/Bind/getHandledType');
