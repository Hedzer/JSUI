import isNull from '../../TypeChecks/isNull';
import isArray from '../../TypeChecks/isArray';
import isElement from '../../TypeChecks/isElement';
import isJSUI from '../../TypeChecks/isJSUI';
import isRegex from '../../TypeChecks/isRegex';
import isHTML from '../../TypeChecks/isHTML';
import isPath from '../../TypeChecks/isPath';

var Types = {
	object:{
		null:isNull,
		array:isArray,
		element:isElement,
		jsui:isJSUI,
		regex:isRegex
	},
	string:{
		html:isHTML,
		path:isPath
	}
};

export function getHandledType(u){
	var type = typeof u;
	var subtypes = Types[type];
	if (!subtypes) {
		return type;
	}
	for (var name in subtypes) {
		let subtype = subtypes[name];
		if (subtype(u)) {
			return name;
		}
	}
	return type;
}