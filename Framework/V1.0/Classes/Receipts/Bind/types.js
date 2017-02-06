import types from '/Framework/V1.0/Singletons/TypeChecks/types';
import extend from '/Framework/V1.0/Utilities/Objects/extend';
import isData from '/Framework/V1.0/TypeChecks/isData';
import isJSUI from '/Framework/V1.0/TypeChecks/isJSUI';
import isExtensible from '/Framework/V1.0/TypeChecks/isExtensible';

let Types = Object.create(types);
extend(Types).with({
	object: {
		data: isData,
		jsui: isJSUI,
		extensible: isExtensible
	}
});

export default Types;