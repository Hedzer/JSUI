import isNull from '/Framework/TypeChecks/isNull';
import isArray from '/Framework/TypeChecks/isArray';
import isElement from '/Framework/TypeChecks/isElement';
import isJSUI from '/Framework/TypeChecks/isJSUI';
import isRegex from '/Framework/TypeChecks/isRegex';
import isHTML from '/Framework/TypeChecks/isHTML';
import isPath from '/Framework/TypeChecks/isPath';

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

export default (function getHandledType(u){
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
});