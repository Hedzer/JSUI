import isNull from '/Framework/V1.0/TypeChecks/isNull';
import isArray from '/Framework/V1.0/TypeChecks/isArray';
import isElement from '/Framework/V1.0/TypeChecks/isElement';
import isJSUI from '/Framework/V1.0/TypeChecks/isJSUI';
import isRegex from '/Framework/V1.0/TypeChecks/isRegex';
import isHTML from '/Framework/V1.0/TypeChecks/isHTML';
import isPath from '/Framework/V1.0/TypeChecks/isPath';
import isBehavior from '/Framework/V1.0/TypeChecks/isBehavior';

let types = {
	object: {
		null: isNull,
		array: isArray,
		element: isElement,
		jsui: isJSUI,
		regex: isRegex,
		behavior: isBehavior
	},
	string: {
		html: isHTML,
		path: isPath
	}
};

export default types;