
//Singletons
import types from 'JSUI/Source/1.0.0/Singletons/TypeChecks/types';

//TypeChecks
import isData from 'JSUI/Source/1.0.0/TypeChecks/isData';
import isElement from 'JSUI/Source/1.0.0/TypeChecks/isElement';
import isEventful from 'JSUI/Source/1.0.0/TypeChecks/isEventful';

//Utilities
import exports from 'Parcello/exports';
import extend from 'JSUI/Source/1.0.0/Utilities/Objects/extend';

let Types = Object.create(types);
extend(Types).with({
	object: {
		data: isData,
		element: isElement,
		eventful: isEventful,
	}
});

export default Types;

exports(Types).as('JSUI/Source/1.0.0/Classes/Receipts/Bind/types');
