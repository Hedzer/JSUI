
//TypeChecks
import isApplication from 'JSUI/Source/1.0.0/TypeChecks/isApplication';
import isArray from 'JSUI/Source/1.0.0/TypeChecks/isArray';
import isBoolean from 'JSUI/Source/1.0.0/TypeChecks/isBoolean';
import isData from 'JSUI/Source/1.0.0/TypeChecks/isData';
import isDOM from 'JSUI/Source/1.0.0/TypeChecks/isDOM';
import isEmptyString from 'JSUI/Source/1.0.0/TypeChecks/isEmptyString';
import isEndpoint from 'JSUI/Source/1.0.0/TypeChecks/isEndpoint';
import isExtensible from 'JSUI/Source/1.0.0/TypeChecks/isExtensible';
import isFeature from 'JSUI/Source/1.0.0/TypeChecks/isFeature';
import isFunction from 'JSUI/Source/1.0.0/TypeChecks/isFunction';
import isHTML from 'JSUI/Source/1.0.0/TypeChecks/isHTML';
import isElement from 'JSUI/Source/1.0.0/TypeChecks/isElement';
import isNativeTag from 'JSUI/Source/1.0.0/TypeChecks/isNativeTag';
import isNull from 'JSUI/Source/1.0.0/TypeChecks/isNull';
import isNumber from 'JSUI/Source/1.0.0/TypeChecks/isNumber';
import isObject from 'JSUI/Source/1.0.0/TypeChecks/isObject';
import isPage from 'JSUI/Source/1.0.0/TypeChecks/isPage';
import isPath from 'JSUI/Source/1.0.0/TypeChecks/isPath';
import isRegex from 'JSUI/Source/1.0.0/TypeChecks/isRegex';
import isRole from 'JSUI/Source/1.0.0/TypeChecks/isRole';
import isString from 'JSUI/Source/1.0.0/TypeChecks/isString';
import isStyleSheetRule from 'JSUI/Source/1.0.0/TypeChecks/isStyleSheetRule';
import isTextNode from 'JSUI/Source/1.0.0/TypeChecks/isTextNode';
import isUApplication from 'JSUI/Source/1.0.0/TypeChecks/isUApplication';
import isUData from 'JSUI/Source/1.0.0/TypeChecks/isUData';
import isUEndpoint from 'JSUI/Source/1.0.0/TypeChecks/isUEndpoint';
import isUFeature from 'JSUI/Source/1.0.0/TypeChecks/isUFeature';
import isUElement from 'JSUI/Source/1.0.0/TypeChecks/isUElement';
import isUndefined from 'JSUI/Source/1.0.0/TypeChecks/isUndefined';
import isUPage from 'JSUI/Source/1.0.0/TypeChecks/isUPage';
import isURole from 'JSUI/Source/1.0.0/TypeChecks/isURole';
import isUStyleSheetRule from 'JSUI/Source/1.0.0/TypeChecks/isUStyleSheetRule';

//Utilities
import exports from 'Parcello/exports';

let TypeChecks = {
	isApplication: isApplication,
	isArray: isArray,
	isBoolean: isBoolean,
	isData: isData,
	isDOM: isDOM,
	isEmptyString: isEmptyString,
	isEndpoint: isEndpoint,
	isExtensible: isExtensible,
	isFeature: isFeature,
	isFunction: isFunction,
	isHTML: isHTML,
	isElement: isElement,
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
	isUElement: isUElement,
	isUndefined: isUndefined,
	isUPage: isUPage,
	isURole: isURole,
	isUStyleSheetRule: isUStyleSheetRule,
};

export default TypeChecks;

exports(TypeChecks).as('JSUI/Source/1.0.0/Entry/TypeChecks');
