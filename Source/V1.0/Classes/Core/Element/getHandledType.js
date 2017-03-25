
//Handlers
import types from '/JSUI/Source/V1.0/Classes/Core/Element/types';

//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';
import getHandledType from '/JSUI/Source/V1.0/Utilities/TypeChecks/getHandledType';

let handler = getHandledType.bind(null, types);
export default handler;

exports(handler).as('/JSUI/Source/V1.0/Classes/Core/Element/Handlers/getHandledType');