
//Singletons
import types from '/JSUI/Source/V1.0/Singletons/TypeChecks/types';

//TypeChecks
import isData from '/JSUI/Source/V1.0/TypeChecks/isData';
import isElement from '/JSUI/Source/V1.0/TypeChecks/isElement';
import isEventful from '/JSUI/Source/V1.0/TypeChecks/isEventful';

//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';
import extend from '/JSUI/Source/V1.0/Utilities/Objects/extend';

let Types = Object.create(types);
extend(Types).with({
	object: {
		data: isData,
		element: isElement,
		eventful: isEventful,
	}
});

export default Types;

exports(Types).as('/JSUI/Source/V1.0/Classes/Receipts/Bind/types');
