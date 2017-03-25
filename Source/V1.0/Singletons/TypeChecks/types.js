
//TypeChecks
import isArray from '/JSUI/Source/V1.0/TypeChecks/isArray';
import isBehavior from '/JSUI/Source/V1.0/TypeChecks/isBehavior';
import isDOM from '/JSUI/Source/V1.0/TypeChecks/isDOM';
import isHTML from '/JSUI/Source/V1.0/TypeChecks/isHTML';
import isElement from '/JSUI/Source/V1.0/TypeChecks/isElement';
import isNull from '/JSUI/Source/V1.0/TypeChecks/isNull';
import isPath from '/JSUI/Source/V1.0/TypeChecks/isPath';
import isRegex from '/JSUI/Source/V1.0/TypeChecks/isRegex';

//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';

let types = {
	object: {
		array: isArray,
		behavior: isBehavior,
		dom: isDOM,
		element: isElement,
		null: isNull,
		regex: isRegex,
	},
	string: {
		html: isHTML,
		path: isPath,
	},
};

export default types;

exports(types).as('/JSUI/Source/V1.0/Singletons/TypeChecks/types');
