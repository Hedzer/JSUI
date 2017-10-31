
//TypeChecks
import isFunction from 'JSUI/Source/1.0.0/TypeChecks/isFunction';

//Utilities
import exports from 'Parcello/exports';
import getCodeStrings from 'JSUI/Source/1.0.0/Utilities/Templating/getCodeStrings';
import getVariables from 'JSUI/Source/1.0.0/Utilities/Templating/getVariables';
import getCode from 'JSUI/Source/1.0.0/Utilities/Functions/getCode';

export default function getFunctionVariables(fn) {

	if (!isFunction(fn)) { return false; }
	
	let vars = getVariables(getCodeStrings(getCode(fn)));
	return vars.map((v) => { return v.trim(); });

}

exports(getFunctionVariables).as('JSUI/Source/1.0.0/Utilities/Templating/getFunctionVariables');