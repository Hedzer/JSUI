import isArray from '/Framework/V1.0/TypeChecks/isArray';
import isElement from '/Framework/V1.0/TypeChecks/isElement';
import isEmptyString from '/Framework/V1.0/TypeChecks/isEmptyString';
import isFunction from '/Framework/V1.0/TypeChecks/isFunction';
import isHTML from '/Framework/V1.0/TypeChecks/isHTML';
import isJSUI from '/Framework/V1.0/TypeChecks/isJSUI';
import isNativeTag from '/Framework/V1.0/TypeChecks/isNativeTag';
import isNull from '/Framework/V1.0/TypeChecks/isNull';
import isNumber from '/Framework/V1.0/TypeChecks/isNumber';
import isObject from '/Framework/V1.0/TypeChecks/isObject';
import isPath from '/Framework/V1.0/TypeChecks/isPath';
import isRegex from '/Framework/V1.0/TypeChecks/isRegex';
import isString from '/Framework/V1.0/TypeChecks/isString';
import isStyleSheetRule from '/Framework/V1.0/TypeChecks/isStyleSheetRule';
import isTextNode from '/Framework/V1.0/TypeChecks/isTextNode';
import isUJSUI from '/Framework/V1.0/TypeChecks/isUJSUI';
import isUndefined from '/Framework/V1.0/TypeChecks/isUndefined';
import isUStyleSheetRule from '/Framework/V1.0/TypeChecks/isUStyleSheetRule';
import isData from '/Framework/V1.0/TypeChecks/isData';
import isUData from '/Framework/V1.0/TypeChecks/isUData';
import isBoolean from '/Framework/V1.0/TypeChecks/isBoolean';
import isExtensible from '/Framework/V1.0/TypeChecks/isExtensible';
import isApplication from '/Framework/V1.0/TypeChecks/isApplication';
import isRole from '/Framework/V1.0/TypeChecks/isRole';
import isFeature from '/Framework/V1.0/TypeChecks/isFeature';
import isPage from '/Framework/V1.0/TypeChecks/isPage';
import isEndpoint from '/Framework/V1.0/TypeChecks/isEndpoint';

let TypeChecks = {
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
	isStyleSheetRule: isStyleSheetRule,
	isTextNode: isTextNode,
	isUJSUI: isUJSUI,
	isUndefined: isUndefined,
	isUStyleSheetRule: isUStyleSheetRule,
	isData: isData,
	isUData: isUData,
	isBoolean: isBoolean,
	isExtensible: isExtensible,
	isApplication: isApplication,
	isRole: isRole,
	isFeature: isFeature,
	isPage: isPage,
	isEndpoint: isEndpoint
};

export default TypeChecks;