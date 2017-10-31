
//TypeChecks
import isArray from 'JSUI/Source/1.0.0/TypeChecks/isArray';
import isBehavior from 'JSUI/Source/1.0.0/TypeChecks/isBehavior';
import isDOM from 'JSUI/Source/1.0.0/TypeChecks/isDOM';
import isHTML from 'JSUI/Source/1.0.0/TypeChecks/isHTML';
import isElement from 'JSUI/Source/1.0.0/TypeChecks/isElement';
import isNull from 'JSUI/Source/1.0.0/TypeChecks/isNull';
import isPath from 'JSUI/Source/1.0.0/TypeChecks/isPath';
import isRegex from 'JSUI/Source/1.0.0/TypeChecks/isRegex';

//Utilities
import exports from 'Parcello/exports';

let types = {
	class: {
		element: isElement,
	},
	object: {
		array: isArray,
		behavior: isBehavior,
		dom: isDOM,
		null: isNull,
		regex: isRegex,
	},
	string: {
		html: isHTML,
		path: isPath,
	},
};

export default types;

exports(types).as('JSUI/Source/1.0.0/Singletons/TypeChecks/types');
