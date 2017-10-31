
//TypeChecks
import isFunction from 'JSUI/Source/1.0.0/TypeChecks/isFunction';

//Utilities
import exports from 'Parcello/exports';

export default function getCode(fn) {

	if (!isFunction(fn)) { return false; }

	let contents = fn.toString();
	let body = contents.substring(contents.indexOf("{") + 1, contents.lastIndexOf("}"));

	return body;
}

exports(getCode).as('JSUI/Source/1.0.0/Utilities/Functions/getCode');