import getHandledType from '/Framework/V1.0/Utilities/TypeChecks/getHandledType';
import types from '/Framework/V1.0/Classes/Core/Router/types';

function getIdentifiedType(u) {
	let type = getHandledType(types, u);
	if (['string', 'number', 'boolean', 'undefined', 'object', 'symbol'].includes(type)) {
		type = undefined;
	}
	return type;
}
export default getIdentifiedType;