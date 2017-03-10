
//TypeChecks
import isApplication from '/Framework/V1.0/TypeChecks/isApplication';
import isArray from '/Framework/V1.0/TypeChecks/isArray';
import isBoolean from '/Framework/V1.0/TypeChecks/isBoolean';
import isData from '/Framework/V1.0/TypeChecks/isData';
import isElement from '/Framework/V1.0/TypeChecks/isElement';
import isEmptyString from '/Framework/V1.0/TypeChecks/isEmptyString';
import isEndpoint from '/Framework/V1.0/TypeChecks/isEndpoint';
import isExtensible from '/Framework/V1.0/TypeChecks/isExtensible';
import isFeature from '/Framework/V1.0/TypeChecks/isFeature';
import isFunction from '/Framework/V1.0/TypeChecks/isFunction';
import isHTML from '/Framework/V1.0/TypeChecks/isHTML';
import isJSUI from '/Framework/V1.0/TypeChecks/isJSUI';
import isNativeTag from '/Framework/V1.0/TypeChecks/isNativeTag';
import isNull from '/Framework/V1.0/TypeChecks/isNull';
import isNumber from '/Framework/V1.0/TypeChecks/isNumber';
import isObject from '/Framework/V1.0/TypeChecks/isObject';
import isPage from '/Framework/V1.0/TypeChecks/isPage';
import isPath from '/Framework/V1.0/TypeChecks/isPath';
import isRegex from '/Framework/V1.0/TypeChecks/isRegex';
import isRole from '/Framework/V1.0/TypeChecks/isRole';
import isString from '/Framework/V1.0/TypeChecks/isString';
import isStyleSheetRule from '/Framework/V1.0/TypeChecks/isStyleSheetRule';
import isTextNode from '/Framework/V1.0/TypeChecks/isTextNode';
import isUApplication from '/Framework/V1.0/TypeChecks/isUApplication';
import isUData from '/Framework/V1.0/TypeChecks/isUData';
import isUEndpoint from '/Framework/V1.0/TypeChecks/isUEndpoint';
import isUFeature from '/Framework/V1.0/TypeChecks/isUFeature';
import isUJSUI from '/Framework/V1.0/TypeChecks/isUJSUI';
import isUndefined from '/Framework/V1.0/TypeChecks/isUndefined';
import isUPage from '/Framework/V1.0/TypeChecks/isUPage';
import isURole from '/Framework/V1.0/TypeChecks/isURole';
import isUStyleSheetRule from '/Framework/V1.0/TypeChecks/isUStyleSheetRule';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

let TypeChecks = {
	isApplication: isApplication,
	isArray: isArray,
	isBoolean: isBoolean,
	isData: isData,
	isElement: isElement,
	isEmptyString: isEmptyString,
	isEndpoint: isEndpoint,
	isExtensible: isExtensible,
	isFeature: isFeature,
	isFunction: isFunction,
	isHTML: isHTML,
	isJSUI: isJSUI,
	isNativeTag: isNativeTag,
	isNull: isNull,
	isNumber: isNumber,
	isObject: isObject,
	isPage: isPage,
	isPath: isPath,
	isRegex: isRegex,
	isRole: isRole,
	isString: isString,
	isStyleSheetRule: isStyleSheetRule,
	isTextNode: isTextNode,
	isUApplication: isUApplication,
	isUData: isUData,
	isUEndpoint: isUEndpoint,
	isUFeature: isUFeature,
	isUJSUI: isUJSUI,
	isUndefined: isUndefined,
	isUPage: isUPage,
	isURole: isURole,
	isUStyleSheetRule: isUStyleSheetRule,
};

export default TypeChecks;

exports(TypeChecks).as('/Framework/V1.0/JSUI/TypeChecks');
