import isFunction from '/JSUI/Source/V1.0/TypeChecks/isFunction';

//TypeChecks
import isArray from '/JSUI/Source/V1.0/TypeChecks/isArray';

//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';

export default function _string(command, args) {
	if (isFunction(this[command])) {
		if (isArray(args)) {
			return this[command].apply(this, args);
		}
		return this[command](args);
	}
}

exports(_string).as('/JSUI/Source/V1.0/Classes/Core/Element/Handlers/Do/_string');