
//Handlers
import types from '/Framework/V1.0/Classes/Core/Element/types';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';
import getHandledType from '/Framework/V1.0/Utilities/TypeChecks/getHandledType';

let handler = getHandledType.bind(null, types);
export default handler;

exports(handler).as('/Framework/V1.0/Classes/Core/Element/Handlers/getHandledType');