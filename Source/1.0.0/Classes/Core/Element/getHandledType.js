
//Handlers
import types from 'JSUI/Source/1.0.0/Classes/Core/Element/types';

//Utilities
import exports from 'Parcello/exports';
import getHandledType from 'JSUI/Source/1.0.0/Utilities/TypeChecks/getHandledType';

let handler = getHandledType.bind(null, types);
export default handler;

exports(handler).as('JSUI/Source/1.0.0/Classes/Core/Element/Handlers/getHandledType');