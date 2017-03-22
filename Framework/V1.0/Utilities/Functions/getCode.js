
//TypeChecks
import isFunction from '/Framework/V1.0/TypeChecks/isFunction';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

export default function getCode(fn) {

	if (!isFunction(fn)) { return false; }

	let contents = fn.toString();
	let body = contents.substring(contents.indexOf("{") + 1, contents.lastIndexOf("}"));

	return body;
}

exports(getCode).as('/Framework/V1.0/Utilities/Functions/getCode');