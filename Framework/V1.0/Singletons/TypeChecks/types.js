
//TypeChecks
import isArray from '/Framework/V1.0/TypeChecks/isArray';
import isBehavior from '/Framework/V1.0/TypeChecks/isBehavior';
import isElement from '/Framework/V1.0/TypeChecks/isElement';
import isHTML from '/Framework/V1.0/TypeChecks/isHTML';
import isJSUI from '/Framework/V1.0/TypeChecks/isJSUI';
import isNull from '/Framework/V1.0/TypeChecks/isNull';
import isPath from '/Framework/V1.0/TypeChecks/isPath';
import isRegex from '/Framework/V1.0/TypeChecks/isRegex';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

let types = {
	object: {
		array: isArray,
		behavior: isBehavior,
		element: isElement,
		jsui: isJSUI,
		null: isNull,
		regex: isRegex,
	},
	string: {
		html: isHTML,
		path: isPath,
	},
};

export default types;

exports(types).as('/Framework/V1.0/Singletons/TypeChecks/types');
