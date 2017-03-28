
//Utilities
import exports from '/JSUI/Source/1.0.0/Utilities/Dependencies/exports';

let htmlRegex = /^<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)$/;
export default function isHTML(u) {
	return htmlRegex.test(u);
}

exports(isHTML).as('/JSUI/Source/1.0.0/TypeChecks/isHTML');
