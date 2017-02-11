import types from '/Framework/V1.0/Singletons/TypeChecks/types';
import extend from '/Framework/V1.0/Utilities/Objects/extend';
import isData from '/Framework/V1.0/TypeChecks/isData';
import isJSUI from '/Framework/V1.0/TypeChecks/isJSUI';
import isEventful from '/Framework/V1.0/TypeChecks/isEventful';

let Types = Object.create(types);
extend(Types).with({
	object: {
		data: isData,
		jsui: isJSUI,
		eventful: isEventful
	}
});

export default Types;