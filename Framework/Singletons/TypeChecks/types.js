import isNull from 'Framework/TypeChecks/isNull';
import isArray from 'Framework/TypeChecks/isArray';
import isElement from 'Framework/TypeChecks/isElement';
import isJSUI from 'Framework/TypeChecks/isJSUI';
import isRegex from 'Framework/TypeChecks/isRegex';
import isHTML from 'Framework/TypeChecks/isHTML';
import isPath from 'Framework/TypeChecks/isPath';
import isBehavior from 'Framework/TypeChecks/isBehavior';

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