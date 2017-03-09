import isFunction from '/Framework/V1.0/TypeChecks/isFunction';

//TypeChecks
import isArray from '/Framework/V1.0/TypeChecks/isArray';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

export default function _string(command, args) {
	if (isFunction(this[command])) {
		if (isArray(args)) {
			return this[command].apply(this, args);
		}
		return this[command](args);
	}
}

exports(_string).as('/Framework/V1.0/Classes/Core/Element/Handlers/Do/_string');