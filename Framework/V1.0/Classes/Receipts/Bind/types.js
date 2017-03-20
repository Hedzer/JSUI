
//Singletons
import types from '/Framework/V1.0/Singletons/TypeChecks/types';

//TypeChecks
import isData from '/Framework/V1.0/TypeChecks/isData';
import isElement from '/Framework/V1.0/TypeChecks/isElement';
import isEventful from '/Framework/V1.0/TypeChecks/isEventful';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';
import extend from '/Framework/V1.0/Utilities/Objects/extend';

let Types = Object.create(types);
extend(Types).with({
	object: {
		data: isData,
		element: isElement,
		eventful: isEventful,
	}
});

export default Types;

exports(Types).as('/Framework/V1.0/Classes/Receipts/Bind/types');
