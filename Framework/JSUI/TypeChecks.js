import isArray from '/Framework/TypeChecks/isArray';
import isElement from '/Framework/TypeChecks/isElement';
import isEmptyString from '/Framework/TypeChecks/isEmptyString';
import isFunction from '/Framework/TypeChecks/isFunction';
import isHTML from '/Framework/TypeChecks/isHTML';
import isJSUI from '/Framework/TypeChecks/isJSUI';
import isNativeTag from '/Framework/TypeChecks/isNativeTag';
import isNull from '/Framework/TypeChecks/isNull';
import isNumber from '/Framework/TypeChecks/isNumber';
import isObject from '/Framework/TypeChecks/isObject';
import isPath from '/Framework/TypeChecks/isPath';
import isRegex from '/Framework/TypeChecks/isRegex';
import isString from '/Framework/TypeChecks/isString';
import isStyleRule from '/Framework/TypeChecks/isStyleRule';
import isTextNode from '/Framework/TypeChecks/isTextNode';
import isUJSUI from '/Framework/TypeChecks/isUJSUI';
import isUndefined from '/Framework/TypeChecks/isUndefined';
import isUStyleRule from '/Framework/TypeChecks/isUStyleRule';
import isData from '/Framework/TypeChecks/isData';
import isUData from '/Framework/TypeChecks/isUData';

var TypeChecks = {
	isArray: isArray,
	isElement: isElement,
	isEmptyString: isEmptyString,
	isFunction: isFunction,
	isHTML: isHTML,
	isJSUI: isJSUI,
	isNativeTag: isNativeTag,
	isNull: isNull,
	isNumber: isNumber,
	isObject: isObject,
	isPath: isPath,
	isRegex: isRegex,
	isString: isString,
	isStyleRule: isStyleRule,
	isTextNode: isTextNode,
	isUJSUI: isUJSUI,
	isUndefined: isUndefined,
	isUStyleRule: isUStyleRule,
	isData: isData,
	isUData: isUData
};

export default TypeChecks;