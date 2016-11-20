import types from 'Framework/Singletons/TypeChecks/types';
import extend from 'Framework/Utilities/Objects/extend';
import isData from 'Framework/TypeChecks/isData';

let Types = Object.create(types);
extend(Types).with({
	object: {
		data: isData
	}
});

export default Types;