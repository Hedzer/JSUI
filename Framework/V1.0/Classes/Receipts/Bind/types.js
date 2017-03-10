
//Singletons
import types from '/Framework/V1.0/Singletons/TypeChecks/types';

//TypeChecks
import isData from '/Framework/V1.0/TypeChecks/isData';
import isJSUI from '/Framework/V1.0/TypeChecks/isJSUI';
import isEventful from '/Framework/V1.0/TypeChecks/isEventful';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';
import extend from '/Framework/V1.0/Utilities/Objects/extend';

let Types = Object.create(types);
extend(Types).with({
	object: {
		data: isData,
		jsui: isJSUI,
		eventful: isEventful,
	}
});

export default Types;

exports(Types).as('/Framework/V1.0/Classes/Receipts/Bind/types');
