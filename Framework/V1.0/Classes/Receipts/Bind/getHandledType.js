
//Handlers
import types from '/Framework/V1.0/Classes/Receipts/Bind/types';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';
import getHandledType from '/Framework/V1.0/Utilities/TypeChecks/getHandledType';

let getType = getHandledType.bind(null, types);

export default getType;

exports(getType).as('/Framework/V1.0/Classes/Receipts/Bind/getHandledType');
