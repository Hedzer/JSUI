
//TypeChecks
import isString from '/Framework/V1.0/TypeChecks/isString';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

let searcher = /{{\s*.+\s*}}/g;
export default function getVariables(text) {

	if (!isString(text)) { return false; }

	let matches = (text.match(searcher) || []);

	return matches.map((part) => { return part.match(/.+/)[0]; });
}

exports(getVariables).as('/Framework/V1.0/Utilities/Templating/getVariables');