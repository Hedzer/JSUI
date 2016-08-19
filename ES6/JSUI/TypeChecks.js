import isArray from '../TypeChecks/isArray';
import isElement from '../TypeChecks/isElement';
import isEmptyString from '../TypeChecks/isEmptyString';
import isFunction from '../TypeChecks/isFunction';
import isHTML from '../TypeChecks/isHTML';
import isJSUI from '../TypeChecks/isJSUI';
import isNativeTag from '../TypeChecks/isNativeTag';
import isNull from '../TypeChecks/isNull';
import isNumber from '../TypeChecks/isNumber';
import isObject from '../TypeChecks/isObject';
import isPath from '../TypeChecks/isPath';
import isRegex from '../TypeChecks/isRegex';
import isString from '../TypeChecks/isString';
import isStyleRule from '../TypeChecks/isStyleRule';
import isTextNode from '../TypeChecks/isTextNode';
import isUJSUI from '../TypeChecks/isUJSUI';
import isUndefined from '../TypeChecks/isUndefined';
import isUStyleRule from '../TypeChecks/isUStyleRule';
import unhandled from '../TypeChecks/unhandled';

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
	unhandled: unhandled
};

export default TypeChecks;