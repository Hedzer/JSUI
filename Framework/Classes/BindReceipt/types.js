import types from 'Framework/Singletons/TypeChecks/types';
import extend from 'Framework/Utilities/Objects/extend';
import isData from 'Framework/TypeChecks/isData';
import isJSUI from 'Framework/TypeChecks/isJSUI';
import isExtensible from 'Framework/TypeChecks/isExtensible';

let Types = Object.create(types);
extend(Types).with({
	object: {
		data: isData,
		jsui: isJSUI,
		extensible: isExtensible
	}
});

export default Types;