
//Handlers
import types from 'JSUI/Source/1.0.0/Classes/Receipts/Bind/types';

//Utilities
import exports from 'Parcello/exports';
import getHandledType from 'JSUI/Source/1.0.0/Utilities/TypeChecks/getHandledType';

let getType = getHandledType.bind(null, types);

export default getType;

exports(getType).as('JSUI/Source/1.0.0/Classes/Receipts/Bind/getHandledType');
