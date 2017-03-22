
//TypeChecks
import isString from '/Framework/V1.0/TypeChecks/isString';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

let searcher = /["']((?:\\.|[^"\\])*)["']/g;
export default function getCodeStrings(text) {

	if (!isString(text)) { return false; }
	let matches = (text.match(searcher) || []);
	return matches.map((parts) => { return parts.match(/.+/)[0]; });
}

exports(getCodeStrings).as('/Framework/V1.0/Utilities/Templating/getCodeStrings');